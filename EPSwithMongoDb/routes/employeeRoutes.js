import express from 'express';
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getPayroll,
} from '../controllers/employeeController.js';

const router = express.Router();

router.get('/add', (req, res) => {
  res.render('form', { employee: null });
});

router.get('/', getAllEmployees);

router.post('/add', createEmployee);

router.get('/edit/:id', getEmployeeById);

router.post('/update/:id', updateEmployee);
router.post('/delete/:id', deleteEmployee);

router.get('/:id/payroll', getPayroll);

export default router;