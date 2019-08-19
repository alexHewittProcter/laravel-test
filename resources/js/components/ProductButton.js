import React, {Component} from 'react';

//A styles button for use in the ProductItem
export default class ProductButton extends Component {
    render() {
        return (
            <button type='button' className={'btn btn-block btn-large btn-' + this.props.status} onClick={this.props.onClick}>
                {this.props.title}
            </button>
        )
    }
}