let employees = [
  {
    id : 1,
    name: "Mayank",
    gender: "Male",
    department: "HR",
    basicSalary: 30000,
    joiningDate: "2026-02-19",
    profile: "/images/avatar1.png",
  }
];

export function getEmployees() {
  return employees;
}

export function setEmployees(newEmployees) {
  employees = newEmployees;
}
