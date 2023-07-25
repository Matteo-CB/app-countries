import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import FormFilter from "../components/FormFilter";
import CardContainer from "../components/CardContainer";
import Details from "./Details";

const Home = () => {
  const theme = useSelector((state) => state.theme);
  const isDetails = useSelector((state) => state.isDetails);
  return (
    <div className={`${theme}`}>
      <Header />
      {!isDetails ? (
        <div className="app">
          <FormFilter />
          <CardContainer />
        </div>
      ) : (
        <div className="app">
          <Details />
        </div>
      )}
    </div>
  );
};

export default Home;
