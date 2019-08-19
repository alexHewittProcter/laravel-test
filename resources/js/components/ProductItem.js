import React, {Component} from 'react';

//Shows the product details in a list
export default class ProductItem extends Component {
    render() {
        return (
            <li className='list-group-item'>
                <div className='row'>
                    <div className='col-md-4'>{this.props.product.title}</div>
                    <div className='col-md-4'>£{this.props.product.price}</div>
                    <div className='col-md-4'>{this.props.options}</div>
                </div>
            </li>
        )
    }
}