import React from "react"

import { HomeOverlay } from "../components";
import { Navbar, Main } from "../containers";

const Home: React.FC = () => {
  return (<>
    <HomeOverlay />
    <Navbar />
    <Main />
  </>);
}

export default Home;