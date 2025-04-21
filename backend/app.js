const express = require("express");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require("./routes/productRoutes");
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();              // Load environment variables

connectDB();                  // Connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
