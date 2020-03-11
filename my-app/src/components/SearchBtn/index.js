import React from "react";

function SearchBtn(props) {
  return (
    <button onClick={props.onClick} className={`search-btn ${props["data-value"]}`} {...props} />
  );
}

export default SearchBtn;