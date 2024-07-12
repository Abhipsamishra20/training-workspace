import { useState,useCallback } from 'react';
import countriesData from './countrystates.json';
import Country from './Country';
import httpClient from './httpClient';

export default function CountryDropdown() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setSelectedState('');
  }

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  }

  // const getProducts = useCallback(async ()=>{
  //   const response = await httpClient.get('http://localhost:4200/products')
  //   setSelectedCountry(response)
  //   },[])


  return (
    <div className='card'>
      <div className='card-header'>
        Choose a country:
      </div>
      <div className='card-body'>
        <select id="countries" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select</option>
          {countriesData.countries.map((countryName: Country) => (
            <option value={countryName.country}>{countryName.country}</option>
          ))}
        </select>

        {selectedCountry && (
          <div>
            {countriesData.countries.find((countryName: Country) =>
              countryName.country === selectedCountry)?.states.length === 0 && (
                <p>This country has no states</p>
              )}

            <div className='card-header'>
              Choose a state:
            </div>
            <select id="states" value={selectedState} onChange={handleStateChange}>
              <option value="">Select</option>
              {countriesData.countries.find((countryName: Country) =>
                countryName.country === selectedCountry)?.states.map((state: string) => (
                  <option value={state}>{state}</option>
                ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}


