import React from "react";
import { MdInsertEmoticon } from "react-icons/md";

function Left() {
  return (
    <div className="left">
      <div className="image">
        <img
          src="https://avatars.githubusercontent.com/u/100926600?v=4"
          alt=""
        />
        <div className="emoticonBox">
          <MdInsertEmoticon className="emoticon" />
        </div>
      </div>
      <div className="leftDetails">
        <h2>Durmuş Özgül</h2>
        <button>Edit profile</button>
      </div>
    </div>
  );
}

export default Left;
