import React from 'react';
import HalifaxImage from '../images/HalifaxImage.jpg';
import Weatherwidget from '../components/Weatherwidget';

const Mytownpage = () => {
  return (
    <div className="content">
      <div className='widgetCard'>
        <h1>I live in Halifax.</h1>
        <p className="description">
          Halifax, Nova Scotia, is a historic and charming coastal city known 
          for its rich maritime heritage, picturesque waterfront, lively cultural 
          scene, and friendly atmosphere. It's a must-visit destination on the 
          eastern shores of Canada. <br/> <br/>
          Current temperature in Halifax:
        </p>
        <Weatherwidget />
      </div>
      <div>
        <img src={HalifaxImage} className="halifax-image" alt="Halifax"/>
        <div className="photo-credit">
          Photo by <a href="https://unsplash.com/@liu675352566?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chen Liu</a> on <a href="https://unsplash.com/photos/zL7C-G2U7sw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>
      </div>
      
      <br />
    </div>
    
  );
};

export default Mytownpage;