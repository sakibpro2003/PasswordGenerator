import { useState } from "react";
import "./App.css";

function App() {
  const [sliderValue, setSliderValue] = useState(8);
  const [generatedPassword, setGeneratedPassword] = useState(
    "Password appears here"
  );

  let strength = "";
  if (sliderValue <= 8) {
    strength = "Low";
    console.log(strength, "from low");
  }
  if (sliderValue > 8 && sliderValue <= 12) {
    strength = "Medium";
  }
  if (sliderValue > 12) {
    strength = "High";
  }
  const handleSlider = (event) => {
    setSliderValue(event.target.value);
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

    const res = makeid(sliderValue - 1);
    setGeneratedPassword(res);
  };
  return (
    <div className="mx-auto w-5/6 mt-4 lg:w-1/2 border-2 flex flex-col items-center">
      <h1 className="mb-4 text-3xl font-bold text-center">
        Password Generator
      </h1>

      <h1 className="text-center border-2 w-2/3 p-2 h-12">
        {generatedPassword}
      </h1>
      <div className="w-2/3">
        <input
          onChange={handleSlider}
          type="range"
          value={sliderValue}
          min={5}
          max={17}
          className="range range-sucess"
        />
        <p>length: {sliderValue - 1}</p>
        <p>
          Strength:{" "}
          <span
            className={ `font-bold $
              ${strength === "Medium" ? "text-yellow-600" : "text-red-600"}
              ${strength === "High" ? "text-green-600" : "text-red-600"}`}
          >
            {strength}
          </span>
        </p>
      </div>
      <button onClick={handleGenPassword} className="btn ">
        Generate Password
      </button>
    </div>
  );
}

export default App;
