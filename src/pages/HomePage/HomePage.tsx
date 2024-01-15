import { Link } from 'react-router-dom';
import './HomePage.scss';

const HomePage: React.FC = () => {
  const capitalNames = ["London", "Budapest"];
  return (
    <div>
      Home
      <Link to="/add">+</Link>
      {capitalNames.map((capitalName) => (
        <Link key={capitalName} to={`/info/${capitalName}`}>
          {capitalName}
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
