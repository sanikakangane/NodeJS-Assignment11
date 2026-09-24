# NodeJS-Assignment11

A beginner-friendly Node.js Express assignment created to understand MongoDB connection using Mongoose, separate schemas and models, Joi schema validation, routing, POST requests, bcrypt password hashing, and storing teacher and student data in MongoDB.

## Tasks

1. MongoDB Connection
2. Create Teacher Schema
3. Create Student Schema
4. Create Teacher and Student Models
5. Schema Validation
6. Create Teacher Router
7. Create Student Router
8. POST `/teacher/register`
9. POST `/student/register`
10. Hash Passwords using bcrypt
11. Store Teacher and Student Data in MongoDB
12. Handle Validation and Registration Errors

## Project Structure

```text
├── Screenshots/
├── schema/
│   ├── teacherSchema.js
│   └── studentSchema.js
├── model/
│   ├── teacherModel.js
│   └── studentModel.js
├── router/
│   ├── teacherRouter.js
│   └── studentRouter.js
├── package.json
├── README.md
└── server.js
```

## Concepts Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Joi
* bcrypt
* Express Routing
* Schema Validation
* Mongoose Schema
* Mongoose Model
* `express.json()`
* `req.body`
* `res.status()`
* `res.json()`
* Async/Await
* MongoDB Collections
* Password Hashing
* Error Handling

## Tasks Performed

### Task 1: MongoDB Connection

Connected the Express application to MongoDB using Mongoose.

MongoDB connection message:

```text
MongoDB connected
```

The application runs on port:

```text
1888
```

### Task 2: Create Teacher Schema

Created `teacherSchema.js` inside the `schema` folder.

The schema contains the following fields:

```text
name
email
password
subject
```

### Task 3: Create Student Schema

Created `studentSchema.js` inside the `schema` folder.

The schema contains the following fields:

```text
name
email
password
course
age
```

### Task 4: Create Teacher and Student Models

Created separate Mongoose models for teachers and students.

Teacher model:

```text
Teacher
```

Student model:

```text
Student
```

### Task 5: Schema Validation

Used Joi to validate the received teacher and student data before storing it in MongoDB.

Teacher validation rules:

```text
name     → required
email    → required and valid email
password → required and minimum 6 characters
subject  → required
```

Student validation rules:

```text
name     → required
email    → required and valid email
password → required and minimum 6 characters
course   → required
age      → required and valid number
```

### Task 6: Create Teacher Router

Created `teacherRouter.js` inside the `router` folder.

The router contains the following route:

```text
POST /teacher/register
```

### Task 7: Create Student Router

Created `studentRouter.js` inside the `router` folder.

The router contains the following route:

```text
POST /student/register
```

### Task 8: POST `/teacher/register`

Used the POST route to accept teacher data, validate it, hash the password, and store the teacher data in MongoDB.

Example request:

```json
{
    "name": "Rahul Sharma",
    "email": "rahul@gmail.com",
    "password": "rahul123",
    "subject": "Mathematics"
}
```

Successful response:

```json
{
    "message": "Teacher registered successfully"
}
```

### Task 9: POST `/student/register`

Used the POST route to accept student data, validate it, hash the password, and store the student data in MongoDB.

Example request:

```json
{
    "name": "Priya Sharma",
    "email": "priya@gmail.com",
    "password": "priya123",
    "course": "B.Tech CSE",
    "age": 20
}
```

Successful response:

```json
{
    "message": "Student registered successfully"
}
```

### Task 10: Hash Passwords using bcrypt

Used bcrypt to hash teacher and student passwords before storing them in MongoDB.

The passwords are stored as hashed values instead of plain text.

Example:

```text
$2b$10$................................................
```

### Task 11: Store Teacher and Student Data in MongoDB

Valid teacher data is stored in the teacher collection.

The stored teacher document contains:

```text
name
email
password
subject
```

Valid student data is stored in the student collection.

The stored student document contains:

```text
name
email
password
course
age
```

### Task 12: Handle Validation and Registration Errors

Invalid teacher or student data is rejected before it is stored in MongoDB.

Example validation error response:

```json
{
    "message": "Validation error message"
}
```

Registration errors are handled using `try...catch`.

## MongoDB

Database:

```text
Assignment11
```

Teacher collection:

```text
teachers
```

Student collection:

```text
students
```

### Teacher Document

```text
name: Rahul Sharma
email: rahul@gmail.com
password: hashed password
subject: Mathematics
```

### Student Document

```text
name: Priya Sharma
email: priya@gmail.com
password: hashed password
course: B.Tech CSE
age: 20
```

## How to Run

Install the required packages:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The server runs on:

```text
http://localhost:1888
```

## Routes

| Method | Route               | Description                     |
| ------ | ------------------- | ------------------------------- |
| POST   | `/teacher/register` | Validate and register a teacher |
| POST   | `/student/register` | Validate and register a student |

## Expected Output

### MongoDB Connection

```text
MongoDB connected
Server running on port 1888...
```

### Teacher Registration

```json
{
    "message": "Teacher registered successfully"
}
```

### Student Registration

```json
{
    "message": "Student registered successfully"
}
```

### Validation Error

```json
{
    "message": "Validation error message"
}
```

## Author

**Sanika Kangane 👩🏻‍💻**
