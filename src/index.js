import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';


const REACT_APP_TOKEN  = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWZkZGI3N2YyZTMyNGQ4Y2VjMWYwN2E3NzkwYTFhZiIsIm5iZiI6MTcyMjUxNDIyMy44NjQwMTMsInN1YiI6IjY2OWY5NDE4OTQwYzk2OTc4NDJlNzhhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vMvGckf36ZQULwOr_2fbMA4QMbJVpf_0ktVnSzh7ZHs'

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${REACT_APP_TOKEN}`




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
    
  
);

