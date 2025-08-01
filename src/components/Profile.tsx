import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileBox from "./ProfileBox";
import "../styles/Profile.css";
import { motion } from "framer-motion";
import BackgroundText from "./BackgroundText";

function Profile() {
  return (
    <div
      className="divPai"

    >
    <div className="profile-pai" id="profile">
      <BackgroundText texto="SOBREMIM"/>
      {/* <div className="sobreMim">
        <h1>SOBRE MIM</h1>
      </div> */}
      <div className="ProfileDiv">
        <ProfileBox />
      </div>
    </div>
    </div>
  );
}

export default Profile;
