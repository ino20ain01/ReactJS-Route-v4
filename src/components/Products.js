import React, {Component} from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {

        let products = [
            {
                id: 1,
                name: 'IPhone X',
                price: 800,
                slug: 'iphonex'
            },
            {
                id: 2,
                name: 'IPhone 8',
                price: 700,
                slug: 'iphone8'
            },
            {
                id: 3,
                name: 'IPhone7 PlusX',
                price: 600,
                slug: 'iphone7'
            },
        ];

        let { match } = this.props;
        let url = match.url;

        let result = products.map((product, index) => {
            return (
                <NavLink to={ `${url}/${product.slug}` } key={ index }>
                    <li className="list-group-item">
                        { product.id } - { product.name } - { product.price }
                    </li>
                </NavLink>
            );
        });

        let { location } = this.props;
        console.log(location);

        return (
            <div className="container">
                <h1>Danh sách sản phẩm</h1>
                <div className="row">
                    <ul className="list-group">
                        { result }
                    </ul>
                </div>
                <div className="row">
                    <Route path="/products/:name" component={ Product } />
                </div>
            </div>
        );
    }
}

export default Products;
