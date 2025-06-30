// src/components/ui/InteractiveSearch.tsx
import React, { useState, useEffect } from 'react';
import './InteractiveSearch.css';

interface InteractiveSearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  buttonText?: string;
}

const InteractiveSearch: React.FC<InteractiveSearchProps> = ({ 
  onSearch, 
  placeholder = "Search for handmade treasures...",
  buttonText = "Explore"
}) => {
  const [query, setQuery] = useState('');
  const [suggestions] = useState([
    'Ndebele beadwork',
    'Zulu pottery',
    'Cape Malay textiles',
    'Ubuntu art',
    'Protea jewelry',
    'Rooibos ceramics'
  ]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.length > 0);
    setActiveSuggestion(-1);
  };

  const handleSearch = () => {
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(suggestion);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (activeSuggestion >= 0) {
        handleSuggestionClick(filteredSuggestions[activeSuggestion]);
      } else {
        handleSearch();
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion(prev => 
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setActiveSuggestion(-1);
    }
  };

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = () => {
      setShowSuggestions(false);
      setActiveSuggestion(-1);
    };

    if (showSuggestions) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showSuggestions]);

  return (
    <div className="interactive-search">
      <div className="search-input-container">
        <input 
          type="text" 
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="search-input"
          autoComplete="off"
        />
        <button 
          onClick={handleSearch}
          className="search-button"
          disabled={!query.trim()}
        >
          {buttonText}
        </button>
      </div>
      
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="search-suggestions">
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={suggestion}
              className={`suggestion-item ${index === activeSuggestion ? 'active' : ''}`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <span className="suggestion-icon">🔍</span>
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractiveSearch;