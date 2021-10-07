require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/products', productRoutes);
app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
