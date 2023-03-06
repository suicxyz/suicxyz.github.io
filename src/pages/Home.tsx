import React from "react"

import { HomeOverlay } from "../components";
import { Header } from "../containers";

const Home: React.FC = () => {
  return (<>
    <HomeOverlay />
    <Header />
  </>);
}

export default Home;