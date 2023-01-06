const Employee = require('./Employee');
const Project = require('./Project');
const Monitor = require('./Monitor');
const Department = require('./Department');
const ManagerProject = require('./ManagerProject')

Employee.belongsToMany(Project, { through: Monitor });

Project.belongsToMany(Employee, { through:Monitor });

Employee.belongsTo(Department);

Employee.hasMany(ManagerProject);

ManagerProject.belongsTo(Employee);

Department.hasMany(Employee);

Department.hasMany(Project);


