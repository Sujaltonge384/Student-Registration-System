# Student Registration System

A simple, responsive web application built to register and manage student records. This project was developed as an assignment using HTML, CSS, and Vanilla JavaScript.

## Features

- **Create Records:** Easily add new students with their Name, Student ID, Email, and Contact Number.
- **Read & Display:** View all registered students in a clear, organized table format.
- **Update Records:** Edit existing student details directly from the table.
- **Delete Records:** Remove student entries with a simple click and confirmation prompt.
- **Data Persistence:** Uses browser Local Storage so data does not disappear when the page is refreshed.
- **Form Validation:** Ensures that:
  - Names contain only characters.
  - Student IDs contain only numbers.
  - Emails are in a valid format.
  - Contact numbers contain at least 10 digits.
  - Empty rows cannot be submitted.
- **Dynamic Scrollbar:** A vertical scrollbar is automatically added to the table via JavaScript if there are more than 4 records.
- **Fully Responsive:** The layout adapts perfectly across mobile, tablet, and desktop screens.

## Technologies Used

- **HTML5:** Semantic structure and form elements.
- **CSS3:** Custom styling, Flexbox layout, and media queries for responsiveness (No external CSS frameworks used).
- **JavaScript (ES6):** DOM manipulation, regex form validation, and Local Storage handling.

## File Structure

The project maintains a clean, flat file structure with no nested folders:
- `index.html` - The main structure of the page.
- `style.css` - All styling and responsive media queries.
- `script.js` - The logic for CRUD operations, validation, and dynamic UI updates.
- `README.md` - Project documentation.

## How to Run

1. Clone or download the repository to your local machine.
2. Ensure all files (`index.html`, `style.css`, `script.js`) are in the same directory.
3. Simply double-click `index.html` to open it in your preferred web browser. No local server is required.
