const Employee = require('./Employee');
const Project = require('./Project');

Employee.hasMany(Project, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Project.hasMany(Employee, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
})