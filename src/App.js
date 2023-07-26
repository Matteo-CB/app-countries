import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Legal from "./pages/Legal";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
