
import React, { useState, useEffect, useCallback } from 'react';

const REMINDER_STORAGE_KEY = 'mindful_reminder_due_time';

export const Reminder: React.FC = () => {
  const [permission, setPermission] = useState<NotificationPermission | null>(null);
  const [reminderTime, setReminderTime] = useState<number | null>(null);
  // FIX: `setTimeout` in the browser returns a `number` for the timer ID, not the `NodeJS.Timeout` object.
  const timeoutIdRef = React.useRef<number | null>(null);

  const clearReminder = useCallback(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    setReminderTime(null);
    localStorage.removeItem(REMINDER_STORAGE_KEY);
  }, []);

  const showNotification = useCallback(() => {
    new Notification('Time for a Mindful Moment', {
      body: 'Click here to take a short pause and reset your day.',
      icon: '/favicon.ico', // You might want to replace with a proper icon
    });
    clearReminder();
  }, [clearReminder]);
  
  const setReminder = useCallback((minutes: number) => {
    clearReminder();
    const dueTime = Date.now() + minutes * 60 * 1000;
    const delay = dueTime - Date.now();

    if (delay > 0) {
      timeoutIdRef.current = window.setTimeout(showNotification, delay);
      setReminderTime(dueTime);
      localStorage.setItem(REMINDER_STORAGE_KEY, dueTime.toString());
    }
  }, [clearReminder, showNotification]);

  useEffect(() => {
    // Check initial permission status
    if ('Notification' in window) {
      setPermission(Notification.permission);
      
      // Check for a reminder from a previous session
      const savedTime = localStorage.getItem(REMINDER_STORAGE_KEY);
      if (savedTime) {
        const dueTime = parseInt(savedTime, 10);
        const delay = dueTime - Date.now();
        if (delay > 0) {
           timeoutIdRef.current = window.setTimeout(showNotification, delay);
           setReminderTime(dueTime);
        } else {
            // Clean up expired reminder
            localStorage.removeItem(REMINDER_STORAGE_KEY);
        }
      }
    }
    // Cleanup timeout on unmount
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [showNotification]);


  const handleSetReminderClick = (minutes: number) => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
      return;
    }
    
    if (permission === 'granted') {
      setReminder(minutes);
    } else if (permission !== 'denied') {
      Notification.requestPermission().then((newPermission) => {
        setPermission(newPermission);
        if (newPermission === 'granted') {
          setReminder(minutes);
        }
      });
    }
  };
  
  const renderContent = () => {
    if (permission === 'denied') {
      return (
        <p className="text-center text-slate-600 max-w-md mx-auto">
          Notifications for this site are currently turned off. To use reminders, please enable them in your browser settings. You can often find this option by clicking the lock icon in the address bar.
        </p>
      );
    }

    if (reminderTime) {
      return (
        <div className="text-center">
            <p className="text-slate-700 font-medium text-lg mb-4">
                A mindful reminder is set for {new Date(reminderTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.
            </p>
            <button
                onClick={clearReminder}
                className="bg-slate-200 text-slate-700 font-bold py-2 px-6 rounded-lg hover:bg-slate-300 transition-colors"
            >
                Clear Reminder
            </button>
        </div>
      )
    }

    return (
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <button onClick={() => handleSetReminderClick(15)} className="px-5 py-2 text-base font-medium rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                In 15 min
            </button>
            <button onClick={() => handleSetReminderClick(60)} className="px-5 py-2 text-base font-medium rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                In 1 hour
            </button>
            <button onClick={() => handleSetReminderClick(240)} className="px-5 py-2 text-base font-medium rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                In 4 hours
            </button>
        </div>
    );
  }

  // Don't render anything if notifications aren't supported
  if (!('Notification' in window)) {
    return null;
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Set a Mindful Reminder</h2>
        <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
          Let us gently nudge you to take a pause later in your day.
        </p>
        {renderContent()}
      </div>
    </div>
  );
};
