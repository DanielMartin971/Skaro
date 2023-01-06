const { ManagerProject } = require('../models');

const managerProjectData = [
    {
        id: 1,
        name: 'TestA',
        description: 'manager project A',
        
    },
    {
        id: 2,
        name: 'TestB',
        description: 'manager project B',
    }

];

const seedManagerProjects = () => ManagerProject.bulkCreate(managerProjectData);

module.exports = seedManagerProjects;