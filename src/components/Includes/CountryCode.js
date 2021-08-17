import React  from "react";
import Select from 'react-select'
import {allCountryCode} from "./AllCountryCodeArray";

const CoutryCode = ({selectedCountry, setCountry}) => {

    return (
        <>
            <Select  options={allCountryCode}  defaultValue={selectedCountry} id="country_code" onChange={(e) => setCountry(e) } />
        </>
    )
}

export default CoutryCode;