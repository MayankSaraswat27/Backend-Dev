import Employee from '../models/Employee.js';

function calculateSalary(basic) {
  const HRA = basic * 0.2;
  const DA = basic * 0.1;
  const PF = basic * 0.05;
  const netSalary = basic + HRA + DA - PF;

  return { basic, HRA, DA, PF, netSalary };
}

export const createEmployee = async (req, res) => {
  try {
    const { name, gender, department, basicSalary, joiningDate, profile } = req.body;

    if (!name || !gender || !department || !basicSalary || !joiningDate) {
      return res.status(400).json({ message: 'All fields required' });
    }

    await Employee.create({
      name,
      gender,
      department,
      basicSalary: Number(basicSalary),
      joiningDate,
      profile
    });

    res.redirect('/employee');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.render('list', { employees });
};

export const getEmployeeById = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);

    if (!emp) return res.status(404).json({ message: 'Not found' });

    res.render('form', { employee: emp });
  } catch {
    res.status(400).json({ message: 'Invalid ID' });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { name, gender, department, basicSalary, joiningDate, profile } = req.body;

    const updated = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        name,
        gender,
        department,
        basicSalary: Number(basicSalary),
        joiningDate,
        profile
      },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Not found' });

    res.redirect('/employee');
  } catch {
    res.status(400).json({ message: 'Invalid ID' });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const deleted = await Employee.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ message: 'Not found' });

    res.redirect('/employee');
  } catch {
    res.status(400).json({ message: 'Invalid ID' });
  }
};

export const getPayroll = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);

    if (!emp) return res.status(404).send('Employee not found');

    const salary = calculateSalary(emp.basicSalary);

    res.render('payroll', { emp, salary });
  } catch {
    res.status(400).send('Invalid ID');
  }
};