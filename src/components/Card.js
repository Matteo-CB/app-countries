import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDetailsData } from "../detailsDataSlice";
import { toggleIsDetails } from "../isDetailsSlice";

const Card = ({ data }) => {
  const isDetails = useSelector((state) => state.isDetails);
  const detailsData = useSelector((state) => state.detailsData);
  const dispatch = useDispatch();
  function hangleDetails() {
    dispatch(toggleDetailsData(data));
    dispatch(toggleIsDetails());
  }
  return (
    <div className="card" onClick={hangleDetails}>
      <div
        className="flag-img"
        style={{ background: `url(${data.flag}) no-repeat center/cover ` }}
      ></div>
      <div className="card-content">
        <h2>{data.name}</h2>
        <p>
          <strong>Population:</strong> {data.population}
        </p>
        <p>
          <strong>Region:</strong> {data.region}
        </p>
        <p>
          <strong>Capital:</strong> {data.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
