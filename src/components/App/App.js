import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import Header from './Header';
import Products from './Products';
import UseState from './UseState';

// class App extends Component {
//     render(){
//         return(
//             <div>
//                 <h1>Header Component</h1>
//             </div>
//         );
//     }
// }

ReactDOM.render(
    <div class="container">
        {/* <h1 class="text-warning">
        this is App components
        </h1>
        <p class="test">Some text</p>
        <div className="">
            <Header />
        </div>
        <div className="">
            <Products />
        </div>

        <hr /> */}
        <div class="state border-top border-danger mt-4">
            <UseState />
        </div>
    </div>
    ,
     document.getElementById('root')
);


export default App;

 