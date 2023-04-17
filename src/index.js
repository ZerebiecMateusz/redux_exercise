import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { configureStore} from '@reduxjs/toolkit';
import reducers from './reducers'

// middlewares redux (logger)
//funkcja zwróci funkcje (i to zapewnia nam redux)
const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action)
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();

  return result;
};

// const store = configureStore({rootReducer})
// const store = configureStore(
//   {reducer:reducers},
//   applyMiddleware(logger)
//   );

// this worked with configureStore (old version is CreateStore )
const store = configureStore({
  reducer:reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
