const {
    getAllEmployees
} = require('../../lib/queries')

module.exports = [
    {
        type: "list",
        message: "Which employee's manager do you want to update?",
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
        message: "Which manager do you want to assign the selected employee?",
        name: "manager_id",
        choices: async (answers) => {
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
