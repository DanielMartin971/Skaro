const Employee = require('./Employee');
const Project = require('./Project');
const Monitor = require('./Monitor')

Employee.belongsToMany(Project, { through: Monitor });

Project.belongsToMany(Employee, { through:Monitor });
