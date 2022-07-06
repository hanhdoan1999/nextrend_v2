import React from 'react';
import { data } from './fakeData';
import TeamMember from '../../components/TeamMember';
import TestimonialItem from '../../components/TestimonialItem';
import Showrooms from '../../components/Showrooms';
import OurStoryBottom from '../../components/OurStoryBottom';
import TextBox from '../../components/TextBox';
import './OurStoryPage.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function OurStoryPage() {
  console.log(data);
  const image =
    'https://new.nextrend.com.au/wp-content/uploads/2022/07/our-story.png';
  const title = 'Our story';
  const bodyContent =
    'Taturis volupta volestotatio molupta turitem et voluptat harchil laborum quundae volupta quam qui ut plandipid qui solo blam ut quam desed quaspernatem ipsum et vendam fugit molum verita venda sitaspe ratiandae vernatu scitatia num harumeni od estium quostrumqui qui sae nobit elestiorera con conem quia sedio dicipis iusda corem rest earciist sa volo voluptat unt a quae moditatur.';
  return (
    <div className='our-story-wrapper container'>
      <div className='our-story-top'>
        <div className='our-story-top_image'>
          <LazyLoadImage
            alt='default'
            src={image}
            effect='blur'
            height='500px'
            width='100%'
          />
        </div>
        <TextBox heading={title} textColor={'#fff'} bg={'#e52c1a'} />
        <div className='our-story-top_content'>
          <div className='our-story-top_content__inner'>{bodyContent}</div>
        </div>
      </div>
      <TeamMember />
      <TestimonialItem />
      <Showrooms />
      <OurStoryBottom />
      {/* <div className='our-story-bottom-image'>
        <img src='' alt='' />
      </div> */}
    </div>
  );
}

export default OurStoryPage;
