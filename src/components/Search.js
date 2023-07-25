import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearch } from "../searchSlice";

const Search = () => {
  const theme = useSelector((state) => state.theme);
  const search = useSelector((state) => state.search);
  const inputSearch = document.getElementById("search-input");
  const dispatch = useDispatch();
  function hangleSearch() {
    if (inputSearch) {
      dispatch(toggleSearch(inputSearch.value));
    } else {
      dispatch(toggleSearch(inputSearch.value));
    }
  }
  return (
    <div className="search-container">
      <img
        src={
          theme === "light"
            ? "./images/light/search-svgrepo-com.svg"
            : "./images/dark/search-svgrepo-com.svg"
        }
        alt="search"
        width={20}
      />
      <input
        onChange={hangleSearch}
        id="search-input"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
