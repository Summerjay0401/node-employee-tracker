const addDepartmentInquirer = require('./department/addDepartmentInquirer');
const deleteDepartmentInquirer = require('./department/deleteDepartmentInquirer');

const addRoleInquirer = require('./role/addRoleInquirer');
const deleteRoleInquirer = require('./role/deleteRoleInquirer');

const addEmployeeInquirer = require('./employee/addEmployeeInquirer');
const deleteEmployeeInquirer = require('./employee/deleteEmployeeInquirer');
const updateEmployeeManagerInquirer = require('./employee/updateEmployeeManagerInquirer');
const updateEmployeeRoleInquirer = require('./employee/updateEmployeeRoleInquirer');
const viewEmployeesByManagerInquirer = require('./employee/viewEmployeesByManagerInquirer');
const viewEmployeesByDepartmentInquirer = require('./employee/viewEmployeesByDepartmentInquirer');

const mainInquirer = require('./mainInquirer');

module.exports = {
    addDepartmentInquirer,
    addEmployeeInquirer,
    addRoleInquirer,

    deleteDepartmentInquirer,
    deleteEmployeeInquirer,
    deleteRoleInquirer,

    updateEmployeeManagerInquirer,
    updateEmployeeRoleInquirer,

    viewEmployeesByDepartmentInquirer,
    viewEmployeesByManagerInquirer,

    mainInquirer
}
