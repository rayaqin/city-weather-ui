import { useParams } from 'react-router';
import './InfoPage.scss';
import { Link } from 'react-router-dom';

const InfoPage: React.FC = () => {
    const { capitalId } = useParams();
    return (
        <div>
            <Link to="/">{"<"}</Link>
            Info: {capitalId}
        </div>
    )
}

export default InfoPage
