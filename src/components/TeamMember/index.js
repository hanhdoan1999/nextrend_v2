import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './TeamMember.scss';

function TeamMember() {
  const heading = 'Meet the team';
  const teamMembers = [
    {
      image: {
        sourceUrl:
          'https://new.nextrend.com.au/wp-content/uploads/2022/07/team1.png',
      },
      name: 'Full name 1',
      position: 'Title',
    },
    {
      image: {
        sourceUrl:
          'https://new.nextrend.com.au/wp-content/uploads/2022/07/team2.png',
      },
      name: 'Full name 2',
      position: 'Title',
    },
    {
      image: {
        sourceUrl:
          'https://new.nextrend.com.au/wp-content/uploads/2022/07/team3.png',
      },
      name: 'Full name 3',
      position: 'Title',
    },
    {
      image: {
        sourceUrl:
          'https://new.nextrend.com.au/wp-content/uploads/2022/07/team4.png',
      },
      name: 'Full name 4',
      position: 'Title',
    },
    {
      image: {
        sourceUrl:
          'https://new.nextrend.com.au/wp-content/uploads/2022/07/team5.png',
      },
      name: 'Full name 5',
      position: 'Title',
    },
    {
      image: {
        sourceUrl:
          'https://new.nextrend.com.au/wp-content/uploads/2022/07/team6.png',
      },
      name: 'Full name 6',
      position: 'Title',
    },
    {
      image: {
        sourceUrl:
          'https://new.nextrend.com.au/wp-content/uploads/2022/07/team7.png',
      },
      name: 'Full name 7',
      position: 'Title',
    },
  ];
  return (
    <div className='team-member'>
      <div className='team-member_title'>{heading}</div>
      <div className='team-member_content'>
        <div className='team-member_content__row1'>
          <Row>
            {teamMembers.length > 4
              ? teamMembers.slice(0, 4).map((el, index) => (
                  <Col xs={12} md={3}>
                    <div className='box-image'>
                      <img src={el.image.sourceUrl} alt={'imageMember'} />
                    </div>
                    <div>{el.name}</div>
                    <div>{el.position}</div>
                  </Col>
                ))
              : ''}
          </Row>
        </div>
        <div className='team-member_content__row2'>
          <Row>
            {teamMembers.length > 4
              ? teamMembers.slice(4, teamMembers.length).map((el, index) => (
                  <Col xs={12} md={3}>
                    <img src={el.image.sourceUrl} alt={'imageMember'} />
                    <div>{el.name}</div>
                    <div>{el.position}</div>
                  </Col>
                ))
              : ''}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
