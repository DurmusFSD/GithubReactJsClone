import React, { useState } from "react";
import img2 from "../img/img2.png";
import { FiBell, FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <nav className="navbar">
      {/* Sol */}
      <div className="navLeft">
        <Link to="/"><img src={img2} alt="" /></Link>
        <input type="text" placeholder="Search or jump to" />
      </div>
      {/* orta */}
      <div className="navCenter">
        <h2>Pulls</h2>
        <h2>Issues</h2>
        <h2>Marketplace</h2>
        <h2>Explore</h2>
      </div>
      {/* sag */}
      <div className="navRight">
        <FiBell size={15}/>
        <div className="navRightIcons">
            <FiPlus size={15}/>
            <IoMdArrowDropdown size={15}/>
        </div>
        <div className="navRightIcons" onClick={()=> setShowMenu(!showMenu)}>
            <img src="https://avatars.githubusercontent.com/u/100926600?v=4" alt="" />
            <IoMdArrowDropdown size={15}/>
        </div>
      </div>

      {showMenu && <Menu/>}
    </nav>
  );
}

export default Navbar;
