Project Description: User Registration & Login System with Node.js, MongoDB, and React
This project demonstrates a full-stack web application that includes user registration, login functionality, and session management. It uses Node.js with Express for the backend, MongoDB for data storage, and a frontend created with both Vanilla JavaScript (HTML, CSS, JS) and React.

Features:
Frontend:

HTML, CSS, and JavaScript: A form for user registration and login with validation and user interaction.
React: A dynamic and interactive user interface for the registration and login forms.
Backend:

Node.js with Express: Server-side logic that handles requests for user registration, login, and sign-out.
MongoDB: A NoSQL database used to store user details.
JWT Authentication: A security feature to authenticate users and manage sessions with tokens.
Deployment: The application is deployed on Render, making it accessible as a live project.

Backend Code Overview:
1. UserController.js
This file contains three main functions: postUserDetail, loginUser, and signOut.

postUserDetail: Handles user registration, validates input, hashes the password, and stores the user in MongoDB. Upon successful creation, a JWT token is generated and returned.

loginUser: Handles user login, validates credentials, compares the password, and returns a JWT token for authenticated users.

signOut: Clears the authentication token and signs the user out by removing cookies.

2. Express Routes
In the routing file, three routes are defined:

POST /post/user: For user registration.
POST /login/user: For user login.
POST /signOut: For signing out the user.
These routes interact with the UserController.js to process requests and send appropriate responses.

3. JWT Authentication:
A JWT token is generated using a utility function (generateToken) and returned to the user upon successful registration or login. The token is stored in cookies for subsequent requests.

Frontend Code Overview:
1. Vanilla JavaScript:
HTML Form: A simple user registration and login form that collects the username, first name, last name, password, and confirm password.

JavaScript Validation: Frontend validation to ensure that all fields are filled out correctly, and that passwords match.

AJAX Requests: The form sends the user input data to the backend via a POST request using JavaScript fetch API. Upon success, the user is redirected, and the response is displayed on the frontend.

2. React.js:
React Components: Components for the registration and login forms are created using React. React handles the state management for form data, validation, and submission.

Form Validation: In React, validation is done before sending the form data to the backend.

Deployment:
The project has been successfully deployed on Render, which provides a cloud platform for full-stack applications. You can access the live version of the project and test both registration and login functionalities.







1. Clone the repository:
bash
Copy code
git clone <repository-url>
cd <repository-name>
2. Install Dependencies:
For Frontend (React):

bash
Copy code
cd frontend
npm install
For Backend (Node.js/Express):

bash
Copy code
cd backend
npm install
3. Create a .env file:
Ensure to create a .env file in the backend folder with the following variables:

makefile
Copy code
MONGODB_URI=<Your MongoDB URI>
JWT_SECRET=<Your Secret Key>
4. Run the Server:
Backend:

bash
Copy code
npm start
Frontend:

bash
Copy code
npm start
The backend will run on a local port (e.g., http://localhost:5000), and the frontend will run on another (e.g., http://localhost:3000).