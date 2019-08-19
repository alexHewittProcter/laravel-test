import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="mx-auto mt-3 pt-3 row" style={{width:'450px'}}>
                <Link to='/' className='col-md-6'>
                    <div>
                        Products
                    </div>
                </Link>
                <Link to='/basket' className='col-md-6'>
                    <div>
                        Basket (£{Math.round(this.props.basketTotal*100)/100})
                    </div>
                </Link>
            </div>
        );
    }
}