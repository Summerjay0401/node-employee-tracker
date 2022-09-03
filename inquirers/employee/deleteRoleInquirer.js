const {
    getAllRoles
} = require('../../lib/queries')

module.exports = [
    {
        type: "list",
        message: "Which role you want to delete?",
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
