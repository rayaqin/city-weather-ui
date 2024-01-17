import { render } from '@testing-library/react';
import CapitalOptions from './CapitalOptions';
import { ThemeProvider } from '../../utils/ThemeContext';

describe('CapitalOptions', () => {
  it('should render Loader when loading is true', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <CapitalOptions loading={true} remainingCapitals={[]} handleSave={() => { }} />
      </ThemeProvider>
    );
    const loaderElement = getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('should render "All capitals have already been added" message when loading is false and remainingCapitals.length is 0', () => {
    const { getByText } = render(
      <ThemeProvider>
        <CapitalOptions loading={false} remainingCapitals={[]} handleSave={() => { }} />
      </ThemeProvider>
    );
    const messageElement = getByText('All capitals have already been added to the watchlist.');
    expect(messageElement).toBeInTheDocument();
  });
});