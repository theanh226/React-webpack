import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import Header from './Header';
import Products from './Products';

ReactDOM.render(
    <div class="">
        <h1 class="text-warning">
        this is App components
        </h1>
        <p class="test">Some text</p>
        <div className="bg-success">
            <Header />
        </div>
        <div className="bg-danger">
            <Products />
        </div>
    </div>

    ,
     document.getElementById('root')
);


export default App;

 