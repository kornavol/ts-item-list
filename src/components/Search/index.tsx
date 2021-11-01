import React, { FC } from "react";
import {
  Search as SearchComp,
  SearchIconWrapper,
  StyledInputBase,
} from "./style";
import SearchIcon from "@mui/icons-material/Search";

interface Iprops {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Search: FC<Iprops> = ({value, setValue }) => {

  return (
    <SearchComp>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search by product name"
        inputProps={{ "aria-label": "search" }}
        value={value}
        onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value)}
      />
    </SearchComp>
  );
};

export default Search;
