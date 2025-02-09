import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: localStorage.getItem("chakra-ui-color-mode") || "light",
    useSystemColorMode: false,
  },
});

export default theme;
