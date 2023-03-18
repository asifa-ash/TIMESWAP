import React from "react";
import "./NavTwo.css";

const NavTwo = () => {
  return (
    <div className="navtwo">
      <div className="left">
       
        <h2>TIMESWAP</h2>
        <button className="btn">BETA</button>
        <div className="btn-bar">
            <button className="bar-btn">Market</button>
            <h5>Lend</h5>
            <h5>Borrow</h5>
        </div>
      </div>
      <div className="midle"></div>
      <div className="right">
        <div className="right-bar">
        <button className="btn1">Ethereum</button>
        <button className="btn2">Install Metamask</button>
        <button className="btn3">Swap</button>
        <button className="btn4">...</button>

        </div>
      </div>
    </div>
  );
};

export default NavTwo;