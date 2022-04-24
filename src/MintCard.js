import React, { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
// import Tilt from "react-tilt";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../src/wallet/connectors";
import { isMobile } from "react-device-detect";
import monkey from "./Images/monkey.png";
import title from "./Images/ambtitle.png";
import title2 from "./Images/maymint.png";

const MintCard = () => {
  // const showAccount = document.querySelector('.showAccount');

  return (
    <div>
      {/* <Tilt
        className="Tilt"
        options={{
          max: 0,
          reverse: false, // reverse the tilt direction
          max: 15, // max tilt rotation (degrees)
          perspective: 3500, // Transform perspective, the lower the more extreme the tilt gets.
          scale: 1, // 2 = 200%, 1.5 = 150%, etc..
          speed: 300, // Speed of the enter/exit transition
          transition: true, // Set a transition on enter/exit.
          axis: null, // What axis should be disabled. Can be X or Y.
          reset: true, // If the tilt effect has to be reset on exit.
          easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
        }}
      > */}
      <Container>
        <Card
          style={{
            border: "none",
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundPosition: "50% 50%",
            maxWidth: "1440px",
            borderRadius: "0.75rem",
          }}
          className="margin1"
        >
          <Card.Body>
            <h2 className="text1">Register Offer</h2>
            <br />
            <form>
              <div class="row">
                <div class="col">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "auto",
                    }}
                  >
                    <p className="paragraph">Offer Code</p>{" "}
                    <input type="text" class="form-control inp" />
                  </div>
                </div>
                <div class="col">
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "auto",
                    }}
                  >
                    <p className="paragraph">Token 1</p>
                    <input type="text" class="form-control inp" />
                  </div>
                </div>
                <div class="col">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "auto",
                    }}
                  >
                    <p className="paragraph">Token 2</p>
                    <input type="text" class="form-control inp" />
                  </div>
                </div>
                <div class="col">
                  <button
                    className="btn-success d-flex "
                    style={{
                      borderRadius: "6px",
                      justifyContent: "center",
                      margin: "auto",
                      padding: " 4px 21px",
                    }}
                  >
                    Register{" "}
                  </button>
                </div>
              </div>
            </form>
            <br /> <hr />
            <br />
            <h2 className="text1">Accept Offer</h2>
            <br />
            <form>
              <div class="row">
                <div class="col-md-5 col">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "auto",
                    }}
                  >
                    <p className="paragraph">Offer Code</p>{" "}
                    <input type="text" class="form-control inp2" />
                  </div>
                </div>

                <div class="col-md-2 col">
                  <button
                    className="btn-success d-flex "
                    style={{ borderRadius: "6px", padding: " 4px 21px" }}
                  >
                    Submit{" "}
                  </button>
                </div>
              </div>
            </form>
          </Card.Body>
        </Card>
      </Container>
      {/* </Tilt> */}
    </div>
  );
};

export default MintCard;
