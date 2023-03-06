import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HomePage from "./pages/Homepage";

const AppRoutes: React.FC = () => {
  return (<Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  </Router>);
}

export default AppRoutes;