import React from 'react';

const BookCard = ({ book, onAdd }) => {
  const { title, authors, imageLinks, description } = book;

  return (
    <div className="border rounded p-4 shadow-md">
      {imageLinks && <img src={imageLinks.thumbnail} alt={title} className="mb-2" />}
      <h2 className="font-bold">{title}</h2>
      {authors && <p>By: {authors.join(', ')}</p>}
      <p>{description}</p>
      <button onClick={() => onAdd(book)} className="bg-blue-500 text-white p-2 rounded mt-2">
        Add to Reading List
      </button>
    </div>
  );
};

export default BookCard;
