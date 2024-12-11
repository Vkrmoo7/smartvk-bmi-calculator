import React from 'react';
import { HealthSuggestion } from '../types/health';
import * as Icons from 'lucide-react';

interface HealthSuggestionsProps {
  suggestions: HealthSuggestion[];
}

export const HealthSuggestions: React.FC<HealthSuggestionsProps> = ({ suggestions }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Health Suggestions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestions.map((suggestion, index) => {
          const IconComponent = Icons[suggestion.icon as keyof typeof Icons];
          return (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{suggestion.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{suggestion.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};