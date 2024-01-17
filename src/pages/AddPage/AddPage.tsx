import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import {
    selectSelectedCapitals,
    addCapital,
} from '../../redux/selectedCapitalsSlice';
import { useDispatch } from 'react-redux';
import { CapitalCity } from '../../utils/types';
import useGetCapitals from '../../customHooks/useGetCapitals';
import { defaultCapitals } from '../../utils/defaultCapitals';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { FiArrowLeft as BackIcon } from "react-icons/fi";
import 'react-toastify/dist/ReactToastify.min.css';
import './AddPage.scss';
import { appendThemeClass, useTheme } from '../../utils/ThemeContext';
import { toastSettings } from '../../utils/toastSettings';
import CapitalOptions from '../../components/CapitalOptions/CapitalOptions';

const AddPage: React.FC = () => {
    const { error, capitals, loading } = useGetCapitals();
    const selectedCapitals = useAppSelector(selectSelectedCapitals);

    const { theme } = useTheme();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSave = (capital: CapitalCity) => {
        dispatch(addCapital(capital));
        navigate('/');
    };

    const availableCapitals = (!loading && !error) ? capitals : defaultCapitals.map(c => ({ name: c } as CapitalCity));

    const remainingCapitals = availableCapitals.filter(
        (capital) =>
            !selectedCapitals.find(
                (selectedCapital) => selectedCapital.name === capital.name
            )
    );

    useEffect(() => {
        if (!loading && error) {
            toast.error("For some reason we could not get the capital names from the server, so we're gonna be using the defaults instead.", { ...toastSettings, toastId: `${error.message}` });
        }
    }, [loading, error]);

    return (
        <>
            <ToastContainer />
            <div className="add-page-outer-shell">
                <Link to="/" className={appendThemeClass("back-box", theme)}>
                    <BackIcon />
                </Link>
                <CapitalOptions loading={loading} remainingCapitals={remainingCapitals} handleSave={handleSave} />
            </div>
        </>
    );
};

export default AddPage;
