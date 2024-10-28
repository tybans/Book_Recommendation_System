const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);    // http://localhost:5000/auth/register        http://localhost:5000/auth/login
app.use('/books', bookRoutes);   // http://localhost:5000/books/recommendations/1    http://localhost:5000/books/search

sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
});
