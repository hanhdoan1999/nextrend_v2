import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TextBox from '../TextBox';
import './Gallery.scss';

function Gallery({ images, heading, bg }) {
  return (
    <div className='gallery-component'>
      <TextBox heading={heading} bg={bg} />
      <div style={{ height: '5px' }}></div>
      <div className='gallery-image'>
        <div className='gallery-image_left'>
          <img src={images[0].image.sourceUrl} alt='Default1' />
        </div>
        <div className='gallery-image_right'>
          <img src={images[1].image.sourceUrl} alt='Default2' />
          <img src={images[2].image.sourceUrl} alt='Default3' />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
