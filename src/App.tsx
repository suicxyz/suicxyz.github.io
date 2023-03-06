import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import AppRoutes from "./Router";


const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
