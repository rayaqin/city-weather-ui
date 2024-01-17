import { render } from '@testing-library/react';
import SearchResults from './SearchResults';
import { ThemeProvider } from '../../utils/ThemeContext';

describe('SearchResults', () => {
  it('renders EmptyState with "no results" message when searchResults is an empty array, and filterText is truthy', () => {
    const { getByText } = render(
      <ThemeProvider>
        <SearchResults
          searchResults={[]}
          capitalSelected={false}
          filterText="xyz"
          highlightIndex={0}
          handleCapitalSelection={() => { }}
        />
      </ThemeProvider>
    );

    const noResultsText = getByText('No results found.');
    const trySearchingText = getByText('Try searching for something else.');

    expect(noResultsText).toBeInTheDocument();
    expect(trySearchingText).toBeInTheDocument();
  });

  it('renders list items when searchResults is not empty', () => {
    const searchResults = [
      { name: 'London' },
      { name: 'Paris' },
      { name: 'Berlin' },
    ];

    const { getAllByRole } = render(
      <ThemeProvider>
        <SearchResults
          searchResults={searchResults}
          capitalSelected={false}
          filterText="lon"
          highlightIndex={0}
          handleCapitalSelection={() => { }}
        />
      </ThemeProvider>
    );

    const searchResultItems = getAllByRole('listitem');

    expect(searchResultItems).toHaveLength(searchResults.length);
  });
});