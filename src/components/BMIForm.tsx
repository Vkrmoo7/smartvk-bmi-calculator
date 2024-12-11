import React from 'react';
import { Scale, User, Calendar, Users } from 'lucide-react';

interface BMIFormProps {
  height: number;
  weight: number;
  age: number;
  gender: string;
  onHeightChange: (value: number) => void;
  onWeightChange: (value: number) => void;
  onAgeChange: (value: number) => void;
  onGenderChange: (value: string) => void;
}

export const BMIForm: React.FC<BMIFormProps> = ({
  height,
  weight,
  age,
  gender,
  onHeightChange,
  onWeightChange,
  onAgeChange,
  onGenderChange,
}) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label htmlFor="height" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Scale className="w-4 h-4" />
            <span>Height (cm)</span>
          </label>
          <input
            type="number"
            id="height"
            value={height || ''}
            onChange={(e) => onHeightChange(Number(e.target.value))}
            className="input-field"
            min="0"
            placeholder="Enter your height"
          />
        </div>
        <div className="relative">
          <label htmlFor="weight" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Scale className="w-4 h-4" />
            <span>Weight (kg)</span>
          </label>
          <input
            type="number"
            id="weight"
            value={weight || ''}
            onChange={(e) => onWeightChange(Number(e.target.value))}
            className="input-field"
            min="0"
            placeholder="Enter your weight"
          />
        </div>
        <div className="relative">
          <label htmlFor="age" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4" />
            <span>Age</span>
          </label>
          <input
            type="number"
            id="age"
            value={age || ''}
            onChange={(e) => onAgeChange(Number(e.target.value))}
            className="input-field"
            min="0"
            placeholder="Enter your age"
          />
        </div>
        <div className="relative">
          <label htmlFor="gender" className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
            <Users className="w-4 h-4" />
            <span>Gender</span>
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => onGenderChange(e.target.value)}
            className="input-field"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};