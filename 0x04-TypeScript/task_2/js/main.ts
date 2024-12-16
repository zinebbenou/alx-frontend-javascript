console.log('Script is running');

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementation
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementation
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create an employee based on salary
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'string' && salary.includes('$')) {
    salary = parseFloat(salary.replace('$', ''));
  }

  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Function to check if the employee is a Director
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work tasks based on employee type
function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Create employee instances
const employee1 = createEmployee(200); // Teacher
const employee2 = createEmployee(1000); // Director
const employee3 = createEmployee('$500'); // Director

// Execute work tasks for each employee
executeWork(employee1); // Expected: Getting to work
executeWork(employee2); // Expected: Getting to director tasks
executeWork(employee3); // Expected: Getting to director tasks

// Get the output div element
const outputDiv = document.getElementById('output');

// Add results to the output div
if (outputDiv) {
  outputDiv.innerHTML += `<h2>Employee 1: ${employee1 instanceof Teacher ? "Teacher" : "Director"}</h2>`;
  outputDiv.innerHTML += `<p>workFromHome: ${employee1.workFromHome()}</p>`;
  outputDiv.innerHTML += `<p>getCoffeeBreak: ${employee1.getCoffeeBreak()}</p>`;
  outputDiv.innerHTML += `<p>workTasks: ${employee1 instanceof Teacher ? employee1.workTeacherTasks() : employee1.workDirectorTasks()}</p>`;

  outputDiv.innerHTML += `<h2>Employee 2: ${employee2 instanceof Teacher ? "Teacher" : "Director"}</h2>`;
  outputDiv.innerHTML += `<p>workFromHome: ${employee2.workFromHome()}</p>`;
  outputDiv.innerHTML += `<p>getCoffeeBreak: ${employee2.getCoffeeBreak()}</p>`;
  outputDiv.innerHTML += `<p>workTasks: ${employee2 instanceof Teacher ? employee2.workTeacherTasks() : employee2.workDirectorTasks()}</p>`;

  outputDiv.innerHTML += `<h2>Employee 3: ${employee3 instanceof Teacher ? "Teacher" : "Director"}</h2>`;
  outputDiv.innerHTML += `<p>workFromHome: ${employee3.workFromHome()}</p>`;
  outputDiv.innerHTML += `<p>getCoffeeBreak: ${employee3.getCoffeeBreak()}</p>`;
  outputDiv.innerHTML += `<p>workTasks: ${employee3 instanceof Teacher ? employee3.workTeacherTasks() : employee3.workDirectorTasks()}</p>`;
}

// String literal type for Subjects
type Subjects = "Math" | "History";

// Function to teach a class based on today's subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}

// Add results to the output div for teachClass
if (outputDiv) {
  outputDiv.innerHTML += `<h2>Teaching Classes</h2>`;
  outputDiv.innerHTML += `<p>Today's Class: Math - ${teachClass("Math")}</p>`;
  outputDiv.innerHTML += `<p>Today's Class: History - ${teachClass("History")}</p>`;
}
