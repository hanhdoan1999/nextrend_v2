import React from 'react';
import TextBox from '../TextBox';
import './TextWithImage.scss';
function TextWithImage({ heading, bg, image, text }) {
  return (
    <div className='text-width-image-wrapper'>
      <TextBox heading={heading} bg={bg} />
      <div style={{ height: '5px' }}></div>
      <div className='text-width-image'>
        <div className='text-width-image_left'>
          <span>{text}</span>
          {/* <img src={images[0].image.sourceUrl} alt='Default1' /> */}
        </div>
        <div className='text-width-image_right'>
          <img src={image.sourceUrl} alt='Default1' />
        </div>
      </div>
    </div>
  );
}

export default TextWithImage;
