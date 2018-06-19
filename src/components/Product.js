import React, {Component} from 'react';

class Product extends Component {
    render() {

        let { match } = this.props;
        let { name }  = match.params;

        return (
            <div>
                Đây là { name }
            </div>
        );
    }
}

export default Product;
