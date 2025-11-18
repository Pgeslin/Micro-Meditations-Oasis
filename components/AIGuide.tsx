import React from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { useLanguage } from '../context/LanguageContext';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AIGuideProps {
  onClose: () => void;
}

export const AIGuide: React.FC<AIGuideProps> = ({ onClose }) => {
  const { t } = useLanguage();
  const chatInstance = React.useRef<Chat | null>(null);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    chatInstance.current = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: t('aiGuide.systemInstruction'),
      },
    });
    setMessages([{ role: 'model', text: t('aiGuide.intro') }]);
  }, [t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(scrollToBottom, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatInstance.current) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatInstance.current.sendMessage({ message: input });
      const modelMessage: Message = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("AI chat error:", error);
      const errorMessage: Message = { role: 'model', text: 'Sorry, I seem to be having trouble connecting. Please try again in a moment.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-slate-900 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-40 animate-fade-in p-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-stone-50 w-full max-w-2xl h-[90vh] max-h-[700px] rounded-2xl shadow-xl flex flex-col">
        <header className="relative p-4 border-b border-slate-200 flex items-center justify-center">
          <h2 className="text-xl font-bold text-slate-900">{t('aiGuide.title')}</h2>
          <button
            onClick={onClose}
            className="absolute top-1/2 -translate-y-1/2 right-4 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <main className="flex-grow p-4 sm:p-6 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                    AI
                  </div>
                )}
                <div className={`max-w-md p-3 rounded-2xl ${msg.role === 'user' ? 'bg-teal-600 text-white rounded-br-none' : 'bg-slate-200 text-slate-800 rounded-bl-none'}`}>
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-teal-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                    AI
                  </div>
                  <div className="max-w-md p-3 rounded-2xl bg-slate-200 text-slate-800 rounded-bl-none">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
              </div>
            )}
             <div ref={messagesEndRef} />
          </div>
        </main>

        <footer className="p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl">
          <form onSubmit={handleSend} className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('aiGuide.placeholder')}
              className="flex-grow p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-shadow duration-200"
              disabled={isLoading}
              aria-label="Your message to the AI guide"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-teal-600 text-white font-semibold py-3 px-5 rounded-lg hover:bg-teal-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
              aria-label={t('aiGuide.sendButton')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};
