import React , {useContext}from 'react';
import { AppContext } from '../Context';

const ProductCost = () => {
    const{productOrder} = useContext(AppContext);
    // const subTotal = productOrder.productDetails.reduce((accu, curr) => accu + curr.cost, 0);
    return(
        <div className='order-subtotal-total'>
        <div className='subtotal-cost'>
            <p className='display-flex'><span>Subtotal</span><span> £400</span></p>
            <p className='display-flex'><span>VAT &#x00040; 20&#x00025;</span><span> £500</span></p>
        </div>
        <div className='total-cost'>
            <p className='display-flex'><span>Total </span> <span> £400</span></p>
        </div>
        <div className='buynowBtn'>
            <button>BuyNow</button>
        </div>
    </div>
    )
}

export default ProductCost