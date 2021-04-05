import React from "react";
import "./App.css";

const App: React.FC = () => {
  // const [weather, setWeather] = useState(null);
  // const [weatherTwo, setWeatherTwo] = useState(null);
  // const [inputWeather, setInputWeather] = useState("");

  // const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputWeather(e.target.value);
  // };
  // const onSubmit = (e: React.FormEvent): void => {
  //   e.preventDefault();
  //   axios
  //     .get(
  //       `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API}&q=${inputWeather}&aqi=no`
  //     )
  //     .then((response) => {
  //       setWeather(response.data.location.localtime);
  //       setWeatherTwo(response.data.location.name);
  //     })
  //     .catch((err) => console.log(err));

  //   setInputWeather("");
  // };

  return (
    <div className="App">
      {/* <h1>{weatherTwo}</h1>
      <p>{weather}</p>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={inputWeather}
          onChange={changeInput}
        />
        <button>SEARCH LOCATION</button>
      </form> */}
      <h1 className="text-red-500">YOOOOOO</h1>
    </div>
  );
};

export default App;
