import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import AddPage from "../pages/AddPage/AddPage";
import InfoPage from "../pages/InfoPage/InfoPage";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Provider store={store}><App /></Provider>,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/add", element: <AddPage /> },
            { path: "/info/:capitalId", element: <InfoPage /> },
        ]
    }
]);