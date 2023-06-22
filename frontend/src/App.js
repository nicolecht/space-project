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
      return formatToKM(circumference)
    }
    return "Calculating...";
  };

  const formatToKM = (value) => {
    return value.toLocaleString() + " km";
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="solar">
          <div className="sun">
            <div className="sun-diameter">{formatToKM(sunDiameterInKM)}</div>
            <CurvedText text={`${calculateCircumference()}`} />
          </div>
          <div className="earth"></div>
        </div>
        {piValue === 0 ? (
          <h4>{errorMessage}</h4>
        ) : (
          <>
            <h4>Server's Pi Value: {piValue}</h4>
            <h4>The Sun's Diameter: {formatToKM(sunDiameterInKM)}</h4>
            <h4>The Sun's Circumference: {calculateCircumference()}</h4>
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
