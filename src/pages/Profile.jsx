import React from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { TbBook, TbBook2 } from "react-icons/tb";
import { FiBox, FiStar } from "react-icons/fi";
import Left from "../components/profile/Left";
import Overview from "../components/profile/Overview";

function Profile() {
  return (
    <div className="profile">
      <nav>
        <div className="profileIcon">
          <TbBook size={18}/>
          <h2>Overview</h2>
        </div>
        <div className="profileIcon">
          <TbBook2 size={18}/>
          <h2>Repositories</h2>
        </div>
        <div className="profileIcon">
          <AiOutlineInbox size={18}/>
          <h2>Projects</h2>
        </div>
        <div className="profileIcon">
          <FiBox size={18}/>
          <h2>Packages</h2>
        </div>
        <div className="profileIcon">
          <FiStar size={18}/>
          <h2>Stars</h2>
        </div>
      </nav>

      <div className="lineFour" />

      <div className="sectionCenter">
        <Left />
        <Overview />
      </div>
    </div>
  );
}

export default Profile;
