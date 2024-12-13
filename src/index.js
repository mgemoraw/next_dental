import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import {createTheme, MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import {BrowserRouter} from "react-router-dom";
import '@mantine/core/styles.css';



const theme = createTheme({
    //
});

axios.interceptors.request.use((request) => {
  if (localStorage.getItem("dentalPass")) {
    const accessToken = JSON.parse(
      localStorage.getItem("dentalPass")
    ).accessToken;
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  return request;
});
axios.interceptors.response.use((response) => {
  return response;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <React.StrictMode>
        <Notifications />
        <App />
      </React.StrictMode>
    </MantineProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
