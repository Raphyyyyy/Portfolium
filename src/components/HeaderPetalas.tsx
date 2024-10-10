import React from "react";
import petala from "../assets/petala dandelion.png";
import "../styles/HeaderPetalas.css";
import dust from "../assets/dust1.png";

function HeaderPetalas() {
  return (
    <div className="petalasDandelion">
      <img className="petala1" src={petala} />
      <img className="petala2" src={petala} />
      <img className="petala3" src={petala} />
      <img className="petala4" src={petala} />
      <img className="petala5" src={petala} />
      <img className="petala6" src={petala} />
      <img className="petala7" src={petala} />
      <img className="petala8" src={petala} />
      <img className="petala9" src={petala} />
      <img className="dust1" src={dust} />
      <img className="dust2" src={dust} />
      <img className="dust3" src={dust} />
      <img className="dust4" src={dust} />
    </div>
  );
}

export default HeaderPetalas;
