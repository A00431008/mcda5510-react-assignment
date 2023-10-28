import React from 'react';
import HalifaxImage from '../images/HalifaxImage.jpg';
import Weatherwidget from '../components/Weatherwidget';

const Mytownpage = () => {
  return (
    <div className="content">
      <div className='widgetCard'>
        <h1>I live in Halifax.</h1>
        <Weatherwidget />
      </div>
      <img src={HalifaxImage} className="halifax-image" alt="Halifax"/>
    </div>
  );
};

export default Mytownpage;