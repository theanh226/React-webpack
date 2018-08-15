import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';

class UseState extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: [
            {
                id:1,
                name:'Iphone 7',
                price:500,
                image :'https://drop.ndtv.com/TECH/product_database/images/982016124826AM_635_iphone_7.jpeg',
                status:true
            },
            {
                id:2,
                name:'Iphone 8',
                price:400,
                image :'https://switch.com.my/wp-content/uploads/2017/11/iphone8plus_family-1.png',
                status:true
            },
            {
                id:3,
                name:'Iphone x',
                price:600,
                image :'https://cnet4.cbsistatic.com/img/KnuL1WDed3sanatLbE4YDddJGVg=/2017/10/31/312b3b6e-59b7-499a-aea4-9bc5f9721a21/iphone-x-54.jpg',
                status:false
            }],
            isActive:true
        }
    }

    changeState = () =>{
        // this.state.isActive = !this.state.isActive ;
        // console.log(this.state.isActive);
        // the below method is not work , you should setState use
        this.setState({
            isActive:!this.state.isActive
        });
    }


    render(){

        let elementsMobile = this.state.products.map((product,index)=>{
            let result = '';

            if(this.state.isActive){
            result =    <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>
                            <span class="badge badge-info">{product.price}</span>
                            </td>
                        </tr>
            }
            return result;
        });
    
        return (
        <div>
           <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {elementsMobile}
                </tbody>
            </table>
            <button class="btn btn-warning text-white" onClick ={this.changeState}> {this.state.isActive === true ? 'True':'False'  }</button>
        </div>
        );
    }
};

export default UseState;