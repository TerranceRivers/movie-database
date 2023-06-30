
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import Movies from './Components/movies';
import MovieDetails from './Components/movieDetails';
import EditForm from './Components/editForm';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: 'movies/add',
        element: <EditForm />,
      },
      {
        path: 'movies/:id',
        element: <MovieDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
