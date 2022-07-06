import React from 'react';
import parse from 'html-react-parser';
function OurStoryBottom() {
  const data = {
    fieldGroupName: 'Page_Acfpage_Component_TextWithImageVertical',
    heading: null,
    topText: null,
    topMoreLink: null,
    image: {
      sourceUrl:
        'https://new.nextrend.com.au/wp-content/uploads/2022/07/design3.png',
    },
    bottomText:
      '<p>Catimus ex ninte, converis conficid mod caed se crum idet pervis consil idetravo, condem nit. Hilius, senerox mei portatus hos.</p>\n',
    bottomMoreText: 'OUR RANGE',
    bottomMoreLink: '#',
  };
  return (
    <div className='our-story-bottom'>
      <img
        src={data.image.sourceUrl}
        alt='our_story_bottom_image'
        width={'100%'}
      />
      <p>
        {parse(data.bottomText)}
        <span>{parse(data.bottomMoreText)}</span>
      </p>
    </div>
  );
}

export default OurStoryBottom;
