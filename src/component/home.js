import React, { useEffect } from 'react';
import './style/home.css';
import { useState } from 'react';
import Contact from './Contact/Contact';
import { FaWhatsapp } from 'react-icons/fa';
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const [data, setData] = useState([]);
  const [timedata1, setTimeData1] = useState([]);
  const [timedata2, setTimeData2] = useState([]);
  const [timedata3, setTimeData3] = useState([]);
  const [timedata4, setTimeData4] = useState([]);

  
  const { user, isAuthenticated} = useAuth0();
  console.log(user)

  // console.log(data);
  // console.log(timedata1);

  const stockData = async () => {
    const getData = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo')
    const newData = await getData.json();
    setData(newData['Meta Data']);

    const getTime = (newData["Time Series (Daily)"])
    setTimeData1(getTime["2023-05-15"])
    setTimeData2(getTime["2023-05-16"])
    setTimeData3(getTime["2023-05-17"])
    setTimeData4(getTime["2023-05-18"])

  }

  useEffect(() => {
    stockData();
  }, [])

  return (
    <div className='container'>
      {isAuthenticated ?
      <>
      <h1 class="hero_heading">
        Welcome to the Future of Trading!
      </h1>
      <h2>Meta Data:</h2>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>

      <div className='row'>
        <div className='col'>
          <h5>2023-05-15:</h5>
          <ul>
            {
              Object.entries(timedata1).map(([key, value]) => (

                <li key={key}>
                  <h5>{key} : {value}</h5>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='col'>
          <h5>2023-05-16:</h5>
          <ul>
            {
              Object.entries(timedata2).map(([key, value]) => (

                <li key={key}>
                  <h5>{key} : {value}</h5>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='col'>
          <h5>2023-05-17:</h5>
          <ul>
            {
              Object.entries(timedata3).map(([key, value]) => (

                <li key={key}>
                  <h5>{key} : {value}</h5>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='col'>
          <h5>2023-05-18:</h5>
          <ul>
            {
              Object.entries(timedata4).map(([key, value]) => (

                <li key={key}>
                  <h5>{key} : {value}</h5>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className='whatShare'>
        <h5>Share Data on Whatsapp :</h5>
        <div>
          <a href='https://web.whatsapp.com/'>
            <FaWhatsapp color='green' style={{ fontSize: '2.5rem' }} />
          </a>
        </div>
      </div>

      <Contact />
      </>
      :
      <>
      <h1 class="hero_heading">
        If New User Signup First!
        <br/>
        If Existing User Login First!
      </h1>
      </>
      }
    </div>
  )
}
export default Home;
