import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import travel from "./travel";
import More from "./Components/More";

function App() {
  const locations = travel.map((spot) => {
    return (
      <Main
        key={spot.id}
        img={spot.img}
        country={spot.country}
        location={spot.location}
        from={spot.from}
        to={spot.to}
        description={spot.description}
      />
    );
  });
  return (
    <div className="container">
      <Header />
      <div className="cards">{locations}</div>
      <More />
    </div>
  );
}

export default App;
