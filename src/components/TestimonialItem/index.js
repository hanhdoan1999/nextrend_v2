import React from 'react';
import parse from 'html-react-parser';

function TestimonialItem() {
  const data = {
    content:
      '<p>5 Star quality!  The staff are amazing and always helpful&#8230; Will definitely come back 🙂</p>\n',
    acfTestimonial: {
      author: 'Julie',
      company: 'Sorrento Restaurant and Bar',
      location: 'Cannonvale Queensland',
    },
  };
  return <div>{parse(data.content)}</div>;
}

export default TestimonialItem;
