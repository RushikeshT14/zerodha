function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <div className="col-8 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 text-center">Brokerage Calculator</h3>
          </a>
          <ul style={{lineHeight:"2.48", fontSize:"14px"}} className="text-muted">
            <li>
              Call &trade RMS auto-squareoff : Additional charges of Rs. 50 +
              GST per order.
            </li>
            <li>Digital contact notes will be sent vai e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              Rs. 20 per contract note. Courier charges apply.
            </li>
            <li>
              for NRI account(non-PIS), 0.5% or Rs. 100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or Rs. 200 per executed order for
              equity(whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged Rs. 40 per executed order insted of Rs. 20 per executed
              order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 text-center">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
