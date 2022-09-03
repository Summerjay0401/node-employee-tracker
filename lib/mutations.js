const pool = require('./db');

const createDepartment = async (department) => {

    const { name } = department;

    await pool.query(
      'INSERT INTO Department SET ?',
      { name }
    );
    
}

const createEmployee = async (employee) => {

    const { first_name, last_name, role_id, manager_id } = employee;

    await pool.query(
      'INSERT INTO Employee SET ?',
      { first_name, last_name, role_id, manager_id }
    );

}

const createRole = async (role) => {

    const { title, salary, department_id } = role;

    await pool.query(
      'INSERT INTO Role SET ?',
      { title, salary, department_id }
    );

}

const updateEmployeeRole = async (employee) => {

    const { id, role_id } = employee;
    
    await pool.query(
      `UPDATE employee SET role_id = ${role_id} WHERE id = ${id}`
    );

}

const updateEmployeeManager = async (employee) => {

  const { id, manager_id } = employee;
  
  await pool.query(
    `UPDATE employee SET manager_id = ${manager_id} WHERE id = ${id}`
  );

}

const deleteDepartment = async (id) => {

    // unset all roles that has reference to that department
    await pool.query(
      `UPDATE Role SET department_id = null WHERE department_id = ${id}`
    );

  await pool.query(
    `DELETE FROM department WHERE id = ${id}`
  );

}

const deleteEmployee = async (id) => {

  await pool.query(
    `DELETE FROM employee WHERE id = ${id}`
  );

}

const deleteRole = async (id) => {

  // unset all employees that has reference to that role
  await pool.query(
    `UPDATE Employee SET role_id = null WHERE role_id = ${id}`
  );

  await pool.query(
    `DELETE FROM role WHERE id = ${id}`
  );

}

module.exports = {
    createDepartment,
    createEmployee,
    createRole,
    deleteDepartment,
    deleteEmployee,
    deleteRole,
    updateEmployeeManager,
    updateEmployeeRole
}
