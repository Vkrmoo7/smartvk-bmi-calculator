import React from 'react';
import { Brain, RefreshCw } from 'lucide-react';
import DOMPurify from 'dompurify';
// Import `marked` properly
import { marked } from 'marked';

interface AISuggestionProps {
  suggestion: string;
  isLoading: boolean;
  onRetry?: () => void;
}

export const AISuggestion: React.FC<AISuggestionProps> = ({ suggestion, isLoading, onRetry }) => {
  const formatSuggestion = (text: string) => {
    // Use `marked` to parse the text
    const cleanHtml = DOMPurify.sanitize(marked.parse(text));
    return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg relative overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, purple 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-full animate-pulse">
              <Brain className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              AI Health Assistant..
            </h2>
          </div>
          {!isLoading && onRetry && (
            <button
              onClick={onRetry}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Regenerate</span>
            </button>
          )}
        </div>

        {isLoading ? (
          <div className="space-y-4">
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-purple-100 rounded w-3/4"></div>
              <div className="h-4 bg-purple-100 rounded"></div>
              <div className="h-4 bg-purple-100 rounded w-5/6"></div>
            </div>
            <div className="flex justify-center mt-6">
              <div className="animate-spin h-8 w-8 border-3 border-purple-500 border-t-transparent rounded-full"></div>
            </div>
          </div>
        ) : (
          <div className="relative animate-fadeIn prose prose-purple max-w-none">
            {formatSuggestion(suggestion)}
          </div>
        )}
      </div>
    </div>
  );
};
