import React from "react";
import SearchInput from "../atoms/SearchInput";
import Button from "../atoms/Button";

const SearchForm = () => {
  return (
    <form className="home__search-form flex items-center justify-between gap-2">
      <SearchInput />
      <Button />
    </form>
  );
};

export default SearchForm;
