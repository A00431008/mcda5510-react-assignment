import React from 'react';
import Aboutpagetext from '../components/Aboutpagetext';
import Photo from '../images/photo.jpeg';
const Aboutpage = () => {
  return (
    <div className="content">
        <Aboutpagetext />
        <img src={Photo} className="display-picture" alt="profile"/>
    </div>
  );
};

export default Aboutpage;