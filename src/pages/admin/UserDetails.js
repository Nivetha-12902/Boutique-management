import React from 'react';
import './UserDetails.css';
import TableComp from '../../components/TableComp'; // Import the scoped CSS file
function UserDetails({userDetails,data}){
  return (
    <div className="user-details">
      <TableComp data={userDetails?.data} headers={data?.table?.userDetails?.headers}/>
    </div>
  );
};

export default UserDetails;
