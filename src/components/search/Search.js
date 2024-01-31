import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const LoadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => { 
        return {
          options: response?.data?.map((city) => {
            return {
              value: `${city?.latitude} ${city?.longitude}`,
              label: `${city?.name}, ${city?.countryCode}`,
            };
          }),
        };
      }).catch((err)=>console.log(err.message));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={700}
      value={search}
      onChange={handleOnChange}
      loadOptions={LoadOptions}
    />
  );
};

export default Search;