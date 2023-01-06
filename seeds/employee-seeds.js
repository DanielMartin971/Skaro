const { Employee } = require('../models');

const employeeData = [
    {
        id: 1,
        firstName: 'TestA',
        lastName: 'TestA',
        email: 'test@test.com',
        password:'wfhjwjekf',
        project_ids: 1
    },
    {
        id: 2,
        firstName: 'TestB',
        lastName: 'TestB',
        email: 'test@test.com',
        password:'tryhtyh',
        project_ids: 2
    }

];

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;