import React, { FC, useState } from "react";
import {
  Search as SearchComp,
  SearchIconWrapper,
  StyledInputBase,
} from "./style";
import SearchIcon from "@mui/icons-material/Search";

const Search: FC = () => {
  const [input, setInput] = useState<string>("");

  return (
    <SearchComp>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search by product name"
        inputProps={{ "aria-label": "search" }}
        onChange={(e: any) => setInput(e.target.value)}
      >
        {input}
      </StyledInputBase>
    </SearchComp>
  );
};

export default Search;
