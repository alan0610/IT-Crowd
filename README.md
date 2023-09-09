# It-Crowd CRUD Application for Products with Login System

This application is a CRUD (Create, Read, Update, Delete) system for products with authentication and authorization features. It allows users to register, log in, and manage products. Users can have administrator or standard roles, which determine their capabilities in the application.

Backend Local URL: http://localhost:3031/
Backend Server URL: https://it-crowd-backend.onrender.com/
Frontend Server URL: https://it-crowd-frontend.onrender.com/

## Technologies Used

- ### Backend:
  - Node.js with Express.js as the framework to create the API.
  - [jsonwebtoken (JWT)](https://www.npmjs.com/package/jsonwebtoken) for authentication and token generation.
  - [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing and verification.
  - [cors](https://www.npmjs.com/package/cors) for handling CORS headers.
  - [dotenv](https://www.npmjs.com/package/dotenv) for managing environment variables.
  - [express-validator](https://www.npmjs.com/package/express-validator) for data validation and sanitization.
  - [Nodemon](https://www.npmjs.com/package/nodemon) for automatically restarting the server during development.
  - SQL and [Sequelize](https://sequelize.org/) as the ORM for the database.
  
  **Possible endpoints:**
  - GET products: "/products"
  - GET 1 product: "/products/:id"
  - POST product: "/products"
  - PUT product: "/products/:id"
  - DELETE product: "/products/:id"

  - GET brands: "/brands"
  - GET 1 brand: "/brands/:id"
  - POST brands: "/brands"
  - PUT brand: "/brands/:id"
  - DELETE brand: "/brands/:id"

  - POST login: "/login"
  - POST register: "/register"

- ### Frontend:
  - React for building the user interface.
  - [Tailwind CSS](https://tailwindcss.com/) for frontend design and styling.
  - [axios](https://axios-http.com/) for making HTTP requests to the backend.
  - [jwt-decode](https://www.npmjs.com/package/jwt-decode) for decoding JWT tokens in the frontend.

  **Possible endpoints:**
  - GET products: "/"
  - GET 1 product: "/:id"
  - GET create product: "/create"
  - GET update product: "/update/:id"
  - POST product: "/"
  - PUT product: "/:id"
  - DELETE product: "/:id"

  - GET create brand: "/create/brands"
  - POST brands: "/brands"

  - GET login: "/login"
  - POST login: "/login"

  - GET register: "/register"
  - POST register: "/register"

## Key Features

- User registration and authentication with administrator and standard roles.
- CRUD operations for products.
- Administrators can create, update, and delete products.
- Standard users can view the list of products.
- Use of JWT tokens for authentication and authorization.
- Passwords are hashed in the database.

## Installation and Execution

1. Clone this repository.
2. In the root directory, run `npm install` to install backend dependencies.
3. Go to the `frontend` directory and run `npm install` to install frontend dependencies.
4. Configure the environment variables from `.env.example` in a `.env` file. <br>
  4.a. If you choose to use local database, run `npm run db:reset` to create the db, run migrations and seeders
5. Run `nodemon app.js` in the root directory to start the Node.js server.
6. In the `frontend` directory, run `npm start` to start the React application.