import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, NavDropdown, Row } from 'react-bootstrap';
import { fakeData } from './fakedata';
import './style.scss';

function Header() {
  const listData = [
    {
      name: 'All',
      children: [
        { name: 'All' },
        { name: 'Arm & tub chairs' },
        { name: 'Bences' },
        { name: 'Brentwood' },
        { name: 'Cross back' },
        { name: 'Fixed outdoor seating' },
        { name: 'Function chairs' },
        { name: 'Indoor dining' },
        { name: 'Stackable' },
        { name: 'Polyproylene/plastic' },
        { name: 'Resin rattan' },
        { name: 'Woven wicker' },
        { name: 'Data1_1' },
        { name: 'Data1_2' },
        { name: 'Function chairs' },
        { name: 'Indoor dining' },
      ],
    },
    {
      name: 'Chairs',
      children: [
        { name: 'All' },
        { name: 'Arm & tub chairs' },
        { name: 'Bences' },
        { name: 'Brentwood' },
        { name: 'Cross back' },
        { name: 'Fixed outdoor seating' },
        { name: 'Function chairs' },
        { name: 'Indoor dining' },
        { name: 'Stackable' },
        { name: 'Polyproylene/plastic' },
        { name: 'Resin rattan' },
        { name: 'Woven wicker' },
        { name: 'Data1_1' },
        { name: 'Data1_2' },
      ],
    },
    {
      name: 'Stools',
      children: [
        { name: 'All' },
        { name: 'Polyproylene/plastic' },
        { name: 'Resin rattan' },
        { name: 'Woven wicker' },
        { name: 'Data1_1' },
        { name: 'Data1_2' },
      ],
    },
    {
      name: 'Tables',
      children: [
        { name: 'Fixed outdoor seating' },
        { name: 'Function chairs' },
        { name: 'Indoor dining' },
        { name: 'Stackable' },
        { name: 'Data1_2' },
      ],
    },
    {
      name: 'Lounges',
      children: [
        { name: 'All' },
        { name: 'Arm & tub chairs' },
        { name: 'Fixed outdoor seating' },
        { name: 'Function chairs' },
        { name: 'Indoor dining' },
        { name: 'Stackable' },
      ],
    },
    {
      name: 'Indoor furniture',
      children: [
        { name: 'All' },
        { name: 'Arm & tub chairs' },
        { name: 'Bences' },
        { name: 'Function chairs' },
        { name: 'Indoor dining' },
        { name: 'Stackable' },
        { name: 'Polyproylene/plastic' },
        { name: 'Resin rattan' },
        { name: 'Woven wicker' },
        { name: 'Data1_1' },
        { name: 'Data1_2' },
      ],
    },
    {
      name: 'Outdoor furniture',
      children: [
        { name: 'Function chairs' },
        { name: 'Indoor dining' },
        { name: 'Stackable' },
        { name: 'Polyproylene/plastic' },
        { name: 'Resin rattan' },
        { name: 'Woven wicker' },
        { name: 'Data1_1' },
        { name: 'Data1_2' },
      ],
    },
    {
      name: 'Poolside furniture',
      children: [{ name: 'Data4_1' }, { name: 'Data4_2' }],
    },
    {
      name: 'Custom furniture',
      children: [{ name: 'Data4_1' }, { name: 'Data4_2' }],
    },
    {
      name: 'Collections',
      children: [{ name: 'Data4_1' }, { name: 'Data4_2' }],
    },
    {
      name: 'Clearance',
      children: [{ name: 'Data4_1' }, { name: 'Data4_2' }],
    },
    {
      name: 'Coming soon',
      children: [{ name: 'Data4_1' }, { name: 'Data4_2' }],
    },
  ];

  const [displayIndex, setDisplayIndex] = useState(0);
  const [displayMobile, setDisplayMobile] = useState(-1);

  const someHandler = (el) => {
    const index = listData.findIndex((item) => item.name === el.name);
    const indexVal = index > 0 ? index : 0;
    setDisplayIndex(indexVal);
    console.log('someHandler', el);
  };

  const someOtherHandler = (el) => {
    console.log('someOtherHandler', el);
  };

  const menuActive = {
    color: '#e52c1a',
  };

  const handleClickMenu = (el) => {
    const index = listData.findIndex((item) => item.name === el.name);
    const indexVal = index > 0 ? index : 0;
    if (displayMobile === indexVal) {
      setDisplayMobile(-1);
    } else {
      setDisplayMobile(indexVal);
    }
  };

  return (
    <div className='mega-menu'>
      <Row>
        <Col xs={12} md={2}>
          {listData.map((el, index) => (
            <div
              key={index}
              // style={listData[displayMobile].name === el.name ? menuActive : {}}
              className='menu-l1'
            >
              <div className='menu-l1-mobile-wrapper'>
                <div
                  className='menu-l1-mobile'
                  onClick={() => handleClickMenu(el)}
                >
                  <span>{el?.name}</span>
                  <i className='fa fa-solid fa-sort-down'></i>
                </div>
                {listData[displayMobile]?.name &&
                listData[displayMobile]?.name === el?.name ? (
                  <div className='menu-l1-mobile-hidden'>
                    {el?.children?.map((item) => (
                      <div className='menu-l2'>{item?.name}</div>
                    ))}
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          ))}

          {/* {listData.map((el, index) => (
            <div
              key={index}
              style={listData[displayIndex].name === el.name ? menuActive : {}}
              className='menu-l1'
              onMouseEnter={() => someHandler(el)}
              onMouseLeave={() => someOtherHandler(el)}
            >
              {el.name}
            </div>
          ))} */}
        </Col>
        <Col xs={12} md={2}>
          {/* {listData[displayIndex].children.length > listData.length
            ? listData[displayIndex].children
                .slice(0, listData.length)
                .map((el) => <div className='menu-l2'>{el.name}</div>)
            : listData[displayIndex].children.map((el) => (
                <div className='menu-l2'>{el.name}</div>
              ))} */}
        </Col>
        <Col xs={12} md={2}>
          {/* {listData[displayIndex].children.length > listData.length
            ? listData[displayIndex].children
                .slice(listData.length, listData[displayIndex].children.length)
                .map((el) => <div className='menu-l2'>{el.name}</div>)
            : ''} */}
          <button className='header-btn'>FILTER BY COLOUR</button>
          <button className='header-btn'>FILTER BY STYLE</button>
          <button className='header-btn'>FILTER BY INDUSTRY</button>
        </Col>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={2}></Col>
      </Row>
    </div>
  );
}

export default Header;
