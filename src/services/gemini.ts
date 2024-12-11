import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const getGeminiSuggestions = async (
  age: number,
  gender: string,
  bmi: number,
  category: string
): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `As a friendly health advisor, provide a personalized health suggestion for a ${age} year old ${gender} 
      with a BMI of ${bmi} (${category}). Format your response with these sections and emojis:

      🎯 **Current Status**:
      A brief assessment of their current health status based on BMI.

      💪 **Exercise Plan**:
      Specific exercise recommendations suitable for their age and BMI category.

      🥗 **Nutrition Guide**:
      Personalized dietary suggestions to help achieve or maintain a healthy weight.

      ⭐ **Key Tips**:
      2-3 actionable lifestyle recommendations.

      Make the response engaging and motivational, using clear formatting and emojis.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting Gemini suggestions:', error);
    return "🤖 **AI Assistant Unavailable**\n\nI apologize, but I'm unable to provide suggestions at the moment. Please try again later.";
  }
};