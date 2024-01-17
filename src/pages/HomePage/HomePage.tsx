import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectSelectedCapitals } from '../../redux/selectedCapitalsSlice';
import './HomePage.scss';
import { appendThemeClass, useTheme } from '../../utils/ThemeContext';
import { FiPlus as PlusIcon } from "react-icons/fi";
import cn from 'classnames';
import Watchlist from '../../components/Watchlist/Watchlist';

const HomePage: React.FC = () => {
  const selectedCapitals = useAppSelector(selectSelectedCapitals);
  const { theme } = useTheme();

  return (
    <div className="home-page-outer-shell">
      <div className="inner-shell">
        <div className="capital-list">
          <Watchlist selectedCapitals={selectedCapitals} />
        </div>
        <Link className={cn(appendThemeClass("add-sign-box", theme), { 'wiggle-animation': !selectedCapitals.length })} to="/add">
          <PlusIcon />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
