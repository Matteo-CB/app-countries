import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const CardContainer = () => {
  const data = useSelector((state) => state.data);
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.search);

  let filter1;
  let filter2;
  if (search !== "" && filter !== "all") {
    filter1 = true;
    filter2 = false;
  } else if (filter !== "all" && search === "") {
    filter1 = true;
    filter2 = false;
  } else if (filter === "all" && search !== "") {
    filter1 = false;
    filter2 = true;
  } else if (filter === "all" && search === "") {
    filter1 = false;
    filter2 = true;
  }
  return (
    <div className="card-container">
      {filter2 &&
        (search !== ""
          ? data
              .filter((e) => e.name.includes(search))
              .map((e, index) => {
                return <Card data={e} key={index} />;
              })
          : data.map((e, index) => {
              return <Card data={e} key={index} />;
            }))}
      {filter1 &&
        (filter !== "all"
          ? data
              .filter((e) => e.region.includes(filter))
              .filter((e) => e.name.e.name.includes(search))
              .map((e, index) => {
                return <Card data={e} key={index} />;
              })
          : data.map((e, index) => {
              return <Card data={e} key={index} />;
            }))}
    </div>
  );
};

export default CardContainer;
