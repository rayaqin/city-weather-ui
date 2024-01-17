import React from 'react';
import { render } from '@testing-library/react';
import Watchlist from './Watchlist';
import { ThemeProvider } from '../../utils/ThemeContext';
import { MemoryRouter } from 'react-router-dom';

describe('Watchlist', () => {
  it('should render "No cities added to the watchlist yet." message when selectedCapitals is an empty array', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ThemeProvider>
          <Watchlist selectedCapitals={[]} />
        </ThemeProvider>
      </MemoryRouter>
    );
    const messageElement = getByText('No cities added to the watchlist yet.');
    expect(messageElement).toBeInTheDocument();
  });

  it('should render capital-button elements with the right text for each capital in selectedCapitals', () => {
    const selectedCapitals = [
      { name: 'London' },
      { name: 'Paris' },
      { name: 'Berlin' },
    ];

    const { getAllByTestId, getByText } = render(
      <MemoryRouter>
        <ThemeProvider>
          <Watchlist selectedCapitals={selectedCapitals} />
        </ThemeProvider>
      </MemoryRouter>
    );
    const capitalButtonElements = getAllByTestId('capital-button');
    expect(capitalButtonElements.length).toBe(selectedCapitals.length);

    selectedCapitals.forEach((capital) => {
      const capitalTextElement = getByText(capital.name);
      expect(capitalTextElement).toBeInTheDocument();
    });
  });
});