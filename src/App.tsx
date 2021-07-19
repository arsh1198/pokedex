import React, { useEffect } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import useStore from "./Store";

const queryClient = new QueryClient();

function App() {
  const setDarkMode = useStore((state) => state.setDarkMode);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    isDarkMode === "1" ? setDarkMode(true) : setDarkMode(false);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <div className="App">
          <Header />
          <Main />
        </div>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
