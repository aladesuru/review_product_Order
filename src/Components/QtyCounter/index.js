import React, { useContext, useState} from 'react';
import { AppContext } from '../Context';

const QtyCounter = (props) => {
    const [qty, setQty] = useState(props.quantity);
    const {actions} = useContext(AppContext);
    let qtyValue ;

    console.log('quntity => ', qty);

    const onClickBtnQtychange = (e, delta) => {
        console.log(e);
        e.preventDefault();
        if(qtyValue.value < 0 || qtyValue.value > 10 || qtyValue.value === " "){
            setQty(0);
            alert("Sorry quantity value can only be between 1 to 10");
        }else {
            if (delta === -1 || delta === +1) {
                    let value;
                if(!isNaN(qtyValue.value)){
                    value = parseInt(qtyValue.value) + delta;
                    setQty(value);
                    actions.handleChangeQtyBYbtn(props.orderIndex , delta);
                }
            } else {
                setQty(qtyValue.value);
                actions.handleChangeQtyBYbtn(props.orderIndex , qty);
                }
            }
    };

        return(
        <form className='qty-counter' onSubmit={onClickBtnQtychange}>
            <input type="text"
            value={qty}
            ref ={(input) => qtyValue = input }
            onChange={onClickBtnQtychange}
            onKeyUp={onClickBtnQtychange}
            />
            {/* <button className='hide' onSubmit={(e) => e.defaultPrevented()}>-</button> */}
            <button className='decreaseBtn'onClick={(e) => onClickBtnQtychange(e, -1) } disabled={qty <= 0 } >-</button>
            <button className='increaseBtn' onClick={(e) => onClickBtnQtychange(e, +1)} disabled={qty === 10 || qty < 0 || qty === ''}>+</button>
        </form>
    )
};

export default QtyCounter;