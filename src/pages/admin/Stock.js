import React from 'react';
import "./Stock.css";
// import Table from '../../components/Table';
import TableComp from '../../components/TableComp';

function Stock({ stock,data }) {
  return (
    <div className="stock-container">
      <TableComp data={stock?.data} headers={data?.table?.stock?.headers} />
    </div>
  );
}

export default Stock;
