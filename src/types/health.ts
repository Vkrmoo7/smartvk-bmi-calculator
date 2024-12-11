export interface BMIData {
  height: number;
  weight: number;
  age: number;
  gender: 'male' | 'female' | 'other';
  bmi: number;
  category: string;
}

export interface HealthSuggestion {
  title: string;
  description: string;
  icon: string;
}

export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export type ThemeMode = 'light' | 'dark' | 'blue';