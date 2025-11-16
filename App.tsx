
import React from 'react';
import { Practice } from './types';
import { PracticeCard } from './components/PracticeCard';
import { GenerativeMeditation } from './components/GenerativeMeditation';
import BreathingExercise from './components/BreathingExercise';

// --- Timer Component ---

interface TimerProps {
  practice: Practice;
  duration: number;
  onClose: () => void;
}

const Timer: React.FC<TimerProps> = ({ practice, duration, onClose }) => {
  const [secondsLeft, setSecondsLeft] = React.useState(duration);
  const [isCompleted, setIsCompleted] = React.useState(false);

  React.useEffect(() => {
    if (secondsLeft <= 0) {
      // Trigger haptic feedback on completion if supported
      if (window.navigator && window.navigator.vibrate) {
        // A short vibration pattern: vibrate 100ms, pause 50ms, vibrate 100ms
        window.navigator.vibrate([100, 50, 100]);
      }
      
      const playCompletionSound = () => {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        if (!audioContext) return;

        const playNote = (frequency: number, startTime: number, volume: number, duration: number) => {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();

          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);

          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(frequency, startTime);
          
          gainNode.gain.setValueAtTime(0, startTime);
          gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.01); // Quick attack
          gainNode.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);

          oscillator.start(startTime);
          oscillator.stop(startTime + duration);
        };
        
        const now = audioContext.currentTime;
        const fundamental = 523.25; // C5 - a clear, pleasant frequency

        // Play a chord to create a gentle chime sound
        playNote(fundamental, now, 0.3, 2.5);       // Root note
        playNote(fundamental * 1.5, now, 0.15, 2.5); // Perfect fifth
        playNote(fundamental * 2, now, 0.1, 2.5);    // Octave
      };
      
      playCompletionSound();
      setIsCompleted(true);
      
      const timeoutId = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timeoutId);
    }

    const intervalId = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsLeft, onClose]);

  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in" aria-modal="true" role="dialog">
      <div className="relative text-center text-white p-4">
        {isCompleted ? (
          <div className="flex flex-col items-center justify-center animate-fade-in">
            <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-5xl text-white">✓</span>
            </div>
            <h2 className="text-4xl font-bold">Complete</h2>
            <p className="text-xl mt-2 text-slate-300">You've found your moment of calm.</p>
          </div>
        ) : (
          <>
            <button onClick={onClose} className="absolute -top-12 right-0 sm:top-0 sm:-right-16 text-slate-400 hover:text-white transition-colors text-2xl font-mono" aria-label="Close timer">
              [x]
            </button>
            <h2 className="text-3xl font-bold mb-8">{practice.title}</h2>
            <div className="relative w-52 h-52 mx-auto flex items-center justify-center bg-slate-700/50 rounded-full border-4 border-slate-600">
              <span className="absolute inset-0 flex items-center justify-center text-6xl font-bold tracking-tighter tabular-nums">
                {secondsLeft}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


// --- Main App Component ---

const practices: Practice[] = [
    {
    id: 'six-second-breathing',
    title: 'Six-Second Breathing',
    description: 'Steady six-second inhales and exhales to regulate the nervous system and lower anxiety.',
  },
  {
    title: 'Breath Check-in',
    description: 'Take three conscious breaths. Feel the air fill your lungs on the inhale, and release all tension on the exhale.',
  },
  {
    title: 'Sensory Grounding',
    description: 'Notice five specific sensations around you (sight, sound, touch, smell, taste) to anchor yourself in the present moment.',
  },
  {
    title: 'Gratitude Pause',
    description: 'Bring to mind one simple thing you genuinely appreciate right now. It could be your coffee, a sunny day, or a favorite song.',
  },
  {
    title: 'Micro-Movement',
    description: 'Step away from your screen. Do a one-minute stretch, or take a quick walk to a window and back to reset your body and mind.',
  }
];

const durationOptions = [
  { label: '30s', value: 30 },
  { label: '1 min', value: 60 },
  { label: '2 min', value: 120 },
];

const App: React.FC = () => {
  const [activePractice, setActivePractice] = React.useState<Practice | null>(null);
  const [showBreathingExercise, setShowBreathingExercise] = React.useState(false);
  const [duration, setDuration] = React.useState(60);

  const handleSelectPractice = (practice: Practice) => {
    if (practice.id === 'six-second-breathing') {
      setShowBreathingExercise(true);
    } else {
      setActivePractice(practice);
    }
  };

  const handleCloseModals = () => {
    setActivePractice(null);
    setShowBreathingExercise(false);
  };

  return (
    <>
      {activePractice && <Timer practice={activePractice} duration={duration} onClose={handleCloseModals} />}
      {showBreathingExercise && <BreathingExercise duration={duration} onClose={handleCloseModals} />}
      <div className="bg-slate-50 min-h-screen text-slate-800 antialiased">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-4">
              The Power of the Pause
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-600">
              Discover micro-meditations—the art of finding peace and focus in under 60 seconds. Perfect for your busy, digitally-driven life.
            </p>
          </header>

          {/* Informational Sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">Why Is Everyone Talking About This?</h2>
              <div className="grid md:grid-cols-2 gap-8 text-slate-700 leading-relaxed">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-lg text-teal-700 mb-2">The Need for a Reset</h3>
                  <p>Digital overload is real. Constant notifications and endless scrolling leave our minds cluttered. Micro-meditations offer a quick, accessible way to hit the reset button, cutting through the noise without a huge time commitment.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="font-semibold text-lg text-teal-700 mb-2">Designed for Busy Lives</h3>
                  <p>In a world that glorifies being busy, finding an hour for wellness can feel impossible. These tiny practices fit into the cracks of your day—while waiting for coffee, between meetings, or before sending an email.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">What Counts as a Micro-Meditation?</h2>
              <p className="text-center max-w-2xl mx-auto text-slate-600 mb-6">
                Simply put, it's any mindfulness practice that takes a minute or less. The goal isn't to empty your mind, but to gently guide your focus for a brief moment. It's about quality, not duration.
              </p>
            </section>
            
            <section className="mt-16">
             <GenerativeMeditation />
            </section>

            <section className="bg-teal-600 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">How Can 60 Seconds Actually Work?</h2>
              <p className="text-center max-w-3xl mx-auto text-teal-100 leading-relaxed">
                Even a few deep breaths can signal to your brain that it's safe to relax. This activates the parasympathetic nervous system—your body's natural "rest and digest" mode. This simple switch helps lower stress hormones, reduce your heart rate, and improve your ability to focus. It’s a small action with a significant biological impact.
              </p>
            </section>
          </div>

          {/* Practical Practices Section */}
          <section className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center">Your Reset Toolkit</h2>
            <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
              Choose a practice that resonates with you and set your preferred duration.
            </p>
            
            <div className="flex justify-center items-center gap-2 mb-12">
              <span className="text-slate-600 font-medium mr-2">Set Duration:</span>
              <div className="flex items-center bg-slate-200/75 rounded-full p-1">
                {durationOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setDuration(option.value)}
                    className={`px-4 py-1 text-sm font-semibold rounded-full transition-colors duration-200 ${
                      duration === option.value
                        ? 'bg-white text-teal-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-800'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {practices.map((practice) => (
                <PracticeCard
                  key={practice.title}
                  practice={practice}
                  onSelect={handleSelectPractice}
                />
              ))}
            </div>
          </section>

        </main>
        
        <footer className="text-center py-8 text-slate-500">
          <p>Breathe in, breathe out. Your moment of calm is always available.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
