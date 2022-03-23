import React, { useEffect, useState } from "react";
import "./home.style.scss";
import { useLazyQuery } from "@apollo/client";
import { Country } from "./home.types";
import Table from "../../components/table/Table";
import SearchBox from "../../components/searchBox/SearchBox";
import { GET_COUNTRIES, GET_COUNTRIES_BY_CODE } from "./home.api";
import Container from "../../components/container/Container";

const Home = () => {
  const [countryCode, setCountryCode] = useState("");

  const [GetCountryByCode, { data, loading, error }] = useLazyQuery(
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

  const generateTableBody = (data: Country[]) => {
    if (data)
      return data.map((item, index) => (
        <tr key={`index-${index}`}>
          <td>{item.name}</td>
          <td>{item.code}</td>
        </tr>
      ));
  };

  const onSearchCountryCode = (code: string) =>
    setCountryCode(code.toUpperCase());

  return (
    <Container className="absolute-center home" loading={loading}>
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
            tableHeader={["name", "code"]}
            tableBody={generateTableBody(data.countries)}
          />
        </div>
      )}
    </Container>
  );
};

export default Home;
