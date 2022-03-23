import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { SearchBoxPropsTypes } from "./searchBox.types";

const SearchBox: React.FC<SearchBoxPropsTypes> = (props) => {
  const { value, onChange, searchPlaceholder = "" } = props;

  const [userQuery, setUserQuery] = useState(value);

  const updateQuery = () => onChange(userQuery);

  const delayedQuery = useCallback(debounce(updateQuery, 500), [userQuery]);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) =>
    setUserQuery(event.target.value);

  useEffect(() => {
    delayedQuery();

    return delayedQuery.cancel;
  }, [userQuery, delayedQuery]);

  return (
    <input
      type="text"
      value={userQuery}
      placeholder={searchPlaceholder}
      onChange={onSearch}
    />
  );
};

export default SearchBox;
