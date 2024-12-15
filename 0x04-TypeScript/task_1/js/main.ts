const teacher1: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'New York',
  yearsOfExperience: 5
};

const teacher2: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false
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

// Display both teacher's info
displayTeacherInfo(teacher1);
displayTeacherInfo(teacher2);
