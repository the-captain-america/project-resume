import React from 'react';

const HelpBox = ({onPressInfo}) => {
  return (
    <span
      onClick={onPressInfo}
      className="help-box">
      <i className="fa fa-question-circle" aria-hidden="true"></i>
     </span>
  );
}

export default HelpBox;
