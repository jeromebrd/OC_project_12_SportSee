import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/Dashboard/Dashboard';

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
    ],
  },
]);
