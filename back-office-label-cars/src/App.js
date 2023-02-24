import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [data, setData] = useState([]);

 const getData = async() =>{
  const json = await fetch("http://10.125.22.80:5500/").then(res =>res.json());
  console.log("yeeeees");
  setData(json);
 }
 useEffect(()=>{
  getData()
 },[])
 
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Base des véhicules</h1>
      <div className='list-cars'>
        <p>Nom</p>
        <p>Action</p>
        {getData()}
      </div>
    </div>
  );
}

export default App;
