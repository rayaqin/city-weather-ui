import React from 'react';
import { appendThemeClass, useTheme } from '../../utils/ThemeContext';
import Loader from '../../components/Loader/Loader';
import CapitalSearchForm from '../../components/CapitalSearchForm/CapitalSearchForm';
import { CapitalCity } from '../../utils/types';

interface CapitalOptionsProps {
  loading: boolean;
  remainingCapitals: CapitalCity[];
  handleSave: (capital: CapitalCity) => void;
}

const CapitalOptions: React.FC<CapitalOptionsProps> = ({
  loading,
  remainingCapitals,
  handleSave,
}) => {
  const { theme } = useTheme();

  return (
    <>
      {loading && <Loader />}
      {!loading && remainingCapitals.length === 0 && (
        <div id="all-added" className={appendThemeClass("all-added", theme)}>
          All capitals have already been added to the watchlist.
        </div>
      )}
      {!loading && !!remainingCapitals.length && (
        <CapitalSearchForm
          capitals={remainingCapitals}
          handleSave={handleSave}
        />
      )}
    </>
  );
};

export default CapitalOptions;