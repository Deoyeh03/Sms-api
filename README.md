# 📘 Backend - School Management CRUD App

This is the backend for the School Management CRUD Application built with Express.js or Django.

## 🧰 Tech Stack

- Node.js with Express.js (or Django)
- MongoDB / PostgreSQL / SQLite
- RESTful API

## 🚀 Features

- Create and view Classes
- Create and view Students (link to Class and Courses)
- Create and view Staff (link to Courses)
- Create and view Courses (link to Staff)

## 📁 Folder Structure (Express.js)

```
backend/
├── controllers/
│   ├── classController.js
│   ├── studentController.js
│   ├── staffController.js
│   └── courseController.js
├── models/
│   ├── Class.js
│   ├── Student.js
│   ├── Staff.js
│   └── Course.js
├── routes/
│   ├── classRoutes.js
│   ├── studentRoutes.js
│   ├── staffRoutes.js
│   └── courseRoutes.js
├── config/
│   └── db.js
├── server.js
└── .env
```

## 🧾 API Endpoints

| Entity  | POST           | GET (All)      | GET (By ID)     |
|---------|----------------|----------------|-----------------|
| Class   | `/classes`     | `/classes`     | `/classes/:id`  |
| Student | `/students`    | `/students`    | `/students/:id` |
| Staff   | `/staff`       | `/staff`       | `/staff/:id`    |
| Course  | `/courses`     | `/courses`     | `/courses/:id`  |

## 🔁 Relationships

- Students → Class (classId)
- Students → Courses (enrolledCourses[])
- Courses → Teacher (teacherId)

## 🧪 Testing

- Use Postman to test endpoints
- Validate relationships and required fields

## ✅ To-Do

- [ ] Implement all CRUD endpoints
- [ ] Validate foreign key relationships
- [ ] Write Postman test collection