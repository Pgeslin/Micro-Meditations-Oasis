
import React from 'react';

interface BreathingExerciseProps {
  duration: number;
  onClose: () => void;
  t: (key: string) => string;
}

const BreathingExercise: React.FC<BreathingExerciseProps> = ({ duration, onClose, t }) => {
  const [timeLeft, setTimeLeft] = React.useState(duration);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [phase, setPhase] = React.useState<'inhale' | 'exhale'>('inhale');
  
  React.useEffect(() => {
    if (isCompleted) {
      if (window.navigator && window.navigator.vibrate) {
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
          gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);
          oscillator.start(startTime);
          oscillator.stop(startTime + duration);
        };
        
        const now = audioContext.currentTime;
        playNote(523.25, now, 0.3, 2.5);
        playNote(523.25 * 1.5, now, 0.15, 2.5);
        playNote(523.25 * 2, now, 0.1, 2.5);
      };
      
      playCompletionSound();
      
      const timeoutId = setTimeout(onClose, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [isCompleted, onClose]);

  React.useEffect(() => {
    if (isCompleted) return;

    const countdownInterval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setIsCompleted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const phaseInterval = setInterval(() => {
      setPhase(prev => (prev === 'inhale' ? 'exhale' : 'inhale'));
    }, 6000);

    setPhase('inhale');

    return () => {
      clearInterval(countdownInterval);
      clearInterval(phaseInterval);
    };
  }, [isCompleted]);
  
  const phaseText = phase === 'inhale' ? t('breatheIn') : t('breatheOut');
  const circleAnimationClass = phase === 'inhale' ? 'scale-125' : 'scale-100';

  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in" aria-modal="true" role="dialog">
      <div className="relative text-center text-white p-4 w-full">
        {isCompleted ? (
          <div className="flex flex-col items-center justify-center animate-fade-in">
            <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-5xl text-white">✓</span>
            </div>
            <h2 className="text-4xl font-bold">{t('complete')}</h2>
            <p className="text-xl mt-2 text-slate-300">{t('breathingCompleteMessage')}</p>
          </div>
        ) : (
          <>
            <button onClick={onClose} className="absolute -top-12 right-4 sm:top-0 sm:-right-12 text-slate-400 hover:text-white transition-colors text-2xl font-mono" aria-label={t('closeTimer')}>
              [x]
            </button>
            <h2 className="text-3xl font-bold mb-8">{t('practices.0.title')}</h2>

            <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
              <div 
                className={`absolute w-full h-full bg-teal-500/30 rounded-full transition-transform duration-[6000ms] ease-in-out ${circleAnimationClass}`}
              />
              <div className="absolute w-full h-full rounded-full border-2 border-slate-600" />
              
              <div className="z-10 flex flex-col items-center">
                <span className="text-3xl font-semibold mb-2">{phaseText}</span>
                <span className="text-6xl font-bold tracking-tighter tabular-nums">
                  {timeLeft}
                </span>
              </div>
            </div>
            
            <p className="mt-8 text-slate-300">{t('breathingInstruction')}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BreathingExercise;