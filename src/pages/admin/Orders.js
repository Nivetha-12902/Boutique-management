import React from "react";
import "./Orders.css";
import TableComp from "../../components/TableComp";
function Orders({payment,data}){
  return (
    <div className="orders-container">
      <TableComp data={payment?.data} headers={data?.table?.payment?.headers}/>
    </div>
  );
};

export default Orders;
