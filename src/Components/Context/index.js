import React, {useState} from 'react'
import { basket } from '../../orderListData';

export const AppContext = React.createContext();

const Provider = (props) => {
    const [productOrder , setProductOrder] = useState(basket);

    const handleChangeQtyBYbtn = (index, delta) => {
        console.log('delta', delta);
    setProductOrder((prevState) => {
        const ProductDetails = prevState.ProductDetails.map((order, listIndex) => {
            if (index === listIndex) {
                return {
                    ...order,
                    quantity:  delta === -1 || delta === 1 ? parseInt(order.quantity) + delta : delta
                }
            } else {
                return {
                    ...order
                }
            }
        })
        return {
            ...prevState,
            ProductDetails
        } })
    };

    // const handleChangeQty = (index, qty) => {
    //     setProductOrder((prevState) => {
    //         const ProductDetails = prevState.ProductDetails.map((order, listIndex) => {
    //             if (index === listIndex) {
    //                 return {
    //                     ...order,
    //                     quantity:   parseInt(qty)
    //                 }
    //             } else {
    //                 return {
    //                     ...order
    //                 }
    //             }
    //         })
    //         return {
    //             ...prevState,
    //             ProductDetails
    //         } })
    //     };

        console.log('state => ', productOrder);

    return(
        <AppContext.Provider value={{productOrder, actions:{handleChangeQtyBYbtn}}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Provider;