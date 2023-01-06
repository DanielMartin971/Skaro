const seedDepartments = require('./department-seeds');
const seedEmployees = require('./employee-seeds');
const seedManagerProjects = require('./manager-project-seeds');
const seedProjects = require('./project-seeds');

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedDepartments();
    console.log('\n----- Departments Seeded -----\n');

    await seedProjects();
    console.log('\n----- Projects Seeded -----\n');

    await seedEmployees();
    console.log('\n----- Employees Seeded -----\n');

    await seedManagerProjects();
    console.log('\n----- Manager Projects Seeded -----\n');

    
    
};

seedAll();