import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';

class Products extends Component {
    render(){
        var a = 5 ;
        var testString = 'The Anh Tran';
        var b = 10;
        var productsMobile = {
             name : 'Iphone 7',
             price : 700,
             id:1
        }
        return(
            <div>
                <h1>Products Component</h1>
                <h2> this is variable a : {a} </h2>
                <h2> this is variable b : {b} </h2>
                <h3> this is variable testString : {testString} </h3>
                <h4> Result a + b = {a + b }</h4>

                <div className="showProducts">
                      <h3>Id: {productsMobile.id}</h3> 
                      <h3>Name: {productsMobile.name}</h3>
                      <h3>Price: {productsMobile.price} $</h3>
                </div>
            </div>
        );
    }
}

export default Products;

