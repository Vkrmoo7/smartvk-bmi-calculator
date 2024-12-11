import { Theme } from '../types/health';

export const themes: Record<string, Theme> = {
  light: {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600',
    secondary: 'bg-white',
    background: 'bg-gray-50',
    text: 'text-gray-900'
  },
  dark: {
    primary: 'bg-gradient-to-r from-purple-500 to-blue-500',
    secondary: 'bg-gray-800',
    background: 'bg-gray-900',
    text: 'text-white'
  },
  blue: {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    secondary: 'bg-blue-50',
    background: 'bg-blue-100',
    text: 'text-gray-900'
  }
};