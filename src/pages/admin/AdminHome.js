import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminHome.css";

const AdminHome = () => {
  const data = [
    { color: "primary", title: "Visitors", percentage: "65.5", description: "so far in our blog, and our website." },
    { color: "red", title: "Pending", percentage: "23.2", description: "so far in our blog, and our website." },
    { color: "blue", title: "Review", percentage: "78", description: "so far in our blog, and our website." },
    { color: "aqua", title: "Delivered", percentage: "22", description: "so far in our blog, and our website." },
    { color: "green", title: "Shipped", percentage: "94", description: "so far in our blog, and our website." },
    { color: "cyan", title: "Orders", percentage: "45.9", description: "so far in our blog, and our website." },
    { color: "purple", title: "Stock", percentage: "27", description: "so far in our blog, and our website." },
    { color: "pink", title: "Cancelled", percentage: "3", description: "so far in our blog, and our website." },
  ];

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-sm-3">
            <div className={`tile-progress tile-${item.color}`}>
              <div className="tile-header">
                <h3>{item.title}</h3>
                <span>{item.description}</span>
              </div>
              <div className="tile-progressbar">
                <span
                  data-fill={`${item.percentage}%`}
                  style={{ width: `${item.percentage}%` }}
                ></span>
              </div>
              <div className="tile-footer">
                <h4>
                  <span className="pct-counter">{item.percentage}</span>% increase
                </h4>
                <span>{item.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;

