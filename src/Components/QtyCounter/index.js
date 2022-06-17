import React, { useContext, useState} from 'react';
import { AppContext } from '../Context';

const QtyCounter = (props) => {
    const [qty, setQty] = useState(props.quantity);
    const {actions} = useContext(AppContext);
    let qtyValue ;

    const onQtyChange = (e) => {
        console.log(e);
        if (e.target.value < 0 || e.target.value > 10){
            setQty(0);
            alert("Sorry quantity value can only be between 1 to 10");
        }else{
            setQty(e.target.value );
            actions.handleChangeQtyBYbtn(props.orderIndex , qty);
        }
    }

    console.log('quntity => ', qty);



    const onClickBtnQtychange = (e, delta) => {
        e.preventDefault();

        if(qtyValue.value < 0 || qtyValue.value > 10 || qtyValue.value === " "){
            setQty(0);
            alert("Sorry quantity value can only be between 1 to 10");
        }else {
            let value;
            if(!isNaN(qtyValue.value)){
                value = parseInt(qtyValue.value) + delta;
                setQty(value);
            }
        }

        actions.handleChangeQtyBYbtn(props.orderIndex , delta);
    }


    return(
        <form className='qty-counter' onSubmit={(e) => {e.preventDefault() ;  actions.handleChangeQtyBYbtn(props.orderIndex , qty);}}>
            <input type="text"
            value={qty}
            ref ={(input) => qtyValue = input }
            onChange={onQtyChange}
            onBlur={onQtyChange}
            />
            <button className='hide' onSubmit={(e) => e.defaultPrevented()}>-</button>
            <button className='decreaseBtn'onClick={(e) => onClickBtnQtychange(e, -1)} disabled={qty <= 0 }>-</button>
            <button className='increaseBtn' onClick={(e) => onClickBtnQtychange(e, +1)} disabled={qty === 10 || qty < 0 || qty === ''}>+</button>
        </form>
    )
};

export default QtyCounter;