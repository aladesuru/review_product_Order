import React from 'react';
import '../../css/app.css';
import Header from '../Header';
import OrderDetails from '../ReviewOrderDetails';

function App() {
  return (
    <div className="container">
      <Header text='Review Your Order &amp; Complete Check Out'/>
      <OrderDetails />
    </div>
  );
}

export default App;
