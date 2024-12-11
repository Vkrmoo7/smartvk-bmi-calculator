import React, { useState, useEffect } from 'react';
import { BMIForm } from './components/BMIForm';
import { BMIResult } from './components/BMIResult';
import { HealthSuggestions } from './components/HealthSuggestions';
import { ThemeSelector } from './components/ThemeSelector';
import { AISuggestion } from './components/AISuggestion';
import { WelcomeOverlay } from './components/WelcomeOverlay';
import { calculateBMI, getBMICategory } from './utils/bmiCalculator';
import { getHealthSuggestions } from './utils/healthSuggestions';
import { getGeminiSuggestions } from './services/gemini';
import { themes } from './utils/themes';
import { BMIData, ThemeMode } from './types/health';
import { Scale, Activity } from 'lucide-react';

function App() {
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<'male' | 'female' | 'other'>();
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [aiSuggestion, setAiSuggestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const [bmiData, setBmiData] = useState<BMIData>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const fetchAISuggestion = async () => {
    setIsLoading(true);
    const suggestion = await getGeminiSuggestions(
      bmiData.age,
      bmiData.gender,
      bmiData.bmi,
      bmiData.category
    );
    setAiSuggestion(suggestion);
    setIsLoading(false);
  };

  useEffect(() => {
    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);
    const newBmiData = { height, weight, age, gender, bmi, category };
    setBmiData(newBmiData);
    fetchAISuggestion();
  }, [height, weight, age, gender]);

  const currentTheme = themes[theme];

  return (
    <>
      {showWelcome && <WelcomeOverlay />}
      <div className={`min-h-screen ${currentTheme.background} py-12 px-4 sm:px-6 lg:px-8 ${currentTheme.text} transition-colors duration-200`}>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-4">
            <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
          </div>

          <div className="text-center mb-8 animate-fadeIn">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className={`p-3 ${currentTheme.primary} rounded-full transform transition-transform hover:scale-110`}>
                <Scale className="h-8 w-8 text-white" />
              </div>
              <Activity className={`h-6 w-6 ${currentTheme.primary.replace('bg-', 'text-')}`} />
            </div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Smart BMI Calculator
            </h1>
            <p className="mt-2 opacity-75">
              Calculate your BMI and get personalized AI health suggestions
            </p>
          </div>

          <div className={`${currentTheme.secondary} rounded-lg shadow-lg p-6 mb-8 transform transition-all hover:scale-[1.02]`}>
            <BMIForm
              height={height}
              weight={weight}
              age={age}
              gender={gender}
              onHeightChange={setHeight}
              onWeightChange={setWeight}
              onAgeChange={setAge}
              onGenderChange={setGender}
            />
          </div>

          {bmiData && (
            <div className="space-y-6 animate-fadeIn">
              <BMIResult bmiData={bmiData} />
              <AISuggestion 
                suggestion={aiSuggestion} 
                isLoading={isLoading}
                onRetry={fetchAISuggestion}
              />
              <HealthSuggestions 
                suggestions={getHealthSuggestions(bmiData.bmi, bmiData.category)} 
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;