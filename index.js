const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const shoewashRoutes = require('./src/routes/shoewashRoutes');
app.use(cors());
app.use(express.json());

app.use('/shoewash', shoewashRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
