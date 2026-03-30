import express from 'express';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

import methodOverride from 'method-override';

app.use(methodOverride('_method'));

app.use('/employee', employeeRoutes);

app.listen(3000, () =>
  console.log('Server running on http://localhost:3000/employee')
);
