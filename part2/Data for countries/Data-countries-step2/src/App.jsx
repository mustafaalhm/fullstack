import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);

  const [searchCountry, setSearchCountry] = useState("");
  const [showCountry, setShowCountry] = useState(null);

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
      setShowCountry(null)
      return ;
    }
    const fetchData = async () => {
      try {
        const url = `https://restcountries.com/v3.1/name/${searchCountry}`;
        const request =await axios.get(url);
        console.log(request.data)
        setCountries(request.data)
        console.log(request.data)
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };
    fetchData();
  }, [searchCountry]);

  const handelShowCountery=(country)=>{
    console.log(country)
    setShowCountry(country)
   
  }
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
                    <li key={i}>{country.name.common} <button onClick={()=>handelShowCountery(country)}>show</button></li>
                  )
                })
              }
            </ul>
          </div>
        )
      }
      {/* show language and flag if the country shown is one */}
      {
        countries.length ===1 ?(<>
       
          <div>
           <h3>{countries[0].name.common}</h3>
           <p>Capital {countries[0].capital}</p>
           <p>Area {countries[0].area}</p>
           <h3>Languages:</h3>
          <p>{countries[0].languages && renderLanguage(countries[0].languages)}</p> 
            <div className="flag">
              <p>Flag:</p>
              <img src={countries[0].flags.png} alt={countries[0].name.common} />
              <p>Coat OF Arms:</p>
              <img style={{width:'250px' ,height:'250px'}} src={countries[0].coatOfArms.svg} alt={countries[0].coatOfArms} />
            </div>
           
          </div>
        
        </>) :(<>
        {
          showCountry && (
            <div>
             <h3>{showCountry.name.common}</h3>
             <p>Capital {showCountry.capital}</p>
             <p>Area {showCountry.area}</p>
             <h3>Languages:</h3>
            <p>{showCountry.languages && renderLanguage(showCountry.languages)}</p> 
              <div className="flag">
                <p>Flag:</p>
                <img src={showCountry.flags.png} alt={showCountry.name.common} />
                <p>Coat OF Arms:</p>
                <img style={{width:'250px' ,height:'250px'}} src={showCountry.coatOfArms.svg} alt={showCountry.coatOfArms} />
              </div>
             
            </div>
          )
        }
        
        </>)
      }
    </div>
  );
}

export default App;
