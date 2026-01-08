import React from 'react';
import './Product.css';

function Product(props) {
    return (
        <div className="product-card">
            <h3 className="product-title">{props.title}</h3>
            <p className="product-price">${props.price}</p>

            {props.availability ? (
                <p className="in-stock">✓ In Stock</p>
            ) : (
                <p className="out-of-stock">✗ Out of Stock</p>
            )}

            <button
                className="buy-button"
                disabled={!props.availability}
            >
                {props.availability ? 'Add to Cart' : 'Unavailable'}
            </button>
        </div>
    );
}

export default Product;
