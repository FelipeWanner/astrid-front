import React, { useEffect, useState } from 'react';
import "../styles.css";
import Menu from "../components/Menu";
import Phone from "../components/Phone";
import Topsec from "../components/Topsec";
import Search from "../components/Search";
import Cards from "../components/Cards";
import Date from "../components/Date";
import Weather from "../components/WeatherInfo";
import axios from 'axios';

function Dashboard() {
  const [activities, setActivities] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to handle pop-up visibility
  const [newActivity, setNewActivity] = useState({
    user_id: 1, // Hardcoded user_id for now
    activity_name: '',
    activity_category: '',
    activity_length: '',
    indoors: false, // Default to false
  });

  // Fetch activities for user ID 1
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/activities/1')
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prev) => ({ ...prev, [name]: value }));
  };

  // Handle boolean toggle for "Indoors"
  const handleCheckboxChange = (e) => {
    setNewActivity((prev) => ({ ...prev, indoors: e.target.checked }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/activities', newActivity)
      .then((response) => {
        console.log('Activity added:', response.data);
        setActivities((prev) => [...prev, { ...newActivity, id: response.data.activityId }]); // Update activities state
        setIsPopupOpen(false); // Close the pop-up
        setNewActivity({ user_id: 1, activity_name: '', activity_category: '', activity_length: '', indoors: false }); // Reset form
      })
      .catch((error) => {
        console.error('Error adding activity:', error);
      });
  };

  // Delete an activity
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/activities/${id}`)
      .then(() => {
        // Remove the deleted activity from the state
        setActivities((prev) => prev.filter((activity) => activity.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting activity:', error);
      });
  };

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
          key={item.id}
          id={item.id}
          action={item.activity_name}
          desc={item.activity_category}
          time={item.activity_length}
          onDelete={handleDelete} // Pass the delete function
        />
      ))}
      <button className="add-button" onClick={() => setIsPopupOpen(true)}>
        Add Task
      </button>

      {/* Pop-Up Form */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add a New Task</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Activity Name:
                <input
                  type="text"
                  name="activity_name"
                  value={newActivity.activity_name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Activity Category:
                <input
                  type="text"
                  name="activity_category"
                  value={newActivity.activity_category}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Activity Length:
                <input
                  type="number"
                  name="activity_length"
                  value={newActivity.activity_length}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Indoors:
                <input
                  type="checkbox"
                  name="indoors"
                  checked={newActivity.indoors}
                  onChange={handleCheckboxChange}
                />
              </label>
              <button type="submit">Add Task</button>
              <button type="button" onClick={() => setIsPopupOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
