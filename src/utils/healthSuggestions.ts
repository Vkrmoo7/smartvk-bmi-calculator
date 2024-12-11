import { HealthSuggestion } from '../types/health';

export const getHealthSuggestions = (bmi: number, category: string): HealthSuggestion[] => {
  const suggestions: HealthSuggestion[] = [
    {
      title: 'Balanced Diet',
      description: category === 'Underweight' 
        ? 'Increase your caloric intake with nutrient-dense foods like nuts, avocados, and lean proteins.'
        : category === 'Overweight' || category === 'Obese'
        ? 'Focus on portion control and incorporate more vegetables and lean proteins in your diet.'
        : 'Maintain your balanced diet with a mix of proteins, carbs, and healthy fats.',
      icon: 'Utensils'
    },
    {
      title: 'Exercise Routine',
      description: category === 'Underweight'
        ? 'Include strength training to build muscle mass.'
        : category === 'Overweight' || category === 'Obese'
        ? 'Aim for 150 minutes of moderate cardio exercise per week.'
        : 'Continue with regular physical activity to maintain your healthy weight.',
      icon: 'Dumbbell'
    },
    {
      title: 'Hydration',
      description: 'Drink 8-10 glasses of water daily to maintain proper bodily functions and support your metabolism.',
      icon: 'Droplets'
    },
    {
      title: 'Sleep Schedule',
      description: 'Aim for 7-9 hours of quality sleep per night to support your body\'s recovery and metabolism.',
      icon: 'Moon'
    }
  ];

  return suggestions;
};