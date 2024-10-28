import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const Recommendations = ({ userId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    api.get(`/recommendations/${userId}`)
      .then((res) => setRecommendations(res.data))
      .catch((err) => console.error(err));
  }, [userId]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
      {recommendations.map((book) => (
        <div key={book.id} className="border-b p-2">
          <h3>{book.title}</h3>
          <p>{book.authors.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
