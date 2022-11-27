import {React, useState, useEffect} from 'react';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position)  {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log('latitude is:', lat)
        console.log('Longitude is:', long)
      });


      fetch(process.env.REACT_APP_API_URL + lat + '&lon=' + long + '&appid=' + process.env.REACT_APP_API_KEY)
      .then(res => res.json())
      .then(result => {
        setData(result)
        setTemp(result.main.temp)
        console.log(temp)
      });
    }
    fetchData();
    
      
  }, [lat, long, temp])
  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>{data.name}</h1>
      <h2>{temp}</h2>
    </div>
  );
}

export default App;
