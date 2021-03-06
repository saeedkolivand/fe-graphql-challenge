import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { SearchBoxPropsTypes } from "./searchBox.types";
import "./searchBox.style.scss";
import ClearIcon from "../../assets/images/cross.svg";

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
    <div
      className={`search-box flex-center ${wrapperClassName}`}
      aria-label="search-box-wrapper"
    >
      <input
        type="text"
        maxLength={2}
        value={userQuery}
        placeholder={searchPlaceholder}
        onChange={onSearch}
        className="search-box__input"
        aria-label="search-box__input"
        name="search-box__input"
      />
      {value && (
        <button
          type="button"
          onClick={clearInput}
          className="search-box__clear"
        >
          <img
            src={ClearIcon}
            alt="clear-icon"
            className="search-box__clear--icon"
          />
        </button>
      )}
    </div>
  );
};

export default SearchBox;
