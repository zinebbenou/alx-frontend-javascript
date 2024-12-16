console.log('Script is running');
// Director class implementation
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Teacher class implementation
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// Function to create an employee based on salary
function createEmployee(salary) {
    if (typeof salary === 'string' && salary.includes('$')) {
        salary = parseFloat(salary.replace('$', ''));
    }
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// Function to check if the employee is a Director
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// Function to execute work tasks based on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
// Create employee instances
var employee1 = createEmployee(200); // Teacher
var employee2 = createEmployee(1000); // Director
var employee3 = createEmployee('$500'); // Director
// Execute work tasks for each employee
executeWork(employee1); // Expected: Getting to work
executeWork(employee2); // Expected: Getting to director tasks
executeWork(employee3); // Expected: Getting to director tasks
// Get the output div element
var outputDiv = document.getElementById('output');
// Add results to the output div
if (outputDiv) {
    outputDiv.innerHTML += "<h2>Employee 1: ".concat(employee1 instanceof Teacher ? "Teacher" : "Director", "</h2>");
    outputDiv.innerHTML += "<p>workFromHome: ".concat(employee1.workFromHome(), "</p>");
    outputDiv.innerHTML += "<p>getCoffeeBreak: ".concat(employee1.getCoffeeBreak(), "</p>");
    outputDiv.innerHTML += "<p>workTasks: ".concat(employee1 instanceof Teacher ? employee1.workTeacherTasks() : employee1.workDirectorTasks(), "</p>");
    outputDiv.innerHTML += "<h2>Employee 2: ".concat(employee2 instanceof Teacher ? "Teacher" : "Director", "</h2>");
    outputDiv.innerHTML += "<p>workFromHome: ".concat(employee2.workFromHome(), "</p>");
    outputDiv.innerHTML += "<p>getCoffeeBreak: ".concat(employee2.getCoffeeBreak(), "</p>");
    outputDiv.innerHTML += "<p>workTasks: ".concat(employee2 instanceof Teacher ? employee2.workTeacherTasks() : employee2.workDirectorTasks(), "</p>");
    outputDiv.innerHTML += "<h2>Employee 3: ".concat(employee3 instanceof Teacher ? "Teacher" : "Director", "</h2>");
    outputDiv.innerHTML += "<p>workFromHome: ".concat(employee3.workFromHome(), "</p>");
    outputDiv.innerHTML += "<p>getCoffeeBreak: ".concat(employee3.getCoffeeBreak(), "</p>");
    outputDiv.innerHTML += "<p>workTasks: ".concat(employee3 instanceof Teacher ? employee3.workTeacherTasks() : employee3.workDirectorTasks(), "</p>");
}
// Function to teach a class based on today's subject
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
}
// Add results to the output div for teachClass
if (outputDiv) {
    outputDiv.innerHTML += "<h2>Teaching Classes</h2>";
    outputDiv.innerHTML += "<p>Today's Class: Math - ".concat(teachClass("Math"), "</p>");
    outputDiv.innerHTML += "<p>Today's Class: History - ".concat(teachClass("History"), "</p>");
}
