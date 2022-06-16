import React from 'react';
import ProductCost from '../ProductCost'
import ProductList from '../ProductList';


const OrderDetails = () => {
    return (
        <>
            <section className='review-order-details'>
                <h2>Review Your Order</h2>
                <ProductList />
            </section>
            <ProductCost />
        </>
)
}
export default OrderDetails;