import React, { useState, useEffect } from 'react';
import "./App.css"
import SearchBar from './SearchBar';
import countriesData from './countries.json'; 

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setCountries(countriesData);
    setFilteredCountries(countriesData);
  }, []);

  const handleSearch = (query) => {
    setQuery(query);
    const lowerQuery = query.toLowerCase();
    const filtered = countries.filter(country => 
      country.country.toLowerCase().includes(lowerQuery) || 
      country.capital.toLowerCase().includes(lowerQuery)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="container">
      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      {query && (
        <ul className={`results-list ${filteredCountries.length ? 'show' : ''}`}>
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <li key={index}>
                <strong>{country.country}</strong> - {country.capital}<br />
                Population: {country.population.toLocaleString()}<br />
                Official Language(s): {Array.isArray(country.official_language) ? country.official_language.join(', ') : country.official_language}<br />
                Currency: {country.currency}
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default App;
