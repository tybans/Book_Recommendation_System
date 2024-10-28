import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); // Call the onSearch prop with the query
      setQuery(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow p-2 border rounded"
        placeholder="Search for books..."
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
