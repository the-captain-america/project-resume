import React from "react";

const ButtonSimple = ({label, onPress}) => {
  return (
    <button className="btn btn-normal" onClick={onPress}>
        {label}
    </button>
  );
}

export default ButtonSimple;