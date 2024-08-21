import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchWidgets } from "../features/widgets/widgetsSlice";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setUserInput(event.target.value);
    if (event.target.value === "") dispatch(searchWidgets(""));
  };
  return (
    <>
      <input
        value={userInput}
        onChange={(event) => {
          handleSearch(event);
        }}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(searchWidgets(userInput));
        }}
      >
        Search
      </button>
    </>
  );
};

export default Search;
