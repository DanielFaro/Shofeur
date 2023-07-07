import "./App.css";
import { useEffect, useState, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import VehiclesList from "./Components/VehicleList";
import Nav from "./Components/Nav";
import Summary from "./Components/Summary";
import Events from "./Components/Events";
import Attractions from "./Components/Attractions";
import Footer from "./Components/Footer";

const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'radnika-next';
    background-color: red;
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offwhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.4);
    box-sizing: border-box;
    font-size: 62.5%; // sets default to 10px but this allows users to override in browser settings
  }

  *, *::before, *:after { // helps so when add padding or border, it takes away from size instead of grow 
    box-sizing: inherit; // this helps avoid some weird horizontal scroll issues
  }

  body {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  section {
    margin: 30px 0px;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .content-wrapper {
    height: 100%;
    width: 100%;
    padding: 50px 100px;
  }

  header {
    font-size: 3.5rem;
    font-weight: bold;
  }
`;

const App = () => {
  let [vehicles, setVehicles] = useState(null);
  const summaryRef = useRef(null);
  const eventsRef = useRef(null);
  const vehiclesListRef = useRef(null);
  const attractionsRef = useRef(null);

  const refList = {
    SUMMARY: summaryRef,
    EVENTS: eventsRef,
    VEHICLES: vehiclesListRef,
    ATTRACTIONS: attractionsRef,
  };

  const scrollToSection = (linkName) => {
    const elementRef = refList[linkName];
    if (elementRef === summaryRef) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: elementRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setVehicles(data.data));
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <Nav onClick={scrollToSection} />
      <div className="content-wrapper">
        <section title="Summary" content='"Summary'>
          <Summary />
        </section>
        <section title="Events" content="Events" ref={eventsRef}>
          <Events />
        </section>
        <section title="Rentals" ref={vehiclesListRef}>
          <VehiclesList vehicles={vehicles} />
        </section>
        <section title="Attractions" ref={attractionsRef}>
          <Attractions />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
