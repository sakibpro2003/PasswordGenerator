import { useState } from "react";
import "./App.css";

function App() {
  const [sliderValue, setSliderValue] = useState(8);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleSlider = (event) => {
    setSliderValue(event.target.value);
    console.log(sliderValue, "sliderval");
  };

  const handleGenPassword = () => {
    function makeid(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+,./?<>:;]}[{~";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    }

    const res = (makeid(sliderValue - 1));
    setGeneratedPassword(res)
  };
  return (
    <div className="mx-auto mt-4 w-1/2 border-2 ">
      <h1 className="text-3xl font-bold text-center">Password Generator</h1>
      <input
        onChange={handleSlider}
        type="range"
        value={sliderValue}
        min={5}
        max={17}
        className="range range-warning"
      />
      <h2>Generated Password: {generatedPassword}</h2>
      <button onClick={handleGenPassword} className="btn">
        Generate Password
      </button>
    </div>
  );
}

export default App;
