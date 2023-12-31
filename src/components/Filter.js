import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../filterSlice";

const Filter = () => {
    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    function hangleFilter(value){
        dispatch(toggleFilter(value))
    }
  return (
    <select onChange={(e) => hangleFilter(e.target.value)}>
      <option disabled selected hidden>
        Filter by region
      </option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filter;
