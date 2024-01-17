import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage/HomePage';
import AddPage from '../pages/AddPage/AddPage';
import InfoPage from '../pages/InfoPage/InfoPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App />
    ),
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/add', element: <AddPage /> },
      { path: '/info/:capitalName', element: <InfoPage /> },
    ],
  },
]);
