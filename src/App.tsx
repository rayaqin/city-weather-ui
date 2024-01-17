import { Outlet } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './utils/normalize.css';
import './App.scss';
import { ThemeProvider, appendThemeClass, useTheme } from './utils/ThemeContext';;
import LightToggle from './components/LightToggle/LightToggle';

const App: React.FC = () => {

  const { theme, toggleTheme } = useTheme();

  return <Provider store={store}>
    <div className={appendThemeClass('page-outer-shell', theme)}>
      <LightToggle toggleFn={toggleTheme} />
      <Outlet />
    </div>
  </Provider>;
};

export default App;
