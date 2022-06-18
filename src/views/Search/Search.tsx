import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Main } from "../../layout";
import { getSearchResult } from "../../shared/store/modules/search";

export const SearchPage: FunctionComponent = () => {
  const searchResult = useSelector(getSearchResult);
  console.log(searchResult);
  return <Main></Main>;
};
