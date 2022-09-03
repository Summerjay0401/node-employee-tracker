const {
    getAllDepartment
} = require('../../lib/queries')

module.exports = [
    {
        type: "input",
        message: "What is the name of the role?",
        name: "title"
    }, 
    {
        type: "input",
        message: "What is the salary of the role?",
        name: "salary"
    }, 
    {
        type: "list",
        message: "Which department does the role belong to?",
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
