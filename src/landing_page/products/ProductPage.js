import Hero from "./Hero.js";
import LeftSection from "./LeftSection.js";
import RightSection from "./RightSection.js";
import Universe from "./Universe.js";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship  tradinng platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="the central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visulisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct funds online, commission-free, delivered directly to your Demate account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center my-5">Want to know more about our technology ? Check out Zerodha.tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
