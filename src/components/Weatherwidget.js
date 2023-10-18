import React,
{useState, useEffect} from 'react';

const Weatherwidget = () => {
    const {apiData, setApiData} = useState({});

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?
        lat={44.651070}
        &lon={-63.582687}
        &appid={${process.env.WEATHER_API_KEY}}
        &units=metric`;

    useEffect(() => {
        fetch(apiURL)
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }, [apiURL]);

    return (
    <div>
      
    </div>
  );
};

export default Weatherwidget;
