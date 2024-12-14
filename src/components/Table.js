import React from 'react';
import "../pages/user/MyOrders.css"; // Import styles for the table

const Table = ({ orders }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'status-delivered';
      case 'Shipped':
        return 'status-shipped';
      case 'Pending':
        return 'status-pending';
      case 'Cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  return (
    <div className="my-orders">
      <table className="animated-table3">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Ordered Date</th>
            <th>Delivery Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>
                <img
                  src={require(`../assets/${order.image}`)}
                  alt={`Order No ${index + 1}`}
                  className="product-image1"
                />
              </td>
              <td>{order.price}</td>
              <td>{order.orderdate}</td>
              <td>{order.deliverydate}</td>
              <td className={getStatusClass(order.status)}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
