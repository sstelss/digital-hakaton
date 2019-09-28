import React from 'react';
import './index.css';

import Navbar from "../../components/Navbar"
import OrdersBlock from "../../components/OrdersBlock"
import { Link } from 'react-router-dom'

function Orders() {
  return (
    <div className="Orders">
      <Navbar/>
      <OrdersBlock/>
    </div>
  );
}

export default Orders;