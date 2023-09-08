import React from 'react';
import {  CDBBox } from 'cdbreact';
import logo from '../../assets/cma-logo.png'


const Footer = () => {
  return (
      <>
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
            <img
              alt="logo"
              src={logo}
              width="30px"
            />  
        </CDBBox>
        <CDBBox>
          <small className="ms-2">&copy; CMA, 2023. All rights reserved.</small>
        </CDBBox>
      </CDBBox>

    </>
  );
};

export default Footer;