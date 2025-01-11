import "./index.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import store from "./Redux/store";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Provider store={store}>
      <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
    </ChakraProvider>
);
