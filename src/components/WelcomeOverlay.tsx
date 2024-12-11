import React, { useEffect, useState } from 'react';
import { Heart, Brain, Activity } from 'lucide-react';

export const WelcomeOverlay: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const steps = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => {
        setStep(3);
        setTimeout(() => setVisible(false), 1000);
      }, 3000),
    ];

    return () => steps.forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  const messages = [
    { icon: Heart, text: 'Welcome to SmartBMI' },
    { icon: Brain, text: 'VD AI Health Assistant' },
    { icon: Activity, text: "Let's Get Started!" },
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 to-blue-600 z-50 flex items-center justify-center">
      <div className="text-center text-white space-y-6">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`transition-all duration-500 transform ${
              idx === step ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <msg.icon className="w-16 h-16 mx-auto mb-4 animate-pulse gradient-glow" />
            <h1 className="text-4xl font-bold animate-text-glow">{msg.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
