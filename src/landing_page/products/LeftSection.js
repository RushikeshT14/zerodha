function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
            <a href={learnMore} className="mx-5" style={{textDecoration:"none"}}>Learn More</a>
          </div>
          <div className="mt-3 ">
            <a style={{textDecoration:"none"}}  href={googlePlay}>
              <img src="/media/images/googlePlayBadge.svg" />
            </a>
            <a style={{textDecoration:"none"}} className="mx-3" href={appStore}>
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
