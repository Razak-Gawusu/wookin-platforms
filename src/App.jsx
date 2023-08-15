import { RouterProvider } from "react-router-dom";

import { AppRouter } from "./routes";
import { ChakraThemeProvider } from "./style";

function App() {
  return (
    <ChakraThemeProvider>
      <RouterProvider router={AppRouter}></RouterProvider>
    </ChakraThemeProvider>
  );
}

export default App;
