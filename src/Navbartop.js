import React from "react";
import { Navbar, Container, NavDropdown, NavItem, Nav } from "react-bootstrap";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../src/wallet/connectors";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

const Navbartop = () => {
  let web3 = new Web3(window?.web3?.currentProvider);
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    //console.log(web3, "web 3 console")
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
    );
  }
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  async function connect() {
    try {
      if (!window?.web3?.currentProvider) {
        alert(`Metamask is not installed.
          Try Different browser or Install Metamask.`);
        return;
      }
      await activate(injected);

      //   if (id !== parseInt(chainId)) {
      //     alert("Please change your network to Mainnet");
      //     return false;
      //   }

      const accounts = await web3.eth.getAccounts();
      //   if (isMetamask) {
      //   }
      // setMessage("successful");

      return "success";
    } catch (err) {
      alert(JSON.stringify(err.message));
      return "failed";
    }
  }
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed-top
        className="navbarColor"
      >
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src={logo} style={{ width: "12rem" }} /> */}
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

          <Nav className="m-auto ">
            <Nav.Link href="#features" id="ma">
              {/* <img src={title} className="test" /> */}
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="NavbarText" style={{ color: "yellow" }} id="i">
              {!isMobile ? (
                window.ethereum ? (
                  !active ? (
                    <button
                      variant=""
                      className="solbutton mx-auto enableEthereumButton"
                      onClick={connect}
                    >
                      Connect Wallet
                    </button>
                  ) : (
                    <button variant="" className="solbutton mx-auto">
                      Connected
                    </button>
                  )
                ) : (
                  <button variant="" className="solbutton mx-auto">
                    Please Install metamask
                  </button>
                )
              ) : window.ethereum ? (
                !active ? (
                  <button
                    variant=""
                    className="solbutton mx-auto enableEthereumButton"
                    onClick={connect}
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <button variant="" className="solbutton mx-auto">
                    Connected
                  </button>
                )
              ) : (
                <a className="solbutton" href="">
                  <button
                    variant=""
                    className="solbutton mx-auto enableEthereumButton"
                    onClick={connect}
                  >
                    Connect Wallet
                  </button>
                </a>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbartop;
