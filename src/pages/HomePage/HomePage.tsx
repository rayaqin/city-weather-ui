import { Link } from 'react-router-dom';
import './HomePage.scss';

const HomePage: React.FC = () => {

    const capitalIds = [
        1,
        2,
        3,
        4,
        5,
    ];
    return (
        <div>
            Home
            <Link to="/add">+</Link>
            {capitalIds.map((capitalId) => <Link to={`/info/${capitalId}`}>{"City - " + capitalId}</Link>)}
        </div>
    )
}

export default HomePage
