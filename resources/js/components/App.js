import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';
import ProductList from './ProductList.js';
import Header from './Header.js';
import Basket from './Basket.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {basket:[],basketTotal:0.00,cookies:new Cookies()}
        this.addProductToCart = this.addProductToCart.bind(this);
        this.removeProductFromCart = this.removeProductFromCart.bind(this);
    }
    componentDidMount() {
        //Set basket
        let basket = this.state.cookies.get('basket');
        if(basket == null) {
            basket = [];
        }
        const total = basket.length > 0 ? basket.map(data => data.price).reduce((total,num) => total + num) : 0.00;
        this.setState((state,props) => ({basket:basket,basketTotal:total}));
    }
    addProductToCart(id,title,price) {
        //Add item to basked
        let newBasket = this.state.basket;
        newBasket.push({id:id,title:title,price:price});
        this.setState((state,props) => ({
            basket:newBasket,
            basketTotal:newBasket.map(data => data.price).reduce((total,num) => total + num)
        }));
        this.state.cookies.set('basket',newBasket,'/');
    }
    removeProductFromCart(id,index) {
        //Find product with id from basket
        let newBasket;
        if(index == 0) {
            newBasket = this.state.basket.slice(1);
        } else {
            newBasket = this.state.basket.slice(0,index).concat(this.state.basket.slice(index + 1));
        }
        //Set state and cookies
        this.state.cookies.set('basket',newBasket,'/');
        this.setState({
            basket:newBasket,
            basketTotal:newBasket.length > 0 ? newBasket.map(data => data.price).reduce((total,num) => total + num) : 0.00
        })
    }   
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header basketTotal={this.state.basketTotal} />
                    <Switch>
                        <Route path='/basket' render={() => <Basket basket={this.state.basket} basketTotal={this.state.basketTotal} removeProductFromCart={this.removeProductFromCart}/>}/>
                        <Route path='/' render={() => <ProductList addProductToCart={this.addProductToCart} />} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
