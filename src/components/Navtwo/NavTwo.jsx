import React, { useEffect, useRef, useState } from "react";
import "./NavTwo.css";
import { Image, useMantineTheme, Center, Modal } from "@mantine/core";
// import {} from '@radixdlt/radix-dapp-toolkit'
import "@radixdlt/connect-button";






const NavTwo = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const theme = useMantineTheme();
  const modelStyle = {
    background: "#FBBF24",
  };
  const handleModel = () => {
    setModalOpened(true);
  };
   
  // const radixConnectButton = document.querySelector("radix-connect-button");

  const refI = useRef();
  const handleConnect = () => {
    refI.current.loading = true;
    refI.current.connecting = true;
  };
  useEffect(() => {
    if (refI.current) {
      console.log(refI);

      refI.current.addEventListener("onConnect", handleConnect);
    }
  }, [refI]);

  return (
    <div className="navtwo">
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        title="choose your choice"
        overlayOpacity={0.55}
        overlayBlur={3}
        size="30%"
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        style={modelStyle}
      >
        <p className="p">Swap</p>
        <div className="model">
          <button className="btnn1"></button>
          <button className="btnn1"></button>
          <button className="btnn2">Swap</button>
        </div>
      </Modal>
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
          <radix-connect-button ref={refI} />

       
          <button className="btn3" onClick={handleModel}>
            Swap
          </button>
          <button className="btn4">...</button>
        </div>
      </div>
    </div>
  );
};

export default NavTwo;
