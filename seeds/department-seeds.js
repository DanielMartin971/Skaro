const { Department } = require('../models');

const departmentData = [
    {
        id: 1,
        name: 'DeptA',
        
    },
    {
        id: 2,
        name: 'DeptB'
    }

];

const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;