function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{ width: "30%" }} src="media\images\streakLogo.png" />
          <p className="text-small text-muted">Algo and Stategy Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 my-5">
          <img
            style={{ width: "40%" }}
            src="media/images/zerodhaFundhouse.png"
          />
          <p className="text-small text-muted">Asset managment</p>
        </div>
        <div className="col-4 p-3 my-5">
          <img src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{ width: "30%" }} src="media/images/dittoLogo.png" />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "23%", margin: "0 auto" }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
