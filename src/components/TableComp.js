import React from "react";
// import "../pages/user/MyOrders.css"; // Import styles for the table

const TableComp = ({ headers, data }) => {
  console.log("tableComp data...",data);
  console.log("tableComp headers...",headers);

  return (
    <div className="my-orders">
      <table className="animated-table3">
        <thead>
          <tr>
            {headers?.map((itm, index) => (
              <th key={index}>{itm.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers?.map((header, colIndex) => (
                <td key={colIndex}>
                  {row[header.name.replace(/\s+/g, "").toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComp;
