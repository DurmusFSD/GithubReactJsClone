import React from "react";
import list from "../../lists.json";

function Overview() {
  return (
    <div className="overview">
      <div className="overviewDescription">
        <p>Durmuş Özgül / Readme.md</p>
        <h1>Hi I'm DurmusFSD , Durmuş Özgül</h1>
        <div className="line" />
        <h2>A React Developer</h2>
        <p>
          I love coding with Html, Css, JavaScript, React, Redux,Tailwind Css
          ond others
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="repositories">
        <div className="repositoriesTitle">
          <h2>Popular repositories</h2>
        </div>
        <div className="repositoriesContainer">
          {list.map((repo, i) => (
            <div className="repositoriesBox" key={i}>
              <div className="repositoriesTop">
                <h3>{repo.repo}</h3>
                <p>{repo.status}</p>
              </div>
              <div className="repositoriesBottom">
                <p>{repo.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
