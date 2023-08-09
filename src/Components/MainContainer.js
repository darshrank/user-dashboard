import React from "react";
import "./MainContainer.css";
import Banner from "../img/1.jpg";
import CardMain from "./CardMain";
import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";
import Card5 from "../img/card5.jpg";
import Card6 from "../img/card6.jpg";
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottomCard from "./MainRightBottomCard";

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <a href="/" >John Doe</a>
            <h2>Team X</h2>
          </div>
        </div>

        <div className="cards">

          <main>
            <CardMain title={"Agency"} />
            <CardMain title={"Savings"} />
            <CardMain title={"Treasury"} />
            <CardMain title={"Municipal"} />
            <CardMain title={"Corporate"} />
          </main>
        </div>
      </div>
      {/* <div className="right">
        <MainRightTopCard />
        <MainRightBottomCard />
      </div> */}
    </div>
  );
}

export default MainContainer;
