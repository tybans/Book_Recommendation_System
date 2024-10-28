const axios = require('axios');

// Function to search for books using Google Books API
exports.searchBooks = async (req, res) => {
  const { query } = req.query;

  // Check if the query is provided
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {

    // console.log(`Requesting books for query: ${query}`);

    
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: { q: query }, // Use params to automatically encode the query
    });


    console.log('Response from Google Books API:', response.data);

    // Check if items were found and return them
    if (response.data.items && response.data.items.length > 0) {
      res.status(200).json(response.data.items);
    } else {
      res.status(404).json({ message: 'No books found for the given query' });
    }
  } catch (error) {
    console.error('Error fetching books:', error.response ? error.response.data : error.message); // Log the error for debugging
    res.status(500).json({ error: 'Book search failed', details: error.message });
  }
};

// Function to get book recommendations (placeholder)
exports.getRecommendations = async (req, res) => {
  const userId = req.params.userId;

  // Placeholder logic for recommendations
  try {
    // This is a placeholder. You can implement your recommendation logic here.
    const recommendations = []; // Example: Fetch from a database or generate based on userId

    // Simulating fetching recommendations
    if (recommendations.length > 0) {
      res.status(200).json(recommendations);
    } else {
      res.status(404).json({ message: 'No recommendations found for this user' });
    }
  } catch (error) {
    console.error('Error fetching recommendations:', error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to fetch recommendations', details: error.message });
  }
};
