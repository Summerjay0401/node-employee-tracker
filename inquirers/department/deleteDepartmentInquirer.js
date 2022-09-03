const {
    getAllDepartment
} = require('../../lib/queries')

module.exports = [
    {
        type: "list",
        message: "Which department you want to delete?",
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
