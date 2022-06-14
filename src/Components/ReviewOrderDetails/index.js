import React from 'react'
import QtyCounter from '../QtyCounter';
import CTAbutton from '../CTAButton';

const OrderDetails = () => {
    return (
        <>
        <section className='review-order-details'>
            <h2>Review Your Order</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                    </tr>
                </thead>
            <tbody>
            <tr>
                <td>Apple</td>
                <td>£0.67</td>
                <td>
                <QtyCounter />
                </td>
                <td>500</td>
                <td><CTAbutton backgroundColor='red' text='Delete' /></td>
            </tr>
            <tr>
                <td>Apple</td>
                <td>£0.67</td>
                <td>
                <QtyCounter />
                </td>
                <td>500</td>
                <td><CTAbutton backgroundColor='red' text='Delete' /></td>
            </tr>
        </tbody>
        </table>
    </section>
    <div className='order-subtotal-total'>
        <div className='subtotal-cost'>
            <p className='display-flex'><span>Subtotal</span><span> £400</span></p>
            <p className='display-flex'><span>VAT &#x00040; 20&#x00025;</span><span> £500</span></p>
        </div>
        <div className='total-cost'>
            <p className='display-flex'><span>Total </span> <span> £400</span></p>
        </div>
        <div className='buynowBtn'>
            <CTAbutton backgroundColor='#11b0dc' text='BuyNow' />
        </div>
    </div>
</>
)
}

export default OrderDetails;