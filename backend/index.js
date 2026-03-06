const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./db/index');

const professionalRoutes = require('./routes/professionalRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/professional', professionalRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
