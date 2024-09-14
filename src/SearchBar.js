import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div class="main-search-input-wrap">
       
     
        <div class="main-search-input fl-wrap">
            <div class="main-search-input-item">    
                <input 
                    type="text"
                    placeholder="Search for a Country or Capital"
                    value={query}
                    onChange={handleChange}
                    />
             </div>
                                        
        
        </div>
                                    

    </div>
    // <>
    // <div>
    // <h1>Search for a country or capital</h1>
    // <input
    //   type="text"
    //   placeholder="Search for a country or capital"
    //   value={query}
    //   onChange={handleChange}
    // />
    // </div>
    // </>
  );
};

export default SearchBar;


