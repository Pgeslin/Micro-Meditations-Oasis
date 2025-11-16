
import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

const REMINDER_STORAGE_KEY = 'mindful_reminder_due_time';

export const Reminder: React.FC = () => {
  const { t } = useLanguage();
  const [permission, setPermission] = useState<NotificationPermission | null>(null);
  const [reminderTime, setReminderTime] = useState<number | null>(null);
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
    new Notification(t('notification.title'), {
      body: t('notification.body'),
      icon: '/favicon.ico',
    });
    clearReminder();
  }, [clearReminder, t]);
  
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
    if ('Notification' in window) {
      setPermission(Notification.permission);
      
      const savedTime = localStorage.getItem(REMINDER_STORAGE_KEY);
      if (savedTime) {
        const dueTime = parseInt(savedTime, 10);
        const delay = dueTime - Date.now();
        if (delay > 0) {
           timeoutIdRef.current = window.setTimeout(showNotification, delay);
           setReminderTime(dueTime);
        } else {
            localStorage.removeItem(REMINDER_STORAGE_KEY);
        }
      }
    }
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
        <p className="text-center text-teal-100 max-w-md mx-auto">
          {t('notificationsDenied')}
        </p>
      );
    }

    if (reminderTime) {
      return (
        <div className="text-center">
            <p className="text-white font-medium text-lg mb-4">
                {t('reminderSetFor')} {new Date(reminderTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.
            </p>
            <button
                onClick={clearReminder}
                className="bg-white text-teal-700 font-bold py-2 px-6 rounded-lg hover:bg-teal-100 transition-colors shadow-sm"
            >
                {t('clearReminder')}
            </button>
        </div>
      )
    }

    return (
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <button onClick={() => handleSetReminderClick(15)} className="px-5 py-2 text-base font-medium rounded-full bg-white text-teal-700 hover:bg-teal-100 transition-colors shadow-sm">
                {t('in15min')}
            </button>
            <button onClick={() => handleSetReminderClick(60)} className="px-5 py-2 text-base font-medium rounded-full bg-white text-teal-700 hover:bg-teal-100 transition-colors shadow-sm">
                {t('in1hour')}
            </button>
            <button onClick={() => handleSetReminderClick(240)} className="px-5 py-2 text-base font-medium rounded-full bg-white text-teal-700 hover:bg-teal-100 transition-colors shadow-sm">
                {t('in4hours')}
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
