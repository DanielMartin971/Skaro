const { Project } = require('../models');

const projectData = [
    {
        id: 1,
        projectName: 'TestA',
        employee_ids: 1,
        progress: 50
    },
    {
        id: 2,
        projectName: 'TestB',
        employee_ids: 2,
        progress: 75
    }

];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;