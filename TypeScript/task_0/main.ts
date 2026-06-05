interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Muhammed",
    lastName: "Ahmedov",
    age: 20,
    location: "Baku"
};

const student2: Student = {
    firstName: "Ali",
    lastName: "Mammadov",
    age: 22,
    location: "Ganja"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
});

document.body.appendChild(table);
