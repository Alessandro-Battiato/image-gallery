import React, { useState, useContext } from "react";
import SearchInput from "../atoms/SearchInput";
import Button from "../atoms/Button";
import { QueryContext } from "../../App";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const query = useContext(QueryContext);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    query(value);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-2"
    >
      <SearchInput
        onClick={handleClear}
        value={value}
        onChange={handleChange}
      />
      <Button />
    </form>
  );
};

export default SearchForm;
