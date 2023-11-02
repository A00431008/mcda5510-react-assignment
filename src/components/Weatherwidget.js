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
    const [unit, setUnit] = useState('metric');

    useEffect(() => {
        fetch(api.baseURL 
            + "lat=" + api.latitude
            + "&lon=" + api.longitude
            + "&appid=" + api.key
            + "&units=" + unit)
          .then((res) => res.json())
          .then((data) => setTemperature(data.main.temp))
          .catch(err => console.error(err.message));
    });

    useEffect(() => {
      var tempinC = (unit === "metric" ? (temperature) : (temperature - 32) * 5/9)
      
      if (tempinC < 10) {setImage(Cold);}
      else if (tempinC < 20) {setImage(Mild);}
      else {setImage(Sunny);}
    }, [temperature, unit]);

    function convertTemp() {
      if (unit === "metric") {
        setUnit("imperial");
      } else {
        setUnit("metric");
      }
    }
    
    return (
      <div className="weather-widget">
        <img className="weather-image" src={image} alt="Weather Icon" />
        <div className="weather-display">
          <h1 className="temperature">{temperature}
           °{unit === "metric" ? "C": "F"}
          </h1>
          <button className="convert-btn" onClick={() => convertTemp()}>
            °{unit === "metric" ? "F": "C"}
          </button>
        </div>
    </div>
    );
};

export default Weatherwidget;