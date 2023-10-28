import React,
{useState, useEffect} from 'react';
import Cold from '../images/cold.png';
import Mild from '../images/mild.png';
import Sunny from '../images/sunny.png';

const api = {
  baseURL: "https://api.openweathermap.org/data/2.5/weather?",
  key: "e8f99326a0dfa70c6a187c0470c0d0ce",
  latitude: 44.651070,
  longitude: -63.582687,
}

const Weatherwidget = () => {
    const [temperature,setTemperature] = useState(0);
    const [image, setImage] = useState();
    const [isCelcius, setIsCelcius] = useState(true);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        fetch(api.baseURL 
            + "lat=" + api.latitude
            + "&lon=" + api.longitude
            + "&appid=" + api.key
            + "&units=metric")
          .then((res) => res.json())
          .then((data) => setTemperature(data.main.temp))
          .catch(err => console.error(err.message));
    }, []);

    useEffect(() => {
      var tempinC = (isCelcius ? (temperature) : (temperature - 32) * 5/9)
      
      if (tempinC < 10) {setImage(Cold);}
      else if (tempinC < 20) {setImage(Mild);}
      else {setImage(Sunny);}
    }, [temperature, isCelcius]);

    function convertTemp() {
      if (isCelcius) {
        setTemperature(((temperature * 9/5) + 32).toFixed(2));
        setIsCelcius(false);
      } else {
        setTemperature(((temperature - 32) * 5/9).toFixed(2));
        setIsCelcius(true);
      }
    }

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
      }, []);
    
    return (
      <div className="weather-widget">
        <img className="weather-image" src={image} alt="Weather Icon" />
        <h1 className="temperature">{temperature}
          °{isCelcius ? "C": "F"}
        </h1>
        <button className="convert-btn" onClick={() => convertTemp()}>
          °{isCelcius ? "F": "C"}
        </button>
        <h3 className="date-time">{currentDateTime.toString()}</h3>      
    </div>
    );
};

export default Weatherwidget;