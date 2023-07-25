import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDetailsData } from "../detailsDataSlice";
import { toggleIsDetails } from "../isDetailsSlice";

const Back = () => {
  const isDetails = useSelector((state) => state.isDetails);
  const detailsData = useSelector((state) => state.detailsData);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  function hangleDetails() {
    dispatch(toggleIsDetails());
  }
  return (
    <div className="back" onClick={hangleDetails}>
      <p>
        <img
          src={
            theme === "dark"
              ? "./images/light/arrow-left-svgrepo-com.svg"
              : "./images/dark/arrow-left-svgrepo-com.svg"
          }
          width={25}
          alt="arrow back"
        />{" "}
        Back
      </p>
    </div>
  );
};

export default Back;
