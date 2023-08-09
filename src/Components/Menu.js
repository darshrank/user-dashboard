import React, { useEffect } from "react";
import "./Menu.css";
import logo from "../img/logo.png";
import {
  FaUser,
  FaReceipt,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
  FaBook
} from "react-icons/fa";

function Menu() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <img src={logo} alt="" />

      <ul id="mainMenu">
        <a href="/"><FaBook /></a>,
        <a href="/adduser"><FaUser /></a>
        <a href="/addtrade"><FaReceipt /></a>
      </ul>

      <ul className="lastMenu">
        <Icon icon={<FaUser />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
