import React from "react";

export default function Main({
  img,
  country,
  location,
  from,
  to,
  description,
}) {
  console.log("country".split("").join(" ").toUpperCase());
  return (
    <main className="main">
      <img src={img} className="main--img" />
      <div className="main--text">
        <div className="main--map">
          <i className="fas fa-map-marker-alt icon"></i>
          <span className="country">{country}</span>
          <span className="google-map">View on Google Maps</span>
        </div>
        <h2 className="main--location">{location}</h2>
        <strong className="main--period">
          {from} - {to}
        </strong>
        <p className="main--desc">{description}</p>
      </div>
    </main>
  );
}
