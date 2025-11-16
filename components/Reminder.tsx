
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const REMINDER_STORAGE_KEY = 'mindful_reminders_list_v2';

// Helper to format time for display
const formatTime = (time: string, locale: string) => {
  if (!time) return '';
  const [hour, minute] = time.split(':');
  const d = new Date();
  d.setHours(parseInt(hour, 10), parseInt(minute, 10));
  return d.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
};

export const Reminder: React.FC = () => {
  const { t, language } = useLanguage();
  const [permission, setPermission] = useState<NotificationPermission | null>(null);
  const [reminders, setReminders] = useState<string[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newTime, setNewTime] = useState('');
  const timeoutIdsRef = useRef<{ [key: string]: number }>({});

  const showNotification = useCallback((time: string) => {
    new Notification(t('notification.title'), {
      body: t('notification.body'),
      icon: '/favicon.ico',
    });
    // Remove the reminder that just fired
    setReminders(prev => {
        const updatedReminders = prev.filter(r => r !== time);
        try {
            localStorage.setItem(REMINDER_STORAGE_KEY, JSON.stringify(updatedReminders));
        } catch(e) {
            console.error("Error updating localStorage after notification", e);
        }
        return updatedReminders;
    });
  }, [t]);

  const scheduleReminder = useCallback((time: string) => {
    const now = new Date();
    const [hour, minute] = time.split(':').map(Number);
    
    let reminderDate = new Date();
    reminderDate.setHours(hour, minute, 0, 0);

    // If the reminder time is in the past for today, schedule it for tomorrow
    if (reminderDate.getTime() < now.getTime()) {
      reminderDate.setDate(reminderDate.getDate() + 1);
    }

    const delay = reminderDate.getTime() - now.getTime();

    if (delay > 0) {
      if (timeoutIdsRef.current[time]) {
        clearTimeout(timeoutIdsRef.current[time]);
      }
      const timeoutId = window.setTimeout(() => showNotification(time), delay);
      timeoutIdsRef.current[time] = timeoutId;
      return true;
    }
    return false;
  }, [showNotification]);

  const clearReminder = useCallback((time: string) => {
    if (timeoutIdsRef.current[time]) {
      clearTimeout(timeoutIdsRef.current[time]);
      delete timeoutIdsRef.current[time];
    }
    setReminders(prev => {
        const newReminders = prev.filter(r => r !== time);
        localStorage.setItem(REMINDER_STORAGE_KEY, JSON.stringify(newReminders));
        return newReminders;
    });
  }, []);

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
      
      try {
        const savedReminders: string[] = JSON.parse(localStorage.getItem(REMINDER_STORAGE_KEY) || '[]');
        // Reschedule all saved reminders for their next available time
        savedReminders.forEach(time => scheduleReminder(time));
        setReminders(savedReminders.sort());
      } catch (e) {
        console.error("Failed to parse reminders from localStorage", e);
        localStorage.removeItem(REMINDER_STORAGE_KEY);
      }
    }
    return () => {
      Object.values(timeoutIdsRef.current).forEach(clearTimeout);
    };
  }, [scheduleReminder]);

  const handleRequestPermission = () => {
    if (!('Notification' in window) || permission === 'denied') {
      return;
    }

    const handlePermissionResult = (newPermission: NotificationPermission) => {
      setPermission(newPermission);
    };

    // The modern API returns a promise.
    // The deprecated API accepts a callback.
    // We try the promise-based approach first.
    try {
      const promise = Notification.requestPermission();
      if (promise) {
        promise.then(handlePermissionResult).catch(err => {
          console.error("Error requesting notification permission:", err);
        });
      } else {
        // Fallback for browsers that use the deprecated callback syntax.
        Notification.requestPermission(handlePermissionResult);
      }
    } catch (error) {
       // Some browsers (older Chrome) might throw an error if a callback is provided.
       // We try again without the callback.
       Notification.requestPermission().then(handlePermissionResult);
    }
  };

  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTime || reminders.includes(newTime)) return;
    
    if (scheduleReminder(newTime)) {
        const newReminders = [...reminders, newTime].sort();
        setReminders(newReminders);
        localStorage.setItem(REMINDER_STORAGE_KEY, JSON.stringify(newReminders));
    }
    setNewTime('');
    setIsAdding(false);
  };
  
  const renderContent = () => {
    if (permission === 'denied') {
      return (
        <p className="text-center text-teal-100 max-w-md mx-auto">
          {t('notificationsDenied')}
        </p>
      );
    }
    
    if (permission !== 'granted') {
        return (
            <button onClick={handleRequestPermission} className="px-5 py-2 text-base font-medium rounded-full bg-white text-teal-700 hover:bg-teal-100 transition-colors shadow-sm">
                {t('enableNotifications')}
            </button>
        )
    }

    if (isAdding) {
        return (
            <form onSubmit={handleAddReminder} className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in">
                <input
                    type="time"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="bg-teal-700/50 border border-teal-500 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-white focus:outline-none appearance-none"
                    required
                    autoFocus
                />
                <div className="flex gap-3">
                    <button type="submit" className="bg-white text-teal-700 font-bold py-2 px-6 rounded-lg hover:bg-teal-100 transition-colors shadow-sm">
                        {t('saveReminder')}
                    </button>
                    <button type="button" onClick={() => setIsAdding(false)} className="bg-transparent text-white font-semibold py-2 px-4 rounded-lg hover:bg-white/10 transition-colors">
                        {t('cancel')}
                    </button>
                </div>
            </form>
        )
    }

    return (
      <div className="w-full max-w-md mx-auto">
        {reminders.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {reminders.map(time => (
              <div key={time} className="bg-white/90 text-teal-800 font-semibold px-4 py-2 rounded-full flex items-center gap-2 animate-fade-in shadow-sm" role="status" aria-label={`${t('reminderSet')} ${formatTime(time, language)}`}>
                <span>{formatTime(time, language)}</span>
                <button onClick={() => clearReminder(time)} className="text-teal-600 hover:text-teal-800" aria-label={`${t('removeReminder')} ${formatTime(time, language)}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-teal-100 mb-6">{t('noRemindersSet')}</p>
        )}
        <button onClick={() => setIsAdding(true)} className="px-5 py-2 text-base font-medium rounded-full bg-white text-teal-700 hover:bg-teal-100 transition-colors shadow-sm flex items-center gap-2 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
          {t('addReminder')}
        </button>
      </div>
    );
  }

  if (!('Notification' in window)) {
    return null;
  }

  return (
    <div className="bg-teal-600 text-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t('reminderTitle')}</h2>
        <p className="text-center text-teal-100 mb-8 max-w-2xl mx-auto">
          {t('reminderSubtitle')}
        </p>
        {renderContent()}
      </div>
    </div>
  );
};