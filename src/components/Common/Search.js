import React, { useState } from "react";
import { searchPerfiles } from "../lib/api";
import { lupa } from "./Icons";

export const Search = ({
  setHideFilter,
  setSearched,
  setPerfiles,
  className,
}) => {
  const [valueSearch, setValueSearch] = useState("");

  const onChange = (e) => {
    setHideFilter(true);

    if (e.target.value === "") {
      setHideFilter(false);
    }

    const search = e.target.value;
    setValueSearch(search);
  };

  const search = (e) => {
    e.preventDefault();
    setPerfiles([]);

    setTimeout(() => {
      if (valueSearch === "") {
        setSearched([]);
      } else {
        searchPerfiles(valueSearch).then((data) => setSearched(data.data));
      }
    }, 500);
  };

  return (
    <div className={`search ${className}`}>
      <form onSubmit={search} className="flex">
        <div className="flex search_container">
          <input
            type="text"
            name="search"
            id=""
            onChange={onChange}
            placeholder="Por nombre"
            />
            <button>{lupa}</button>
        </div>
      </form>
    </div>
  );
};
