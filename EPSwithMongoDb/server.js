import express from 'express';
import employeeRoutes from './routes/employeeRoutes.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/employee', employeeRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/employee`)
);