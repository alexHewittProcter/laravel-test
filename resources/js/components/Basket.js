import React, {Component} from 'react';
import PageHeader from './PageHeader';
import ProductItem from './ProductItem';
import ProductButton from './ProductButton';

export default class Basket extends Component {
    render() {
        //Create a function for building the options for button
        const options = (id,index) => {
            return (
                <ProductButton title='Remove from cart' status='danger' onClick={() => {this.props.removeProductFromCart(id,index)}} />
            );
        }
        return (
            <div>
                <PageHeader title='Basket'/>
                <h3>Total :£{this.props.basketTotal}</h3>
                <ul className='list-group'>
                    {this.props.basket.map((data,index) => {
                        return (<ProductItem key={index} product={data} options={options(data.id,index)}/>);
                    })}
                </ul>
            </div>
        );
    }
}