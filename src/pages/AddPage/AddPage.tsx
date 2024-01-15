import { Link } from 'react-router-dom';
import './AddPage.scss';
import { useAppSelector } from '../../redux/hooks';
import {
    selectSelectedCapitals,
    removeCapital,
} from '../../redux/selectedCapitalsSlice';
import { useDispatch } from 'react-redux';
import { CapitalCity } from '../../utils/types';

const AddPage: React.FC = () => {
    const selectedCapitals = useAppSelector(selectSelectedCapitals);

    const dispatch = useDispatch();

    const handleCapitalClick = (capitalName: CapitalCity['name']) => {
        dispatch(removeCapital(capitalName));
    };
    return (
        <div>
            <Link to="/">{'<'}</Link>
            Add
            {selectedCapitals.map((capital) => (
                <div key={capital.name} onClick={() => handleCapitalClick(capital.name)}>
                    {capital.name}
                </div>
            ))}
        </div>
    );
};

export default AddPage;
