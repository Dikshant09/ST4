import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className='footer'>
        <div>@{date} Dikshant</div>
        <div>All rights reserved</div>
    </div>
  )
}

export default Footer;