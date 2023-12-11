import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Main from '../layouts/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NewsDetails from '../pages/NewsDetails/NewsDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    loader: () =>
      fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=167cdc352820421b8621ec6d33606a0b'
      ),
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/:id',
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => params.id,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
