import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);

  const [searchCountry, setSearchCountry] = useState("");

  const renderLanguage=(lang)=>{
    if(Array.isArray(lang)){
        return lang.join(", ")
    }else if(typeof(lang) ==="object"){
      return Object.values(lang).join(", ")
    }else{
      return "Unknown"
    }
  }

  useEffect(() => {
    // hide Message filter if input box is empty
    if(searchCountry.trim() ===""){
      setCountries([]);
      return ;
    }
    const fetchData = async () => {
      try {
        const url = `https://restcountries.com/v3.1/name/${searchCountry}`;
        const request =await axios.get(url);
        console.log(request.data)
        setCountries(request.data)
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
      <input
        type="text"
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
      />
      {countries.length > 10 && (
        <>
          <p>Too Many Matche ,Specify Other Filter</p>
        </>
      )}
      {
        countries.length <=10 && countries.length >1 &&(
          <div>
            <h2>Matching Country</h2>
            <ul>
              {
                countries.map((country,i)=>{
                  return(
                    <li key={i}>{country.name.common}</li>
                  )
                })
              }
            </ul>
          </div>
        )
      }
      {/* show language and flag if the country shown is one */}
      {
        countries.length ===1 && (
          <div>
           <h3>{countries[0].name.common}</h3>
           <p>Capital {countries[0].capital}</p>
           <p>Area {countries[0].area}</p>
           <h3>Languages:</h3>
           {countries[0].languages && renderLanguage(countries[0].languages)}
          </div>
        )
      }
    </div>
  );
}

export default App;
