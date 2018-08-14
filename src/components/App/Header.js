import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import Products from './Products';

class Header extends Component {
    render(){

        var Mobiles = [{
            id:1,
            name:'Iphone 7',
            price:500,
            image :'https://drop.ndtv.com/TECH/product_database/images/982016124826AM_635_iphone_7.jpeg',
            status:true
        },
        {
            id:2,
            name:'Iphone 8',
            price:500,
            image :'https://switch.com.my/wp-content/uploads/2017/11/iphone8plus_family-1.png',
            status:true
        },
        {
            id:3,
            name:'Iphone x',
            price:500,
            image :'https://cnet4.cbsistatic.com/img/KnuL1WDed3sanatLbE4YDddJGVg=/2017/10/31/312b3b6e-59b7-499a-aea4-9bc5f9721a21/iphone-x-54.jpg',
            status:true
        }];

        let Element = Mobiles.map((product,index) =>{
            let result = '';
            if(product.status){
                return<Products key={index}
                price={product.price}
                name={product.name}
                image={product.image}
             />
            }
            return result;
        });
        return(
            <div>
                {Element}
            </div>
        );
    }
}

export default Header;

