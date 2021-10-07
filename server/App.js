require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
const PORT = process.env.API_PORT || 5000;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
