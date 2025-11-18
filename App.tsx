
import React from 'react';
import { Practice } from './types';
import { PracticeCard } from './components/PracticeCard';
import { PracticeDetail } from './components/PracticeDetail';
import { PostPracticeReflection } from './components/PostPracticeReflection';
import { GenerativeMeditation } from './components/GenerativeMeditation';
import { useLanguage } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
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
  const { theme, toggleTheme } = useTheme();
  const [viewedPractice, setViewedPractice] = React.useState<Practice | null>(null);
  const [practiceForTimer, setPracticeForTimer] = React.useState<Practice | null>(null);
  const [completedPractice, setCompletedPractice] = React.useState<Practice | null>(null);
  const [duration, setDuration] = React.useState(60);
  const [practiceOfTheDay, setPracticeOfTheDay] = React.useState<Practice | null>(null);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const practiceRef = React.useRef<HTMLDivElement>(null);

  const practiceCategories = React.useMemo(() => (translations[language] || translations.en).practiceCategories || [], [language]);

  const durationOptions = React.useMemo(() => [
    { label: t('durations.d30s'), value: 30 },
    { label: t('durations.d1m'), value: 60 },
    { label: t('durations.d2m'), value: 120 },
  ], [t]);
  
  // Initial load of Practice of the Day
  React.useEffect(() => {
    if (practiceCategories.length > 0) {
      const allPractices = practiceCategories.flatMap(c => c.practices);
      if (allPractices.length > 0) {
        const randomIndex = Math.floor(Math.random() * allPractices.length);
        setPracticeOfTheDay(allPractices[randomIndex]);
      }
    }
  }, [practiceCategories]);

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

  const scrollToPractice = () => {
    practiceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTryAnother = () => {
     if (practiceCategories.length > 0) {
      const allPractices = practiceCategories.flatMap(c => c.practices);
      // Filter out current if possible to ensure a change, though random is random
      const otherPractices = allPractices.filter(p => p.title !== practiceOfTheDay?.title);
      
      if (otherPractices.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherPractices.length);
        setPracticeOfTheDay(otherPractices[randomIndex]);
      }
    }
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
      
      <div className="text-slate-800 dark:text-slate-200 antialiased min-h-screen flex flex-col">
        
        {/* --- HEADER --- */}
        <header className="relative py-12 md:py-20 px-4">
           <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 dark:bg-slate-800/40 text-slate-800 dark:text-yellow-300 backdrop-blur-sm hover:bg-white/60 dark:hover:bg-slate-800/60 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                )}
              </button>
              <div className="flex items-center bg-white/40 dark:bg-slate-800/40 rounded-full p-1 backdrop-blur-sm">
                  <button
                      onClick={() => setLanguage('en')}
                      aria-pressed={language === 'en'}
                      className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-200 ${
                      language === 'en'
                          ? 'bg-white/90 dark:bg-slate-600/90 text-teal-800 dark:text-white shadow-sm'
                          : 'text-slate-800 dark:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50'
                      }`}
                  >
                      EN
                  </button>
                  <button
                      onClick={() => setLanguage('fr')}
                      aria-pressed={language === 'fr'}
                      className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-200 ${
                      language === 'fr'
                          ? 'bg-white/90 dark:bg-slate-600/90 text-teal-800 dark:text-white shadow-sm'
                          : 'text-slate-800 dark:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50'
                      }`}
                  >
                      FR
                  </button>
              </div>
          </div>

          <div className="max-w-4xl mx-auto text-center z-10 relative">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-teal-800 dark:text-teal-100 mb-8" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              Oasis
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
              {t('heroSubtitle')}
            </p>
            
            <div className="mt-12">
               <button 
                onClick={scrollToPractice}
                className="bg-teal-600 text-white font-semibold py-2 px-8 rounded-full hover:bg-teal-700 transition-all shadow-sm"
               >
                 {t('beginButton')}
               </button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex-grow max-w-5xl">

          {/* --- PRACTICE OF THE DAY --- */}
          {practiceOfTheDay && (
            <section ref={practiceRef} className="scroll-mt-8 mb-12">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 md:p-10 rounded-2xl shadow-sm max-w-2xl mx-auto text-center relative overflow-hidden">
                 {/* Subtle decorative background element */}
                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-blue-500"></div>

                <h2 className="text-sm uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold mb-6">
                  {t('practiceOfTheDay.title')}
                </h2>
                
                {IconComponent && (
                  <div className="flex justify-center mb-6">
                    <IconComponent className="h-12 w-12 text-teal-500 dark:text-teal-300" />
                  </div>
                )}
                
                <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                  {practiceOfTheDay.title}
                </h3>
                <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap mb-8">
                  {practiceOfTheDay.description}
                </p>
                
                <button
                  onClick={() => handleSelectPractice(practiceOfTheDay)}
                  className="inline-block bg-teal-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-md text-lg"
                >
                  {t('practiceOfTheDay.button')}
                </button>
              </div>
            </section>
          )}

          {/* --- TRY ANOTHER BLOCK --- */}
          <section className="mb-24 max-w-2xl mx-auto">
             <button
              onClick={handleTryAnother}
              className="w-full group relative bg-white/60 dark:bg-slate-800/60 hover:bg-teal-50 dark:hover:bg-slate-700 border-2 border-teal-200 dark:border-teal-800/50 hover:border-teal-400 dark:hover:border-teal-600 rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-4"
             >
                <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-full group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-700 dark:text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-teal-800 dark:text-teal-200">{t('tryAnotherButton')}</span>
             </button>
          </section>

          {/* --- LIST OF MICRO-PRACTICES --- */}
          <section className="mb-24">
            <div className="flex justify-between items-end mb-12 border-b border-slate-200 dark:border-slate-700 pb-4">
               <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Core Practices</h2>
               
                <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full p-1">
                  {durationOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setDuration(option.value)}
                      className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${
                        duration === option.value
                          ? 'bg-white dark:bg-slate-600 text-teal-700 dark:text-white shadow-sm border border-slate-200 dark:border-slate-500'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
            </div>

            <div className="space-y-20">
              {practiceCategories.map((category) => (
                <div key={category.categoryTitle} className="animate-fade-in">
                  <div className="mb-8">
                     <h3 className="text-2xl font-bold text-teal-800 dark:text-teal-200 mb-2">{category.categoryTitle}</h3>
                     <p className="text-slate-600 dark:text-slate-400 text-lg italic">{category.categorySubtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.practices.map((practice) => (
                      <PracticeCard
                        key={practice.title}
                        practice={practice}
                        onSelect={handleSelectPractice}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- GENERATIVE SECTION --- */}
          <section className="mb-20">
             <GenerativeMeditation />
          </section>
          
          {/* --- CONTINUE JOURNEY --- */}
          <section className="text-center max-w-3xl mx-auto px-4 py-12 bg-slate-100 dark:bg-slate-800/50 rounded-3xl mb-12">
             <h3 className="text-2xl font-bold text-teal-800 dark:text-teal-200 mb-4">{t('continueJourneyTitle')}</h3>
             <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">{t('continueJourneyText')}</p>
             <a
                href="https://chatgpt.com/g/g-68ea7895583c8191a6e56013f66ef72a-kaze-the-way-of-the-wind-mindfulness-dojo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-200 font-semibold py-3 px-8 rounded-full border border-teal-200 dark:border-teal-700 hover:bg-teal-50 dark:hover:bg-slate-600 transition-colors shadow-sm"
              >
                {t('continueJourneyButton')}
              </a>
          </section>

        </main>
        
        <footer className="text-center py-12 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50">
          <div className="container mx-auto px-4">
             <p className="font-serif italic text-xl text-teal-800 dark:text-teal-200 mb-8 opacity-80">
               {t('blessingText')}
             </p>
             <p className="whitespace-pre-wrap text-sm opacity-70">{t('footerText')}</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
