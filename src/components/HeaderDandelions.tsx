import React from "react";
import dandelion_c from "../assets/c.png";
import dandelion_c20 from "../assets/cA.png";
import dandelion_c40 from "../assets/cB.png";
import dandelion_c60 from "../assets/cC.png";
import dandelion_c80 from "../assets/c80.png";

import degradeHeader from "../../public/assets/degrade header.png"

import "../styles/HeaderDandelions.css";

function HeaderDandelions() {
  return (
    <div>
              <img src={degradeHeader} className="degradeHeader" />
      <div className="linha1">
        <img className="dandelionBaseA" src={dandelion_c} />
        <img className="dandelionBaseB" src={dandelion_c} />
        <img className="dandelionBaseC" src={dandelion_c} />
        <img className="dandelionBaseD" src={dandelion_c} />
        <img className="dandelionBaseE" src={dandelion_c} />
        <img className="dandelionBaseF" src={dandelion_c} />
        <img className="dandelionBaseG" src={dandelion_c} />
        <img className="dandelionBaseH" src={dandelion_c} />
      </div>
     <div className="linha2">
        <img className="dandelionBaseA" src={dandelion_c20} />
        <img className="dandelionBaseB" src={dandelion_c20} />
        <img className="dandelionBaseC" src={dandelion_c20} />
        <img className="dandelionBaseD" src={dandelion_c20} />
        <img className="dandelionBaseE" src={dandelion_c20} />
        <img className="dandelionBaseF" src={dandelion_c20} />
        <img className="dandelionBaseG" src={dandelion_c20} />
        <img className="dandelionBaseH" src={dandelion_c20} />
      </div>
           <div className="linha3">
        <img className="dandelionBaseA" src={dandelion_c40} />
        <img className="dandelionBaseB" src={dandelion_c40} />
        <img className="dandelionBaseC" src={dandelion_c40} />
        <img className="dandelionBaseD" src={dandelion_c40} />
        <img className="dandelionBaseE" src={dandelion_c40} />
        <img className="dandelionBaseF" src={dandelion_c40} />
        <img className="dandelionBaseG" src={dandelion_c40} />
        <img className="dandelionBaseH" src={dandelion_c40} />
      </div>
            <div className="linha4">
          <img className="dandelionBaseA" src={dandelion_c60} />
          <img className="dandelionBaseB" src={dandelion_c60} />
          <img className="dandelionBaseC" src={dandelion_c60} />
          <img className="dandelionBaseD" src={dandelion_c60} />
          <img className="dandelionBaseE" src={dandelion_c60} />
          <img className="dandelionBaseF" src={dandelion_c60} />
          <img className="dandelionBaseG" src={dandelion_c60} />
          <img className="dandelionBaseH" src={dandelion_c60} />
    </div>
    </div>
  );
}

export default HeaderDandelions;
