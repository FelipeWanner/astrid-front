import React, { useEffect, useState } from 'react';
import "../styles.css";
import Menu from "../components/Menu";
import Phone from "../components/Phone";
import Topsec from "../components/Topsec";
import Search from "../components/Search";
import Cards from "../components/Cards";
import Date from "../components/Date";
import Add from "../components/Addsec";
import Weather from "../components/WeatherInfo";
import axios from 'axios';
//import { TodayDetails } from '../mockAPI'; //NOT NECESSARY ANYMORE!! 

function Dashboard() {
  const [activities, setActivities] = useState([]); //ASTRID: this is the replacement for our 
                                                    //mockAPI (TodayDetails), remember?


useEffect(() => {
  // Fetch activities for user ID 1 (anna)
  axios
    .get('http://localhost:4000/api/activities/1') //GEORGE! always remember what is your back end port!!!! 
    .then((response) => {
      setActivities(response.data);
      console.log(activities)
    })
    .catch((error) => {
      console.error('Error fetching activities:', error);
    });
}, []);


  return (
    <div className="screen">
      <Phone />

      <Topsec />

      <Menu />

      <Date />

      <Weather />

      <Search />

      <div className="sugg-task">
        <p>Suggested tasks</p>
      </div>

      {activities.map((item) => (
        <Cards
          id={item.id}
          action={item.activity_name}
          desc={item.activity_category}
          time={item.activity_length}
  
        />
      ))}

      <Add />
    </div>
  );
}

export default Dashboard;
