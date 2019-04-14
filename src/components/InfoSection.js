import React from 'react';

const InfoSection = ({revealContent, content, title, buttonStyle}) => {
  let className = 'info-content';
  if(revealContent == true) {
    className += ' active';
  } else {
    className = 'info-content'
  }

  const { childButtonStyle } = styles;
  const mergedButtonStyle = buttonStyle ? Object.assign({}, childButtonStyle, buttonStyle) : childButtonStyle;


  return (
    <div className={className}>
      <section style={mergedButtonStyle}>
       <h3>{title}</h3>
       <p>{content}</p>
       </section>
    </div>
  );
}

const styles = {
  childButtonStyle:{
    height:'auto'
  }
}

export default InfoSection;
