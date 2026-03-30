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
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);
router.get('/:id/payroll', getPayroll);

export default router;
