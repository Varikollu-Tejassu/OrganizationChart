import React from "react";
import { MdClose } from "react-icons/md";
import "../App.css";

const EmployeeDetailsCard = (props) => {
  return (
    <div className="card">
      <button className="card-close-btn" onClick={props.handleClose}>
        <MdClose />
      </button>
    
        <div>
          <div className="card-header">
            <img
              className="card-img"
              src={props.imageUrl}
              alt="Profile"
            />
            <h2 className="card-name">{props.name}</h2>
            <p className="card-role">{props.positionName}</p>
          </div>
          <div className="card-body">
            <div className="card-item">
              <p className="card-item-label">Phone:</p>
              <p className="card-item-value">{props.phone}</p>
            </div>
            <div className="card-item">
              <p className="card-item-label">Email:</p>
              <p className="card-item-value">{props.email}</p>
            </div>
            <div className="card-item">
              <p className="card-item-label">Location:</p>
              <p className="card-item-value">{props.location}</p>
            </div>
          </div>
        </div>
    
      <div className="card-item">
        <p className="card-item-label">Description:</p>
        <p className="card-item-value">{props.description}</p>
      </div>
    </div>
  );
};

export default EmployeeDetailsCard;