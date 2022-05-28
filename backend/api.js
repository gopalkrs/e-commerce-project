const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const productRoutes = require('./routes/productRoutes');
const usersRoutes = require('./routes/usersRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes');
const cartRoutes = require('./routes/cartRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const filterRoutes = require('./routes/filterRoutes');




dotenv.config();
const URI = process.env.DB_URI.replace('DB_USER', process.env.DB_USER).replace('DB_PASSWORD',process.env.DB_PASSWORD).replace('DB_NAME',process.env.DB_NAME);
mongoose.connect(URI, {
    useNewUrlParser : true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to mongo.")
}).catch((err)=>{
    console.log("Error Connecting mongo..", err.message)
});


router.use("/auth", usersRoutes);
router.use("/products", productRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/mycart", cartRoutes);
router.use("/payments", paymentRoutes);
router.use("/filters", filterRoutes);


module.exports = router;