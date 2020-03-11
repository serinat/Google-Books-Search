import React from "react";

function ViewBtn(props) {
  return (
    <button onClick={props.onClick} className={`view-btn ${props["data-value"]}`} {...props} />
  );
}

export default ViewBtn;