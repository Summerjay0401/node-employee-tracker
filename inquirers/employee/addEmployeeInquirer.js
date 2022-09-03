const {
    getAllEmployees,
    getAllRoles
} = require('../../lib/queries')

module.exports = [
    {
        type: "input",
        message: "What is the employee's first name?",
        name: "first_name"
    }, 
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "last_name"
    }, 
    {
        type: "list",
        message: "What is the employee's role?",
        name: "role_id",
        choices: async () => {
            const roles = await getAllRoles();
            return roles.map(role => {
                return {
                    value: role.id,
                    name: role.title
                }
            });
        }
    },
    {
        type: "list",
        message: "Who is the employee's manager?",
        name: "manager_id",
        choices: async () => {
            const employees = await getAllEmployees();
            return employees.map(employee => {
                return {
                    value: employee.id,
                    name: `${employee.first_name} ${employee.last_name}`
                }
            });
        }
    },
];
