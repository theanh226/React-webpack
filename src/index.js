import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Header from './components/App/Header';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
     document.getElementById('root')
);

