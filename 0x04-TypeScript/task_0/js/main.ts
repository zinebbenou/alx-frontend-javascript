interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

// Render the table
const table = document.createElement('table');
document.body.appendChild(table);

// Add table header
const header = table.createTHead();
const row = header.insertRow();
row.insertCell().textContent = 'First Name';
row.insertCell().textContent = 'Location';

// Add student rows
const tbody = table.createTBody();
studentsList.forEach((student) => {
  const row = tbody.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});
