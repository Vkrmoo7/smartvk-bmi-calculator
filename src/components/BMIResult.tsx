import React from 'react';
import { BMIData } from '../types/health';

interface BMIResultProps {
  bmiData: BMIData;
}

export const BMIResult: React.FC<BMIResultProps> = ({ bmiData }) => {
  const getBMIColor = (category: string): string => {
    switch (category) {
      case 'Underweight':
        return 'text-yellow-600';
      case 'Normal weight':
        return 'text-green-600';
      case 'Overweight':
        return 'text-orange-600';
      case 'Obese':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800">Your BMI Result</h2>
      <div className="mt-4">
        <span className="text-4xl font-bold block">{bmiData.bmi}</span>
        <span className={`text-xl font-semibold ${getBMIColor(bmiData.category)}`}>
          {bmiData.category}
        </span>
      </div>
    </div>
  );
};