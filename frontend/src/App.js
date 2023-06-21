import "./App.css";
import React, { useEffect, useState } from "react";
import CurvedText from "./component/curvedText";

function App() {
  const [piValue, setPiValue] = useState("");
  const sunDiameterInKM = 1392700;
  const errorMessage = "Server Down";

  useEffect(() => {
    fetch("http://localhost:8000/pi")
      .then((response) => response.json())
      .then((data) => setPiValue(data.pi))
      .catch((error) => {
        setPiValue(0);
      });
  }, []);

  const calculateCircumference = () => {
    if (piValue !== "") {
      const circumference = piValue * sunDiameterInKM;
      return circumference.toLocaleString();
    }
    return "Calculating...";
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="solar">
          <div className="sun">
            <div className="sun-diameter">
              {sunDiameterInKM.toLocaleString()} km
            </div>
            <CurvedText text={`${calculateCircumference()} km`} />
          </div>
          <div className="earth"></div>
        </div>
        {piValue === 0 ? (
          <h4>{errorMessage}</h4>
        ) : (
          <>
            <h4>Server's Pi Value: {piValue}</h4>
            <h4>The Sun's Diameter: {sunDiameterInKM.toLocaleString()} km</h4>
            <h4>The Sun's Circumference: {calculateCircumference()} km</h4>
          </>
        )}
        <a
          href="https://github.com/nicolecht/space-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Project Repo
        </a>
      </div>
    </div>
  );
}

export default App;
