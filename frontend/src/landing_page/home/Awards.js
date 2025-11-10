import React from "react";

function Awards() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Commodity Derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6 ">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Secutities</p>
                </li>
              </ul>
            </div>
            <img
              src="media/images/pressLogos.png"
              alt="pressLogos.png"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
