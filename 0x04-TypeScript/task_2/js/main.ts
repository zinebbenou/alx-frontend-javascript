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

const employee1 = createEmployee(200); // Teacher
const employee2 = createEmployee(1000); // Director
const employee3 = createEmployee('$500'); // Director

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
