const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


const productRoutes = require('./routes/product.routes');
app.use('/api/product', productRoutes);
