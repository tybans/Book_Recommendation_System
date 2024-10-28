import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import ReadingList from "../components/ReadingList";
import Recommendations from "../components/Recommendations";
import api from "../utils/api";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to handle book search
  const handleSearch = async (query) => {
    try {
      const res = await api.get(`/books/search`, {
        params: { query }, // Send the query as a parameter
      });
      setBooks(res.data || []); // Set books state or an empty array if no data
    } catch (err) {
      console.error(err);
    }
  };

  const addToReadingList = (book) => {
    // Prevent duplicates in the reading list
    if (!readingList.some((b) => b.id === book.id)) {
      setReadingList([...readingList, book]);
    }
  };

  const removeFromReadingList = (id) => {
    setReadingList(readingList.filter((book) => book.id !== id));
  };

  // Handle logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    navigate("/");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}  
          className="bg-red-400 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Log Out
        </button>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.id} book={book} onAdd={addToReadingList} />
          ))
        ) : (
          <p className="col-span-3 text-center">Search for Books</p>
        )}
      </div>
      <ReadingList readingList={readingList} onRemove={removeFromReadingList} />
      <Recommendations userId={1} />
    </div>
  );
};

export default Dashboard;
