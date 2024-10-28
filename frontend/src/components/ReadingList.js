import React from 'react';

const ReadingList = ({ readingList, onRemove }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Reading List</h2>
      {readingList.map((book) => (
        <div key={book.id} className="border-b p-2">
          <h3>{book.title}</h3>
          <button 
            className="text-red-500"
            onClick={() => onRemove(book.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReadingList;
