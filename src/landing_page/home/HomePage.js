import Hero from "./Hero.js";
import Awards from "./Awards.js";
import Pricing from "./Pricing.js";
import Stats from "./Stats.js";
import Education from "./Education.js";
import OpenAccount from '../OpenAccount.js';
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

function HomePage() {
    return (
        <>
            <Navbar/>
            <Hero />
            <Awards />
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            <Footer/>
        </>
    );
}

export default HomePage;