import { useParams } from 'react-router';
import './InfoPage.scss';
import { Link } from 'react-router-dom';
import useGetWeatherByCapital from '../../customHooks/useGetWeatherByCapital';

const InfoPage: React.FC = () => {
  const { capitalName } = useParams();
  console.log(capitalName);

  if (!capitalName) return <div>no capital selected</div>;
  const { error, weatherData, loading } = useGetWeatherByCapital(capitalName);
  return (
    <div>
      <Link to="/">{'<'}</Link>
      Info: {JSON.stringify(weatherData)}
    </div>
  );
};

export default InfoPage;
