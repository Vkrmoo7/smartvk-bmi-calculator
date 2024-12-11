import React from 'react';
import { Palette } from 'lucide-react';
import { ThemeMode } from '../types/health';

interface ThemeSelectorProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <Palette className="h-5 w-5" />
      <select
        value={currentTheme}
        onChange={(e) => onThemeChange(e.target.value as ThemeMode)}
        className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};