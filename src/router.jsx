import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"))
const Destination = lazy(() => import("./pages/Destination/Destination.jsx"))
const Crew = lazy(() => import("./pages/Crew/Crew.jsx"))
const Technology = lazy(() => import("./pages/Technology/Technology.jsx"))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'destination',
                element: <Destination/>
            },
            {
                path: 'crew',
                element: <Crew/>
            },
            {
                path: 'technology',
                element: <Technology/>
            },
        ],
    },
]);