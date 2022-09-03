const {
    getAllEmployees,
    getAllRoles
} = require('../../lib/queries')

module.exports = [
    {
        type: "list",
        message: "Which employee's role do you want to update?",
        name: "employee_id",
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
    {
        type: "list",
        message: "Which role do you want to assign the selected employee?",
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
];
