
import React from 'react';
import { Practice } from './types';
import { PracticeCard } from './components/PracticeCard';
import { PracticeDetail } from './components/PracticeDetail';
import { PostPracticeReflection } from './components/PostPracticeReflection';
import { GenerativeMeditation } from './components/GenerativeMeditation';
import { useLanguage } from './context/LanguageContext';
import { translations } from './i18n/translations';
import * as Icons from './components/IconComponents';

// --- Timer Component ---

interface TimerProps {
  practice: Practice;
  duration: number;
  onBack: () => void;
  onComplete: () => void;
  t: (key: string) => string;
  audioContext: AudioContext | null;
}

const Timer: React.FC<TimerProps> = ({ practice, duration, onBack, onComplete, t, audioContext }) => {
  const [secondsLeft, setSecondsLeft] = React.useState(duration);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [phase, setPhase] = React.useState<'inhale' | 'exhale'>('exhale');

  const isSixSecondBreathing = practice.id === 'six-second-breathing';
  const phaseDuration = isSixSecondBreathing ? 6000 : 4000;

  React.useEffect(() => {
    if (secondsLeft <= 0) {
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate([100, 50, 100]);
      }
      
      const playCompletionSound = () => {
        if (!audioContext) return;

        const playNote = (frequency: number, startTime: number, volume: number, duration: number) => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(frequency, startTime);
          
          gainNode.gain.setValueAtTime(0, startTime);
          gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);

          oscillator.start(startTime);
          oscillator.stop(startTime + duration);
        };
        
        const now = audioContext.currentTime;
        const fundamental = 523.25;

        playNote(fundamental, now, 0.3, 2.5);
        playNote(fundamental * 1.5, now, 0.15, 2.5);
        playNote(fundamental * 2, now, 0.1, 2.5);
      };
      
      playCompletionSound();
      setIsCompleted(true);
      
      const timeoutId = setTimeout(() => {
        onComplete();
      }, 3000);

      return () => clearTimeout(timeoutId);
    }

    const intervalId = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsLeft, onComplete, audioContext]);

  React.useEffect(() => {
    if (isCompleted) return;

    const phaseInterval = setInterval(() => {
      setPhase(prev => (prev === 'inhale' ? 'exhale' : 'inhale'));
    }, phaseDuration);

    setPhase('inhale');

    return () => clearInterval(phaseInterval);
  }, [isCompleted, phaseDuration]);

  const phaseText = phase === 'inhale' ? t('breatheIn') : t('breatheOut');
  const circleAnimationClass = phase === 'inhale' ? 'scale-125' : 'scale-95';
  const benefitText = isSixSecondBreathing ? t('sixSecondBenefit') : t('coherenceBenefit');

  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50 animate-fade-in overflow-hidden" aria-modal="true" role="dialog">
      <div className="timer-background" />
      <div className="relative text-center text-white p-4 w-full z-10">
        {isCompleted ? (
          <div className="flex flex-col items-center justify-center animate-fade-in">
            <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-5xl text-white">✓</span>
            </div>
            <h2 className="text-4xl font-bold">{t('complete')}</h2>
            <p className="text-xl mt-2 text-slate-300">{t('timerCompleteMessage')}</p>
          </div>
        ) : (
          <>
            <button 
              onClick={onBack} 
              className="absolute top-6 left-6 z-10 flex items-center gap-2 text-slate-300 hover:text-white transition-colors" 
              aria-label={t('backButton')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-semibold text-lg">{t('backButton')}</span>
            </button>
            <h2 className="text-3xl font-bold mb-4 pt-16 sm:pt-0">{practice.title}</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-sm mx-auto whitespace-pre-wrap px-4">{practice.description}</p>
            
            <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
              <div 
                className={`absolute w-full h-full bg-teal-500/30 rounded-full transition-transform ease-in-out ${circleAnimationClass}`}
                style={{ transitionDuration: `${phaseDuration}ms` }}
              />
              <div className="absolute w-full h-full rounded-full border-2 border-slate-600" />
              
              <div className="z-10 flex flex-col items-center">
                <span className="text-3xl font-semibold mb-2">{phaseText}</span>
                <span className="text-6xl font-bold tracking-tighter tabular-nums">
                  {secondsLeft}
                </span>
              </div>
            </div>
            
            <p className="mt-8 text-slate-300 max-w-sm mx-auto">{benefitText}</p>
          </>
        )}
      </div>
    </div>
  );
};


// --- Main App Component ---

