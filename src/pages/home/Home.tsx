import React, { useEffect, useState } from "react";
import "./home.style.scss";
import { useLazyQuery } from "@apollo/client";
import Table from "components/table/Table";
import SearchBox from "components/searchBox/SearchBox";
import Container from "components/container/Container";
import { GET_COUNTRIES, GET_COUNTRIES_BY_CODE } from "./home.api";
import { CountryData } from "./home.types";

const Home = () => {
  const [countryCode, setCountryCode] = useState("");

  const [GetCountryByCode, { data, loading, error }] =
    useLazyQuery<CountryData>(
      countryCode ? GET_COUNTRIES_BY_CODE : GET_COUNTRIES,
      {
        variables: {
          code: countryCode,
        },
      }
    );

  useEffect(() => {
    if (!countryCode) GetCountryByCode();
  }, [countryCode]);

  const onSearchCountryCode = (code: string) =>
    setCountryCode(code.toUpperCase());

  return (
    <Container className="absolute-center home" showLoading={loading}>
      <div className="home__search flex-center">
        <SearchBox
          value={countryCode}
          onChange={onSearchCountryCode}
          searchPlaceholder="search country code..."
        />
      </div>

      {data?.countries && (
        <div className="home__countries">
          <Table tableHeader={["name", "code"]} tableData={data.countries} />
        </div>
      )}
    </Container>
  );
};

export default Home;
