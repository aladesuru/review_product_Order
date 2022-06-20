import React, {useState} from 'react'
import { basket } from '../../orderListData';

export const AppContext = React.createContext();

const Provider = (props) => {
const [productOrder , setProductOrder] = useState(basket);

    const handleQtyChange = (index, delta) => {
    setProductOrder((prevState) => {
        const productDetails = prevState.productDetails.map((order, listIndex) => {
            if (index === listIndex) {
                return {
                    ...order,
                    quantity:  delta === -1 || delta === 1 ? parseInt(order.quantity) + delta : delta === '' ? parseInt(0) : parseInt(delta),
                }
            } else {
                return {
                    ...order
                }
            }
        })
        return {
            ...prevState,
            productDetails
        } })
    };

    const handleUpdateUnitCost = (index) => {
    setProductOrder((prevState) => {
        const productDetails = prevState.productDetails.map((order, listIndex) => {
            if (index === listIndex) {
                return {
                    ...order,
                    cost:  order.quantity === '' ? 0 : order.price * parseInt(order.quantity),
                }
            } else {
                return {
                    ...order
                }
            }
        })
        return {
            ...prevState,
            productDetails
        } })
    };


    const handleUpdate_Subtotal_totalCost = () => {
        setProductOrder(prevState => {
            let getProductCost = prevState.productDetails.map((order) => {
                return order.cost;
            })
            let subtotal = getProductCost.reduce((accu, curr) => accu + curr, 0).toFixed(2);
            let vatValue = (0.2 * parseFloat(subtotal)).toFixed(2);
            let subtotalPlusVat = (parseFloat(vatValue) + parseFloat(subtotal)).toFixed(2);

            return {
                ...prevState,
                subtotal,
                vatValue,
                subtotalPlusVat,
                productDetails: [
                    ...prevState.productDetails,
                ]
            }
        })
    };

    const handleRemoveProduct = (productIndex) => {
        setProductOrder((prevState) => {
            return {
                ...prevState,
                productDetails: [
                    ...prevState.productDetails.slice(0, productIndex),
                    ...prevState.productDetails.slice(productIndex+1)
                ]
            }
        })
    };

    return(
        <AppContext.Provider value={{productOrder,
        actions:{handleQtyChange, handleRemoveProduct, handleUpdateUnitCost, handleUpdate_Subtotal_totalCost}}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Provider;