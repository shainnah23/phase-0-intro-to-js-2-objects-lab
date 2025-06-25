// Employee object with name and streetAddress
const employee = {
  name: "Alice",
  streetAddress: "123 Main St"
};

// Non-destructive update: returns a new object with updated key/value
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// Destructive update: updates the original object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Non-destructive delete: returns a new object without the specified key
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Destructive delete: removes the key from the original object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}