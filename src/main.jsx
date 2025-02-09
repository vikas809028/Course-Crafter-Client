import "./index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App.jsx";
import store from "./Redux/store";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
