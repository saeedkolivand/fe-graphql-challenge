import React, { useEffect, useState } from "react";
import "./home.style.scss";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRIES, GET_COUNTRIES_BY_CODE } from "./home.api";
import { CountryDataModel } from "./home.types";
import Container from "../../components/container/Container";
import SearchBox from "../../components/searchBox/SearchBox";
import Table from "../../components/table/Table";

const Home = () => {
  const [countryCode, setCountryCode] = useState("");

  const [GetCountryByCode, { data, loading, error }] =
    useLazyQuery<CountryDataModel>(
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
    <Container
      className="absolute-center home"
      showLoading={loading}
      showErrorMessage={error?.message}
      errorRetryFunction={GetCountryByCode}
    >
      <div className="home__search flex-center">
        <SearchBox
          value={countryCode}
          onChange={onSearchCountryCode}
          searchPlaceholder="search country code..."
        />
      </div>

      {data?.countries && (
        <div className="home__countries">
          <Table
            tableHeader={["country name", "country code"]}
            tableData={data.countries}
          />
        </div>
      )}
    </Container>
  );
};

export default Home;
