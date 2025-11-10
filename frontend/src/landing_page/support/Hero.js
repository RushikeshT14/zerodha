function Hero() {
  return (
    <section className="container-fluid" id="SupportHero">
      <div className="p-5 " id="SupportWrapper">
        <h4>Support Portal</h4>
        <a href="#">Track Ticket</a>
      </div>

      <div className="row p-5 m-5">
        <div className="col-6 px-5">
          <h2 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input
            type="text"
            placeholder="Eg. how do i activate F&O, why is my order getting rejected."
          />{" "}
          <br />
          <a href="#">Track account opening</a>      <a href="#">track segment activation</a>   <a href="#">Intraday margins</a>      <a href="#">Kite user manual</a>
        </div>
        <div className="col-6 px-5">
          <h2 className="fs-3">Featured</h2>
          <ol>
            <li>
              <a href="#">Current tackover and Delisting - January 2025</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverage - MIS & Co.</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
