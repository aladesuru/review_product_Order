import React, {useContext} from 'react';
import { AppContext } from '../Context';
import QtyCounter from '../QtyCounter';

const ProductList = () => {
    const {productOrder, actions} = useContext(AppContext);
    const {productDetails} = productOrder;

    const removeProduct = (ndx) => {
        actions.handleRemoveProduct(ndx);
        actions.handleUpdate_Subtotal_totalCost();
    }

    return(
        <table data-testid ='productlist'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                    </tr>
                </thead>
            <tbody>
            {
                productDetails.map((orderlist , index) => {
                    let unitCost = (orderlist.quantity * orderlist.price).toFixed(2)
                    return (
                        <tr key={index}>
                            <td>{orderlist.product}</td>
                            <td>{orderlist.price}</td>
                            <td>
                            <QtyCounter
                            quantity={orderlist.quantity}
                            orderIndex={index}
                            />
                            </td>
                            <td>{unitCost}</td>
                            <td><button onClick={() => removeProduct(index)} className='deleteBtn'>Delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
    )
}

export default ProductList;