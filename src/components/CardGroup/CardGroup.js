import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'ella', price: 10000 },
        { id: 2, name: 'Pell', price: 30000 },
        { id: 3, name: 'Bella', price: 20000 }
    ]
    return (
        <div>
            <h2>This is my cards</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                    products.map(product => <Card id={product.id} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;