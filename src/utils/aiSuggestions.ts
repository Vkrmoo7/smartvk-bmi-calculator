import OpenAI from 'openai';
import type { BMIData } from '../types/health';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const getAISuggestions = async (bmiData: BMIData): Promise<string> => {
  if (!import.meta.env.VITE_OPENAI_API_KEY) {
    return "Please add your OpenAI API key to the .env file to receive AI-powered suggestions.";
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a health advisor providing personalized suggestions based on BMI data."
        },
        {
          role: "user",
          content: `Provide a short, personalized health suggestion for a ${bmiData.age} year old ${bmiData.gender} 
            with a BMI of ${bmiData.bmi} (${bmiData.category}). Focus on actionable advice.`
        }
      ],
      max_tokens: 150
    });

    return response.choices[0].message.content || "Unable to generate suggestion at this time.";
  } catch (error) {
    console.error('Error getting AI suggestions:', error);
    return "AI suggestions temporarily unavailable. Please try again later.";
  }
};