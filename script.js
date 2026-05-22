//  Initialize student array from local storage to prevent data loss on refresh
let students = JSON.parse(localStorage.getItem('students')) || [];

// DOM Elements
const form = document.getElementById('registrationForm');
const studentNameInput = document.getElementById('studentName');
const studentIdInput = document.getElementById('studentId');
const emailIdInput = document.getElementById('emailId');
const contactNoInput = document.getElementById('contactNo');
const submitBtn = document.getElementById('submitBtn');
const editIndexInput = document.getElementById('editIndex');
const studentList = document.getElementById('studentList');
const tableContainer = document.getElementById('tableContainer');

// Validation Logic
function validateInputs(name, id, email, contact) {
    // Name accepts only characters and spaces
    const nameRegex = /^[a-zA-Z\s]+$/;
    // ID accepts only numbers
    const idRegex = /^\d+$/;
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Contact number accepts at least 10 digits
    const contactRegex = /^\d{10,}$/;

    if (!nameRegex.test(name)) return "Name must contain only characters.";
    if (!idRegex.test(id)) return "Student ID must contain only numbers.";
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (!contactRegex.test(contact)) return "Contact Number must be at least 10 digits.";
    
    return null; // Null means no validation errors
}

//  Add Vertical Scrollbar Dynamically via JavaScript
function applyDynamicScrollbar() {
    // If there are more than 4 records, add a scrollbar dynamically
    if (students.length > 4) {
        tableContainer.style.maxHeight = '350px';
        tableContainer.style.overflowY = 'auto';
        tableContainer.style.border = '1px solid #e2e8f0';
    } else {
        tableContainer.style.maxHeight = 'none';
        tableContainer.style.overflowY = 'visible';
        tableContainer.style.border = 'none';
    }
}

// Render Table Data
function renderTable() {
    studentList.innerHTML = '';
    
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.id}</td>
            <td>${student.email}</td>
            <td>${student.contact}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editStudent(${index})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        studentList.appendChild(row);
    });

    // Save to local storage after rendering
    localStorage.setItem('students', JSON.stringify(students));
    applyDynamicScrollbar();
}

//  Form Submit Event (Add or Update)
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const name = studentNameInput.value.trim();
    const id = studentIdInput.value.trim();
    const email = emailIdInput.value.trim();
    const contact = contactNoInput.value.trim();
    const editIndex = parseInt(editIndexInput.value);

    // Ensure no empty rows can be added
    if(!name || !id || !email || !contact) {
        alert("All fields are required. Cannot add an empty row.");
        return;
    }

    // Validate inputs
    const errorMsg = validateInputs(name, id, email, contact);
    if (errorMsg) {
        alert(errorMsg);
        return;
    }

    const studentData = { name, id, email, contact };

    if (editIndex === -1) {
        // Add new record
        students.push(studentData);
    } else {
        // Update existing record
        students[editIndex] = studentData;
        submitBtn.textContent = 'Add Student';
        editIndexInput.value = -1;
    }

    form.reset();
    renderTable();
});

// Edit existing records
window.editStudent = function(index) {
    const student = students[index];
    studentNameInput.value = student.name;
    studentIdInput.value = student.id;
    emailIdInput.value = student.email;
    contactNoInput.value = student.contact;
    
    editIndexInput.value = index;
    submitBtn.textContent = 'Update Student';
};

// Delete records
window.deleteStudent = function(index) {
    if(confirm('Are you sure you want to delete this record?')) {
        students.splice(index, 1);
        
        // Reset form if the user was editing the deleted record
        if (parseInt(editIndexInput.value) === index) {
            form.reset();
            submitBtn.textContent = 'Add Student';
            editIndexInput.value = -1;
        }
        
        renderTable();
    }
};

// Initial Render
renderTable();