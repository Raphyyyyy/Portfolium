import React from "react";
import "../styles/Header.css";
import HeaderDandelions from "./HeaderDandelions";
import HeaderPetalas from "./HeaderPetalas";


function FundoDandelion() {
  return (
    <>
    <div className="header-pai">
      <HeaderDandelions />      
      {/* <HeaderPetalas /> */}
    </div>
    {/* <HeaderPetalas /> */}

      </>
  );
}

export default FundoDandelion;
