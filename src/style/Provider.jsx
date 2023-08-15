import { ChakraProvider } from "@chakra-ui/react";
import PropTypes from "prop-types";

import { theme } from "./theme";

export function ChakraThemeProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

ChakraThemeProvider.propTypes = {
  children: PropTypes.any,
};
