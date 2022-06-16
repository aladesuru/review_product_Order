import React from 'react';

const ProductCost = () => {
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