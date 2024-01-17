import React from 'react';
import { appendThemeClass, useTheme } from '../../utils/ThemeContext';
import { Link } from 'react-router-dom';
import { CapitalCity } from '../../utils/types';

interface WatchlistProps {
  selectedCapitals: CapitalCity[];
}

const Watchlist: React.FC<WatchlistProps> = ({ selectedCapitals }) => {
  const { theme } = useTheme();

  return (
    <>
      {!!selectedCapitals.length ? (
        selectedCapitals.map((capital) => (
          <Link data-testid="capital-button" className={appendThemeClass("capital-button", theme)} key={capital.name} to={`/info/${capital.name}`}>
            {capital.name}
          </Link>
        ))
      ) : (
        <div className={appendThemeClass("no-capitals", theme)}>
          <div>No cities added to the watchlist yet.</div>
          <div>Start by adding a capital city to the list by first clicking the + sign.</div>
        </div>
      )}
    </>
  );
};

export default Watchlist;