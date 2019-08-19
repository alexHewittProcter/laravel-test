import React, {Component} from 'React';
import fetch from 'node-fetch';
import ProductItem from './ProductItem';
import PageHeader from './PageHeader';
import ProductButton from './ProductButton';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : []
        };
    }
    componentDidMount() {
        //Get information after component mounts
        fetch('/api/products')
            .then(data => data.json())
            .catch(error => "There was an error with the api")
            .then(data => this.setState({products:data}));
    }
    render() {
        const products = this.state.products;
        return (
            <div>
                <PageHeader title="Products"/>
                <ul className='list-group'>
                    {products.map((data,index) => <ProductItem key={index} product={data} options={<ProductButton title='Add to cart' status='success' onClick={() => this.props.addProductToCart(data.id,data.title,data.price)}/>} />)}
                </ul>
            </div>
        );
    }
}