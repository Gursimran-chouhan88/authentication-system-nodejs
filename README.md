# Authentication System

Project Overview: 🔐 Sign Up: New users can easily register with their details. 🔐 Login: Secure user authentication with Passport.js. 🔐 Reset Password: Users can reset their passwords securely. 🔐 Secure Routes: Protect sensitive routes and ensure only authenticated users can access them

## Installation

```bash
  git clone git https://github.com/Gursimran-chouhan88/authentication-system-nodejs.git
  npm install
  cd my-project
```

Packages

- body-parser
- dotenv
- ejs
- express
- express-flash
- express-session
- mongoose
- passport
- passport-local
- passport-local-mongoose
- nodemon

## Key Responsibilities

1. User Registration:

- Allow new users to sign up with their details.
- Validate user input to ensure data integrity.

2. User Login:

- Authenticate users using Passport.js with a local strategy.
- Provide feedback for incorrect login attempts.

3. Password Reset:

- Enable users to reset their passwords securely.
- Send password reset links via email.

4. Session Management:

- Use express-session to manage user sessions.
- Configure session options for security and performance.

5. Flash Messages:

- Use express-flash to display success and error messages to users.

6. Secure Routes:

- Protect sensitive routes to ensure only authenticated users can access them.
- Redirect unauthenticated users to the login page.

7. Database Integration:

- Use MongoDB to store user information securely.
- Implement Mongoose for database operations.

8. Template Engine:

- Use EJS to render dynamic HTML pages.
- Create reusable templates for consistent UI.

9. Responsive Design:

- Use Bootstrap and custom CSS for a responsive and user-friendly interface.

10. Environment Configuration:

- Load environment variables using dotenv for configuration management.

## Tech Stack

- Node.js: Backend server and application logic.
- Express.js: Web framework for handling routes and middleware.
- MongoDB: Database for storing user information.
- EJS: Templating engine for rendering dynamic HTML.
- Bootstrap: Responsive design and styling.
- CSS: Custom styles for a polished look.
- Passport.js: Authentication middleware for Node.js.

## folder Structure

authentication-system/
├── src/
│ ├── controllers/
│ │ └── authController.js
│ ├── database/
│ │ └── db.js
│ ├── models/
│ │ └── user.js
│ ├── passport/
│ │ └── passport.js
│ ├── routes/
│ │ └── authRoutes.js
│ ├── views/
│ │ ├── auth/
│ │ │ ├── login.ejs
│ │ │ ├── register.ejs
│ │ │ ├── resetPassword.ejs
│ │ │ └── home.ejs
├── public/
│ ├── css/
│ │ └── styles.css
│
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md

## Authors

- [@Gursimranjeet Singh](https://www.github.com/Gursimran-chouhan88)
