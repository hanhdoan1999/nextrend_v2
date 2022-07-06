import React from 'react';
import './TextBox.scss';
function TextBox({ heading = 'Text', bg = '#97a955', textColor }) {
  return (
    <div className='text-box' style={{ backgroundColor: bg, color: textColor }}>
      <span className='text-box_heading' style={{ color: textColor }}>
        {heading}
      </span>
    </div>
  );
}
export default TextBox;
