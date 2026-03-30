import { getEmployees, setEmployees } from '../data/data.js';

function calculateSalary(basic) {
  const HRA = basic * 0.2;
  const DA = basic * 0.1;
  const PF = basic * 0.05;
  const netSalary = basic + HRA + DA - PF;

  return { basic, HRA, DA, PF, netSalary };
}

export const createEmployee = (req, res) => {
  const { name, gender, department, basicSalary, joiningDate ,profile} = req.body;

  if (!name || !gender || !department || !basicSalary || !joiningDate ) {
    return res.status(400).json({ message: 'All fields required' });
  }

  const employees = getEmployees();

  const newId = employees.length > 0
    ? employees[employees.length - 1].id + 1
    : 1;

  const newEmployee = {
    id: newId,
    name,
    gender,
    department,
    basicSalary: Number(basicSalary),
    joiningDate,
    profile,
  };

  employees.push(newEmployee);
  setEmployees(employees);

  res.redirect('/employee');
};

export const getAllEmployees = (req, res) => {
  res.render('list', { employees: getEmployees() });
};

export const getEmployeeById = (req, res) => {
  const emp = getEmployees().find(e => e.id == req.params.id);

  if (!emp) return res.status(404).json({ message: 'Not found' });

  res.render('form', { employee: emp });
};

export const updateEmployee = (req, res) => {
  const employees = getEmployees();
  const index = employees.findIndex(e => e.id == req.params.id);

  if (index === -1) return res.status(404).json({ message: 'Not found' });

  const { name, gender, department, basicSalary, joiningDate ,profile} = req.body;

  employees[index] = {
    ...employees[index],
    name,
    gender,
    department,
    basicSalary: Number(basicSalary),
    joiningDate,
    profile,
  };

  setEmployees(employees);
  
  res.redirect('/employee');
};

export const deleteEmployee = (req, res) => {
  const employees = getEmployees();
  const filtered = employees.filter(e => e.id != req.params.id);

  if (filtered.length === employees.length)
    return res.status(404).json({message: 'Not found'});

  setEmployees(filtered);
  res.redirect('/employee');
};

export const getPayroll = (req, res) => {
  const emp = getEmployees().find(e => e.id == req.params.id);

  if (!emp) return res.status(404).send('Employee not found');

  const salary = calculateSalary(emp.basicSalary);

  res.render('payroll', { emp, salary });
};
