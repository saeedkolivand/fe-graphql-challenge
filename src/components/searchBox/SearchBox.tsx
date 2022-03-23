import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { SearchBoxPropsTypes } from "./searchBox.types";
import "./searchBox.styles.scss";
import ClearIcon from "./cross.svg";

const SearchBox: React.FC<SearchBoxPropsTypes> = (props) => {
  const {
    value,
    onChange,
    searchPlaceholder = "",
    wrapperClassName = "",
  } = props;

  const [userQuery, setUserQuery] = useState(value);

  const updateQuery = () => onChange(userQuery);

  const delayedQuery = useCallback(debounce(updateQuery, 500), [userQuery]);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) =>
    setUserQuery(event.target.value);

  useEffect(() => {
    delayedQuery();

    return delayedQuery.cancel;
  }, [userQuery, delayedQuery]);

  const clearInput = () => {
    setUserQuery("");
    onChange("");
  };

  return (
    <div className={`search-box flex-center ${wrapperClassName}`}>
      <input
        type="text"
        maxLength={2}
        value={userQuery}
        placeholder={searchPlaceholder}
        onChange={onSearch}
        className="search-box__input"
      />
      {value && (
        <div onClick={clearInput} className="search-box__clear">
          <img
            src={ClearIcon}
            alt="clear-icon"
            className="search-box__clear--icon"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
