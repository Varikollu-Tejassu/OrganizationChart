import React from "react";
import { FaBuilding } from "react-icons/fa";
import "../App.css";

const CustomNodeContent = (props) => {
  return (
    <>
      <div className="node-container">
        <div className="node-details">
         
            <div className="node-content">
              <img
                className="node-img"
                // src={props.data.imageUrl}
                src="https://randomuser.me/api/portraits/men/20.jpg"
                alt="Profile"
              />
              <div className="node-info">
                <div className="node-name">{props.data.employeeName}</div>
                <div className="node-role">{props.data.positionName}</div>

                {props.data.department && (
                  <div className="node-department">
                    <FaBuilding />
                    <div>{props.data.department}</div>
                  </div>
                )}
              </div>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default CustomNodeContent;