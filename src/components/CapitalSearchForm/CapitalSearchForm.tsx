import React, { useEffect, useState, useRef } from 'react';
import { CapitalCity } from '../../utils/types';
import { getTopEightFilterResults } from '../../utils/getTopEightFilterResults';
import './CapitalSearchForm.scss';
import classNames from 'classnames';
import { appendThemeClass, useTheme } from '../../utils/ThemeContext';
import SearchResults from '../SearchResults/SearchResults';

interface CapitalSearchFormProps {
  capitals: CapitalCity[];
  handleSave: (capital: CapitalCity) => void;
}

const CapitalSearchForm: React.FC<CapitalSearchFormProps> = ({
  capitals,
  handleSave,
}) => {
  const [searchResults, setSearchResults] = useState<CapitalCity[]>([]);
  const [selectedCapital, setSelectedCapital] = useState<CapitalCity | null>(
    null
  );
  const [filterText, setFilterText] = useState('');
  const [highlightIndex, setHighlightIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const { theme } = useTheme();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    selectedCapital && handleSave(selectedCapital);
  };

  const handleFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
    setSelectedCapital(null);
  };

  const clearResults = () => {
    setSearchResults([]);
    setHighlightIndex(0);
  };

  const handleCapitalSelection = (capital: CapitalCity) => {
    setSelectedCapital(capital);
    setFilterText(capital.name);
    clearResults();
  };

  useEffect(() => {
    if (!filterText) {
      clearResults();
      return;
    }

    if (filterText && !selectedCapital) {
      setSearchResults(getTopEightFilterResults(filterText, capitals));
      setHighlightIndex(0);
    }
  }, [filterText, selectedCapital]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (selectedCapital) {
        handleSave(selectedCapital);
        return;
      }
      handleCapitalSelection(searchResults[highlightIndex]);
      return;
    }

    if (event.key === 'ArrowDown') {
      setHighlightIndex(prev => prev === searchResults.length ? prev : prev + 1);
      return;
    }

    if (event.key === 'ArrowUp') {
      setHighlightIndex(prev => prev === 0 ? 0 : prev - 1);
      return;
    }

    if (event.key === 'Escape') {
      setFilterText('');
      return;
    }
  };

  return (
    <div className="capital-search-form">
      <input
        type="text"
        placeholder="Search for capital..."
        className={appendThemeClass("text-input", theme)}
        value={filterText}
        onChange={handleFilterTextChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <form onSubmit={handleFormSubmit}>
        <SearchResults
          searchResults={searchResults}
          capitalSelected={!!selectedCapital}
          filterText={filterText}
          highlightIndex={highlightIndex}
          handleCapitalSelection={handleCapitalSelection}
        />
        <button className={appendThemeClass(classNames({ displayed: selectedCapital }), theme)} type="submit">Save</button>
      </form>
    </div>
  );
};

export default CapitalSearchForm;
