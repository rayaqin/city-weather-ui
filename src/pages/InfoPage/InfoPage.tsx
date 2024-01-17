import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useGetWeatherByCapital from '../../customHooks/useGetWeatherByCapital';
import WeatherIcon from '../../components/WeatherIcon/WeatherIcon';
import { FiSunrise, FiSunset } from "react-icons/fi";
import { FaTemperatureHalf } from "react-icons/fa6";
import './InfoPage.scss';
import { appendThemeClass, useTheme } from '../../utils/ThemeContext';
import { FiArrowLeft as BackIcon } from "react-icons/fi";
import Loader from '../../components/Loader/Loader';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { toastSettings } from '../../utils/toastSettings';

function formatTime(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  return hours + ':' + minutes.slice(-2);
}

function getTempDisplay(temp: number) {
  return Math.round(temp) + '°C';
}

const InfoPage: React.FC = () => {
  const { capitalName } = useParams();

  if (!capitalName) return <div>no capital selected</div>;
  const { error, weatherData, loading } = useGetWeatherByCapital(capitalName);

  useEffect(() => {
    if (!loading && error) {
      toast.error(error.message, { ...toastSettings, toastId: `${error.message}` });
    }
  }, [loading, error]);

  const { theme } = useTheme();

  return (
    <>
      <ToastContainer />
      <div className='info-page-outer-shell'>
        <Link to="/" className={appendThemeClass("back-box", theme)}>
          <BackIcon />
        </Link>

        {loading && <div className="info-loader-box" id="retrieve-loader"><Loader /></div>}

        {error && <div id="retrieve-error">An error occured while trying to retrieve weather data.</div>}

        {!loading && !error && weatherData?.weather && weatherData?.weather[0] && (
          <>
            <div className="time-data">
              {formatTime(weatherData.dt).split(':').map(t => <span key={t}>{t}</span>)}
            </div>

            <div className="capital-name">
              {capitalName}
            </div>

            <WeatherIcon iconCode={weatherData?.weather[0].icon} className="main-weather-icon" />

            <div className="description">
              {weatherData.weather[0].description}
            </div>

            <div className="weather-data-grid">
              <FaTemperatureHalf />
              {getTempDisplay(weatherData.main.temp)}
              <FiSunrise />
              {formatTime(weatherData.sys.sunrise)}
              <FiSunset />
              {formatTime(weatherData.sys.sunset)}

            </div>
          </>
        )}
      </div>
    </>
  );
};

export default InfoPage;
