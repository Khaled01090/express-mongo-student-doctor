# Student-Doctor API

A RESTful API built with **Express** and **MongoDB** for managing student and doctor data with CRUD operations and role-based access control.

---

## Features
- **Student Management**: Add, update, delete, and retrieve student records.
- **Doctor Management**: Add, update, delete, and retrieve doctor records.
- **Data Validation**: Ensures correct data is entered for students and doctors.

---

## Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **ODM**: Mongoose
- **Environment**: `.env` for environment variables

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/student-doctor-api.git
2. Navigate to the project directory:
    ```bash
    cd student-doctor-api
3. Install dependencies:
    ```bash
    npm install
4.Set up environment variables: Create a .env file in the root of the project and add the following:
   ```bash
   MONGO_URI=your_mongo_database_uri
   PORT=your_preferred_port (e.g., 3000)
```

## Running the Project
1. Start the server:
     ```bash
       npm start
2.The API will be running on http://localhost:3000 (or the port you configured in .env).

---

## API Endpoints

### **Students**
- `GET /students`: Get a list of all students.
- `GET /students/:id`: Get a specific student by ID.
- `POST /students`: Add a new student.
- `PUT /students/:id`: Update student information.
- `DELETE /students/:id`: Delete a student.

### **Doctors**
- `GET /doctors`: Get a list of all doctors.
- `GET /doctors/:id`: Get a specific doctor by ID.
- `POST /doctors`: Add a new doctor.
- `PUT /doctors/:id`: Update doctor information.
- `DELETE /doctors/:id`: Delete a doctor.

## Contribution

Feel free to fork the repository, submit pull requests, or open issues if you find bugs or have suggestions for improvement.
