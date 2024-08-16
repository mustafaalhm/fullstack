import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);

  const [filteredCountry, setFilteredCountry] = useState(countries);

  const [searchCountry, setSearchCountry] = useState("");

  function handelSearchChange(event) {
    if(searchCountry.trim() === ""){
      setFilteredCountry([])
      
    }
    const name =event.target.value.toLowerCase();
   
    const filterItems = countries.filter((country)=>{
     
      return country.name.common.toLowerCase().includes(name)
      
    })
     console.log(filterItems.length)
    setFilteredCountry(filterItems)
  }
  useEffect(() => {
    
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);
  return (
    <div>
      find Countries:<input type="text" onChange={handelSearchChange} />
      {
        filteredCountry.length > 10? (
          <p>Too many matches,specify another filter</p>
        ):(
          <>
           {filteredCountry.map((country,i) => {
        return(
           <li key={i}>{country.name.common}</li>
        )
       
      })}
          </>
        )
      }
     
    </div>
  );
}

export default App;
