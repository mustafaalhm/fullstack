import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import dotenv from 'dotenv';
// dotenv.config()


function App() {
  const [countries, setCountries] = useState([]);

  const [searchCountry, setSearchCountry] = useState("");
  const [showCountry, setShowCountry] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const renderLanguage = (lang) => {
    if (Array.isArray(lang)) {
      return lang.join(", ");
    } else if (typeof lang === "object") {
      return Object.values(lang).join(", ");
    } else {
      return "Unknown";
    }
  };
  useEffect(() => {
    // hide Message filter if input box is empty
    console.log(import.meta.env.VITE_SOME_KEY)
    if (searchCountry.trim() === "") {
      setCountries([]);
      setShowCountry(null);

      return;
    }

  
  const getWeather = async (country) => {
    try {
      const api_key = import.meta.env.VITE_SOME_KEY
      const request = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${api_key}&units=metric`
      );
      setWeatherData(request.data);
      console.log(request.data);
    } catch (error) {
      console.log("error fetching the weather data", error);
      setWeatherData(null);
    }
  };
  
    const fetchData = async () => {
      try {
        const url = `https://restcountries.com/v3.1/name/${searchCountry}`;
        const request = await axios.get(url).then((response) => {
          setCountries(response.data);
          
          setWeatherData(null)
          if (response.data.length === 1) {
            getWeather(response.data[0].capital);
          }
        });
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };
    fetchData();
  }, [searchCountry]);

  
  return (
    <div>
      <h1>Country information </h1>
      find Countries:
      <input type="text" value={searchCountry} onChange={(e)=>setSearchCountry(e.target.value)} />
      {countries.length > 10 && (
        <>
          <p>Too Many Matche ,Specify Other Filter</p>
        </>
      )}
      {countries.length <= 10 && countries.length > 1 && (
        <div>
          <h2>Matching Country</h2>
          <ul>
            {countries.map((country, i) => {
              return (
                <li key={i}>
                  {country.name.common}{" "}
                  <button onClick={() => setSearchCountry(country)}>
                    show
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {/* show language and flag if the country shown is one */}
      {countries.length === 1 ? (
        <>
          <div>
            <h3>{countries[0].name.common}</h3>
            <p>Capital {countries[0].capital}</p>
            <p>Area {countries[0].area}</p>
            <h3>Languages:</h3>
            <p>
              {countries[0].languages && renderLanguage(countries[0].languages)}
            </p>
            <div className="flag">
              <p>Flag:</p>
              <img
                src={countries[0].flags.png}
                alt={countries[0].name.common}
              />
              <p>Coat OF Arms:</p>
              <img
                style={{ width: "250px", height: "250px" }}
                src={countries[0].coatOfArms.svg}
                alt={countries[0].coatOfArms}
              />
            </div>
            <div className="weather">
              
              {
                weatherData && (
                  <>
                  <h3>Weather in {countries[0].capital}</h3>
                  <p>Temperature : {weatherData.main.temp} Celsius.</p>
                  <p>des : {weatherData.weather[0].description} </p>
                  <p>Wind : {weatherData.wind.speed} m/s</p>
                  
                  <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                  </>
                )
              }
            </div>
          </div>
        </>
      ) : (
        <>
          {showCountry && (
            <div>
              <h3>{showCountry.name.common}</h3>
              <p>Capital {showCountry.capital}</p>
              <p>Area {showCountry.area}</p>
              <h3>Languages:</h3>
              <p>
                {showCountry.languages && renderLanguage(showCountry.languages)}
              </p>
              <div className="flag">
                <p>Flag:</p>
                <img
                  src={showCountry.flags.png}
                  alt={showCountry.name.common}
                />
                <p>Coat OF Arms:</p>
                <img
                  style={{ width: "250px", height: "250px" }}
                  src={showCountry.coatOfArms.svg}
                  alt={showCountry.coatOfArms}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
