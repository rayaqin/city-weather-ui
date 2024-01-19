import React from 'react';
import { appendThemeClass, useTheme } from '../../utils/ThemeContext';
import { CapitalCity } from '../../utils/types';
import classNames from 'classnames';
import { FaTreeCity } from 'react-icons/fa6';

type SearchResultsProps = {
  searchResults: CapitalCity[];
  capitalSelected: boolean;
  filterText: string;
  highlightIndex: number;
  handleCapitalSelection: (capital: CapitalCity) => void;
};

const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
  capitalSelected,
  filterText,
  highlightIndex,
  handleCapitalSelection,
}) => {
  const { theme } = useTheme();

  const textWithHighlight = (text: string, partToHighlight: string) => {
    const lText = text.toLowerCase();
    const lPartToHighlight = partToHighlight.toLowerCase();

    if (!lText.includes(lPartToHighlight)) return text;

    const index = lText.indexOf(lPartToHighlight);
    const firstPart = text.slice(0, index);
    const partToHighlightWithRightCase = text.slice(index, index + partToHighlight.length);
    const secondPart = text.slice(index + partToHighlight.length);
    return (
      <>
        {firstPart}
        <span className={appendThemeClass('hit-text', theme)}>{partToHighlightWithRightCase}</span>
        {secondPart}
      </>
    );
  };

  const EmptyState = () => (
    <div className={appendThemeClass("no-results", theme)}>
      {filterText ?
        (<div>
          <div>No results found.</div>
          <div>Try searching for something else.</div>
        </div>) :
        <FaTreeCity />}
    </div>
  );

  return (
    <>
      {!!searchResults.length ? (
        <ul>
          {searchResults.map((capital, index) => (
            <li
              className={appendThemeClass(classNames({ 'highlighted': index === highlightIndex }), theme)}
              key={capital.name}
              onClick={() => handleCapitalSelection(capital)}
            >
              {textWithHighlight(capital.name, filterText)}
            </li>
          ))}
        </ul>
      ) : !capitalSelected && EmptyState()}
    </>
  );
};


export default SearchResults;