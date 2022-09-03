const {
    getAllEmployees
} = require('../../lib/queries')

module.exports = [
    {
        type: "list",
        message: "Which manager's employees you want to view?",
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