const App: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [viewedPractice, setViewedPractice] = React.useState<Practice | null>(null);
  const [practiceForTimer, setPracticeForTimer] = React.useState<Practice | null>(null);
  const [completedPractice, setCompletedPractice] = React.useState<Practice | null>(null);
  const [duration, setDuration] = React.useState(60);
  const [practiceOfTheDay, setPracticeOfTheDay] = React.useState<Practice | null>(null);
  const audioContextRef = React.useRef<AudioContext | null>(null);

  const practiceCategories = React.useMemo(() => (translations[language] || translations.en).practiceCategories || [], [language]);
  const [activeCategoryTitle, setActiveCategoryTitle] = React.useState<string | null>(null);

  const durationOptions = React.useMemo(() => [
    { label: t('durations.d30s'), value: 30 },
    { label: t('durations.d1m'), value: 60 },
    { label: t('durations.d2m'), value: 120 },
  ], [t]);
  
  React.useEffect(() => {
    if (practiceCategories.length > 0) {
      const allPractices = practiceCategories.flatMap(c => c.practices);
      if (allPractices.length > 0) {
        const randomIndex = Math.floor(Math.random() * allPractices.length);
        setPracticeOfTheDay(allPractices[randomIndex]);
      }
      if (!activeCategoryTitle) {
        setActiveCategoryTitle(practiceCategories[0].categoryTitle);
      }
    }
  }, [practiceCategories, activeCategoryTitle]);

  const IconComponent = practiceOfTheDay?.icon ? Icons[practiceOfTheDay.icon as keyof typeof Icons] : null;
  
  const handleSelectPractice = (practice: Practice) => {
    setViewedPractice(practice);
  };

  const handleCloseModals = () => {
    setViewedPractice(null);
    setPracticeForTimer(null);
    setCompletedPractice(null);
  };

  const handleStartPractice = () => {
    if (typeof window.AudioContext !== 'undefined' || typeof (window as any).webkitAudioContext !== 'undefined') {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume();
        }
    }

    if (viewedPractice) {
      setPracticeForTimer(viewedPractice);
      setViewedPractice(null);
    }
  };

  const handlePracticeComplete = (practice: Practice) => {
    setPracticeForTimer(null);
    setCompletedPractice(practice);
  };

  return (
    <>
      {viewedPractice && !practiceForTimer && (
        <PracticeDetail 
          practice={viewedPractice}
          onClose={() => setViewedPractice(null)}
          onStart={handleStartPractice}
          t={t}
        />
      )}
      {practiceForTimer && (
        <Timer 
          practice={practiceForTimer} 
          duration={duration} 
          onBack={handleCloseModals} 
          onComplete={() => handlePracticeComplete(practiceForTimer)}
          t={t}
          audioContext={audioContextRef.current}
        />
      )}
      {completedPractice && (
        <PostPracticeReflection
          practice={completedPractice}
          onClose={handleCloseModals}
          t={t}
        />
      )}
      <div className="text-slate-800 antialiased">
        <header className="relative text-center" style={{backgroundColor: '#F5EFE3'}}>
            <div className="absolute top-4 right-4 z-20">
                <div className="flex items-center bg-stone-200/40 rounded-full p-1 backdrop-blur-sm">
                    <button
                        onClick={() => setLanguage('en')}
                        aria-pressed={language === 'en'}
                        className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-200 ${
                        language === 'en'
                            ? 'bg-white/90 text-teal-800 shadow-sm'
                            : 'text-amber-900 hover:bg-white/50'
                        }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => setLanguage('fr')}
                        aria-pressed={language === 'fr'}
                        className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-200 ${
                        language === 'fr'
                            ? 'bg-white/90 text-teal-800 shadow-sm'
                            : 'text-amber-900 hover:bg-white/50'
                        }`}
                    >
                        Français
                    </button>
                </div>
            </div>
            <img
                src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6710a301-443b-432d-9372-2fc456105820_1200x1200.jpeg"
                alt="Oasis - Free One-Minute Micro-Meditations, offered by Kaze Dojo"
                className="mx-auto w-full max-w-2xl px-4 pt-4"
            />
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="bg-stone-50/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl py-12 px-8 space-y-12 shadow-sm">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">{t('whyTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-8 text-slate-700 leading-relaxed">
                  <div className="bg-stone-50 p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-lg text-teal-700 mb-2">{t('needResetTitle')}</h3>
                    <p>{t('needResetText')}</p>
                  </div>
                  <div className="bg-stone-50 p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-lg text-teal-700 mb-2">{t('busyLivesTitle')}</h3>
                    <p>{t('busyLivesText')}</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">{t('whatIsTitle')}</h2>
                <p className="text-center max-w-2xl mx-auto text-slate-600 mb-6">
                  {t('whatIsText')}
                </p>
              </section>
            </div>
            
            <section className="bg-teal-600 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{t('howItWorksTitle')}</h2>
              <p className="text-center max-w-3xl mx-auto text-teal-100 leading-relaxed">
                {t('howItWorksText')}
              </p>
            </section>
          </div>

          {practiceOfTheDay && (
            <section className="mt-20">
              <div className="max-w-4xl mx-auto animated-gradient p-8 rounded-2xl shadow-lg border border-slate-200/50">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">{t('practiceOfTheDay.title')}</h2>
                <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
                  <div className="flex-shrink-0">
                    {IconComponent && <IconComponent className="h-20 w-20 text-teal-800" />}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-2">{practiceOfTheDay.title}</h3>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap mb-6">{practiceOfTheDay.description}</p>
                    <button
                      onClick={() => handleSelectPractice(practiceOfTheDay)}
                      className="inline-block bg-stone-50 text-teal-700 font-bold py-3 px-8 rounded-lg hover:bg-teal-100 transition-colors duration-300 shadow-sm"
                    >
                      {t('practiceOfTheDay.button')}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="mt-20 bg-stone-50/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl py-12 px-4 sm:px-8 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">{t('toolkitTitle')}</h2>
            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
              {t('toolkitSubtitle')}
            </p>
            
            <div className="flex justify-center items-center gap-2 mb-12">
              <span className="text-slate-600 font-medium mr-2">{t('setDuration')}</span>
              <div className="flex items-center bg-slate-200/75 rounded-full p-1">
                {durationOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setDuration(option.value)}
                    className={`px-4 py-1 text-sm font-semibold rounded-full transition-colors duration-200 ${
                      duration === option.value
                        ? 'bg-stone-50 text-teal-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-800'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-10 border-b border-slate-200 pb-4">
                {practiceCategories.map((category) => (
                <button
                    key={category.categoryTitle}
                    onClick={() => setActiveCategoryTitle(category.categoryTitle)}
                    className={`px-4 sm:px-6 py-2 text-base font-semibold rounded-full transition-all duration-200 border-2 ${
                    activeCategoryTitle === category.categoryTitle
                        ? 'bg-teal-600 text-white border-teal-600 shadow'
                        : 'bg-stone-50 text-slate-600 hover:bg-stone-100 border-transparent hover:border-slate-300'
                    }`}
                >
                    {category.categoryTitle}
                </button>
                ))}
            </div>

            {practiceCategories.map((category) => (
                activeCategoryTitle === category.categoryTitle && (
                <div key={category.categoryTitle} className="animate-fade-in">
                    <p className="text-center text-xl text-teal-800 mb-10 max-w-2xl mx-auto">
                      {category.categorySubtitle}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {category.practices.map((practice) => (
                        <PracticeCard
                        key={practice.title}
                        practice={practice}
                        onSelect={handleSelectPractice}
                        />
                    ))}
                    </div>
                </div>
                )
            ))}
          </section>

          <section className="mt-20">
            <GenerativeMeditation />
          </section>
          
          <section className="mt-20">
            <div className="bg-stone-50/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl py-8 px-8 max-w-4xl mx-auto text-center shadow-sm">
              <p className="max-w-3xl mx-auto text-slate-700 text-lg italic leading-relaxed">
                {t('whyItMattersText')}
              </p>
            </div>
          </section>

          <section className="mt-20">
            <div className="bg-teal-600 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('continueJourneyTitle')}
              </h2>
              <p className="text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('continueJourneyText')}
              </p>
              <a
                href="https://chatgpt.com/g/g-68ea7895583c8191a6e56013f66ef72a-kaze-the-way-of-the-wind-mindfulness-dojo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-teal-700 font-bold py-3 px-8 rounded-lg hover:bg-teal-100 transition-colors duration-300 shadow-sm"
              >
                {t('continueJourneyButton')}
              </a>
            </div>
          </section>

        </main>
        
        <footer className="text-center py-8 text-slate-600">
          <p>{t('footerText')}</p>
          <p className="mt-4 text-sm text-slate-500">
            {t('footerAuthor')} <a href="https://pgeslin.substack.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-600 transition-colors">{t('footerLink')}</a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;