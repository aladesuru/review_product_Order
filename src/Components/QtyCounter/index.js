import React, { useContext, useState} from 'react';
import { AppContext } from '../Context';

const QtyCounter = (props) => {
    const [qty, setQty] = useState(props.quantity);
    const {actions} = useContext(AppContext);
    let qtyValue;
    

    const onClickBtnQtychange = (e, delta) => {
        e.preventDefault();
        setQty(parseInt(qty) + delta);
        actions.handleChangeQtyBYbtn(props.orderIndex , delta);
    }

    const onQtyChange = (e) => {
            setQty(e.currentTarget.value);
            actions.handleChangeQty(props.orderIndex , qty);
    }

    return(
        <form className='qty-counter'>
            <input type="text"
            value={qty}
            ref ={(input) => qtyValue = input }
            onChange={(e) => onQtyChange(e)}
            disabled = {qty === 10 ? "disabled" : ""}/>
            <button className='decreaseBtn' onClick={(e) => onClickBtnQtychange(e, -1)}>-</button>
            <button className='increaseBtn' onClick={(e) => onClickBtnQtychange(e, +1)} disabled={qty === 10}>+</button>
        </form>
    )
};

export default QtyCounter;