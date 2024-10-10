// writing an interface "Student"
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// creating student A and B
const stdA: Student = {
  firstName: "Idoko",
  lastName: "Attah",
  age: 21,
  location: "Naija"
};

const stdB: Student = {
  firstName: "Mike",
  lastName: "Okro",
  age: 24,
  location: "Benin"
};

// creating the array to contain the students
const studentsList: Student[] = [stdA, stdB];

// using vanilla javascript
function renderTable() {
  const table = document.createElement("table");
  studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationCell = row.insertCell();
    locationCell.innerHTML = student.location;
  });
  document.body.appendChild(table);
}

renderTable();
