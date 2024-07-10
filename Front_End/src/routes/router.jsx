import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard/Dashboard';
import Error404 from '../pages/Errors/Error404/Error404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/user/:id',
        element: <Dashboard />,
        children: [
          {
            path: '/user/:id/performance',
          },
        ],
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);
