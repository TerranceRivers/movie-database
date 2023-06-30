import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "../src/App.css"
import App from "./App";
import Movies from "./Components/movies";
import MovieDetails from "./Components/movieDetails";
import EditForm from "./Components/editForm";
import reportWebVitals from "./reportWebVitals";
import AddMovie from "./Components/addMovie";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
    
      {
        path: "movies/:id",
        element: <MovieDetails />,
      },
      { path: "movies/add", element: <AddMovie /> },
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
