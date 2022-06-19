import React, { useContext, useState} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../Context';

const QtyCounter = (props) => {
    const [qty, setQty] = useState(props.quantity);
    const {actions} = useContext(AppContext);
    let qtyValue ;

    const onQtyChange = (e, delta) => {
        console.log(e);
        e.preventDefault();
        if(qtyValue.value < 0 || qtyValue.value > 10 || qtyValue.value === " "){
            setQty(0);
            alert("Sorry quantity value can only be between 1 to 10");
        }else {
            if (delta === -1 || delta === +1) {
                if(!isNaN(qtyValue.value)){
                    let value = parseInt(qtyValue.value) + delta;
                    setQty(value);
                    actions.handleQtyChange(props.orderIndex , delta);
                }
            } else {
                setQty(qtyValue.value);
                actions.handleQtyChange(props.orderIndex , qty);
                }
            }
            actions.handleUpdateUnitCost(props.orderIndex);
            actions.handleUpdate_Subtotal_totalCost();
    };

        return(
        <form className='qty-counter' onSubmit={onQtyChange}>
            <input type="text"
            value={qty}
            ref ={(input) => qtyValue = input }
            onChange={onQtyChange}
            onKeyUp={onQtyChange}
            />
            <button className='decreaseBtn'onClick={(e) => onQtyChange(e, -1) } disabled={qty <= 0 } >-</button>
            <button className='increaseBtn' onClick={(e) => onQtyChange(e, +1)} disabled={qty === 10 || qty < 0 || qty === ''}>+</button>
        </form>
    )
};

QtyCounter.propTypes = {
    quantity: PropTypes.number.isRequired,
    orderIndex: PropTypes.number.isRequired
}

export default QtyCounter;