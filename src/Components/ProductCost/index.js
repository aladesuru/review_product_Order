import React , {useContext}from 'react';
import { AppContext } from '../Context';

const ProductCost = () => {
    const{productOrder} = useContext(AppContext);
    let subtotal = productOrder.subtotal;
    let vatCal = productOrder.vatValue;
    let subtotalPlusVat = productOrder.subtotalPlusVat;

    return(
        <div className='order-subtotal-total'>
        <div className='subtotal-cost'>
            <p className='display-flex'><span>Subtotal</span><span>{`£ ${subtotal}`}</span></p>
            <p className='display-flex'><span>VAT &#x00040; 20&#x00025;</span><span>{`£ ${vatCal}`}</span></p>
        </div>
        <div className='total-cost'>
            <p className='display-flex'><span>Total </span> <span>{`£ ${subtotalPlusVat}`}</span></p>
        </div>
        <div className='buynowBtn'>
            <button>BuyNow</button>
        </div>
    </div>
    )
}

export default ProductCost