import React from 'react';
import './MyOrders.css';
import Table from '../../components/Table';
// import TableComp from '../../components/TableComp';

function MyOrders({ orders,data }) {
  return (
    <div className="my-orders-container">
      <Table orders={orders} />
      {/* <TableComp data={data?.table?.stock?.data} headers={data?.table?.stock?.headers}/> */}
    </div>
  );
}

export default MyOrders;
