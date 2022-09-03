const {
    getAllDepartment
} = require('../../lib/queries')

module.exports = [
    {
        type: "list",
        message: "Which department's employees you want to view?",
        name: "department_id",
        choices: async () => {
            const departments = await getAllDepartment();
            return departments.map(department => {
                return {
                    value: department.id,
                    name: department.name
                }
            });
        }
    }, 
];
