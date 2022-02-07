const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://Yeswanth:SanjayKannanDB@comp3123.uod0v.mongodb.net/sample_restaurants?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 

app.use(restaurantRoutes);

app.listen(3000, () => { console.log('Server is running...') });