// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number; // Optional attribute for yearsOfExperience
  contract?: boolean; // Optional attribute for contract
}

// Create the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // This is specific to Directors
}

// Create an interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Create the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// Create objects of type Teacher
const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5,
};

const teacher2: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

// Create an object of type Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // numberOfReports is required for Directors
};

// Create a function to display teacher data
function displayTeacherInfo(teacher: Teacher) {
  const teacherDiv = document.createElement('div');
  teacherDiv.innerHTML = `
    <h2>Teacher Info</h2>
    <p>First Name: ${teacher.firstName}</p>
    <p>Last Name: ${teacher.lastName}</p>
    <p>Full Time: ${teacher.fullTimeEmployee}</p>
    <p>Location: ${teacher.location}</p>
    ${teacher.yearsOfExperience ? `<p>Years of Experience: ${teacher.yearsOfExperience}</p>` : ''}
    ${teacher.contract !== undefined ? `<p>Contract: ${teacher.contract}</p>` : ''}
  `;
  document.body.appendChild(teacherDiv);
}

// Display both teacher's and director's info
displayTeacherInfo(teacher1);
displayTeacherInfo(teacher2);

// Display director's info
const directorDiv = document.createElement('div');
directorDiv.innerHTML = `
  <h2>Director Info</h2>
  <p>First Name: ${director1.firstName}</p>
  <p>Last Name: ${director1.lastName}</p>
  <p>Full Time: ${director1.fullTimeEmployee}</p>
  <p>Location: ${director1.location}</p>
  <p>Number of Reports: ${director1.numberOfReports}</p>
`;
document.body.appendChild(directorDiv);

// Example usage of the printTeacher function and display in HTML
const printTeacherOutput = printTeacher("John", "Doe");
const printTeacherDiv = document.createElement('div');
printTeacherDiv.innerHTML = `
  <h2>Print Teacher Output</h2>
  <p>${printTeacherOutput}</p>
`;
document.body.appendChild(printTeacherDiv);

// Logging to console as well
console.log(printTeacher("John", "Doe"));  // Output: J. Doe
