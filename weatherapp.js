import React from 'react';

// Child component to display weather details
const WeatherDetails = ({ city, temperature, description, humidity }) => {
  return (
    <div className="weather-details">
      <h2>{city}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {description}</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

// Parent component that holds the hardcoded weather data
const WeatherApp = () => {
  const weatherData = {
    city: "New York",
    temperature: 25, // Temperature in Celsius
    description: "Sunny",
    humidity: 60,
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <WeatherDetails
        city={weatherData.city}
        temperature={weatherData.temperature}
        description={weatherData.description}
        humidity={weatherData.humidity}
      />
    </div>
  );
};

export default WeatherApp;

/** 
Steps to Run the App:
Install React App:
If you don't already have a React app, create one using:

npx create-react-app weather-app
cd weather-app
Add the Code:
Replace the contents of src/App.js with the above code.

Styling (Optional):
Add some basic styling in src/App.css for a simple weather interface:

css
Copy
Edit
.weather-app {
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.weather-details h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.weather-details p {
  font-size: 1rem;
  margin: 5px 0;
}


Run the app using:

npm start **/