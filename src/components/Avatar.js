import React from 'react';

const Avatar = ({ onPressAuth, onActive }) => {
  const avatar = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/811583/logo.jpg';
  let classPulse = 'pulse';
  if(onActive) {
     classPulse += ' active';
  } else {
    classPulse = 'pulse'
  }
  return (
    <div className="avatar">
      <div className="avatar-container" onClick={onPressAuth}>
        <img src={avatar} />
        <div className={classPulse}></div>
      </div>
    </div>
  );
}

export default Avatar;
