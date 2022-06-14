import React, {useState} from 'react'
import { basket } from '../../mockData';

const  AppContext = React.createContext();

// console.log("Provide => value => ", basket());

const Provider = (props) => {
    const [productOrder , setproductOrder] = useState(basket());

    console.log("Provide => value => ", productOrder);

    return(
        <AppContext.Provider value={productOrder}>
            {props.children}
        </AppContext.Provider>
    )

}

export default Provider;