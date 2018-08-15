import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';

//function 


class Products extends Component {
    
    showInfoProduct(product){
        if(product.status){

            return  (
                <div>
                    <h3>Id: {product.id}</h3> 
                    <h3>Name: {product.name}</h3>
                    <h3>Price: {product.price} $</h3>
                    <h3>Status: {product.status ? 'Active':'Deactive'} </h3>
                </div>
            )
    
        }
    };
    // onBuy(){
    //     alert(this.props.name + ' price ' + this.props.price);
    // }
    onBuy2 = () => {
        alert(this.props.name + ' price ' + this.props.price);
        console.log('this is onBuy2 function');
    }
    // constructor(props) {
    //     super(props);
    //     this.onBuy = this.onBuy.bind(this); // call function to use
    // }
    saveData = () => {
        console.log(this.refs.data.value);
    }
    
    render(){
        var data = React.createRef();
        var users = [
        {
            id:1,
            name:'The anh tran',
            age:23
        },
        {
            id:2,
            name:'nguyen nhu mai',
            age:23
        },
        {
            id:3,
            name:'The ngoc anh',
            age:11
        }
    ];

    var elemenst = users.map( (users,index) => {
        return <div key={index}>
                    <h2> name : {users.name}</h2>
                    <h2> name : {users.age}</h2>
                </div>
        });
        var a = 5 ;
        var testString = 'The Anh Tran';
        var b = 10;
        var productsMobile = {
             name : 'Iphone 7',
             price : 700,
             id:1,
             status : false
        }


        return (
            <div>
            <input ref={data} /> 
            <button class="btn btn-default" onClick={this.saveData}>Save data</button>
                {/* <h1>Products Component</h1>
                <h2> this is variable a : {a} </h2>
                <h2> this is variable b : {b} </h2>
                <h3> this is variable testString : {testString} </h3>
                <h4> Result a + b = {a + b }</h4> */}

                <div className="showProducts p-1">
                {/* {this.showInfoProduct(productsMobile)}
                 <br />
                 {elemenst} */}
                </div>

                <div class="test-props border-bottom border-dark">
                  <p style={{fontSize: 3 + 'em'}}> Name: {this.props.name}</p>
                  <p> Price: {this.props.price} $</p>
                  <div class="img-mobile-wapper">
                  <img src={this.props.image} alt={this.props.name} /> 
                  </div>
                  <div>
                  <button class="btn btn-success" onClick={this.onBuy2} > Mua Ngay</button>
                  </div>
                  
                </div>
            </div>
        );
    }
}

export default Products;

