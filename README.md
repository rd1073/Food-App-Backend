# Food App (Backend) 

The Food App is the comprehensive backend to the  web application that enables users to manage food items, create orders, and interact with various APIs to facilitate a seamless food delivery system.

## Technologies Used

- **Node.js:** A JavaScript runtime built on the V8 JavaScript engine for server-side development.
- **Express.js:** A web application framework for Node.js that simplifies the creation of robust APIs.
- **MongoDB:** A NoSQL database for storing and managing data efficiently.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JSON Web Tokens (JWT):** For user authentication and authorization.

## API Routes

### Food Items API

- **Add New Food Item:**
  - Endpoint: `POST /api/addfood`
  - Description: Add a new food item. Requires authentication.

- **Show All Food Items:**
  - Endpoint: `GET /api/showall`
  - Description: Retrieve a list of all available food items.

- **Show Food Items Added by a Specific User:**
  - Endpoint: `GET /api/showall/:username`
  - Description: Retrieve food items added by a particular user.

- **Show Food Items of the Logged-In User:**
  - Endpoint: `GET /api/showmine`
  - Description: Retrieve food items added by the logged-in user. Requires authentication.

- **Get a Specific Food Item by ID:**
  - Endpoint: `GET /api/:id`
  - Description: Retrieve details of a specific food item based on its ID.

- **Search for a Food Item by Name:**
  - Endpoint: `GET /api/search/:name`
  - Description: Search for a specific food item by its name.

### Orders API

- **Create a New Order:**
  - Endpoint: `POST /api/createorder`
  - Description: Place a new order. Requires authentication.

- **Get All Orders for the Logged-In User:**
  - Endpoint: `GET /api/myorders`
  - Description: Retrieve all orders placed by the logged-in user. Requires authentication.

- **Delete a Specific Order:**
  - Endpoint: `DELETE /api/:orderId`
  - Description: Cancel a specific order based on its ID. Requires authentication.

- **Get Details of a Specific Order:**
  - Endpoint: `GET /api/:orderId`
  - Description: Retrieve details of a specific order based on its ID. Requires authentication.

## Authentication Routes

- **User Registration:**
  - Endpoint: `POST /api/signup`
  - Description: Register a new user.

- **User Login:**
  - Endpoint: `POST /api/login`
  - Description: Log in a user.
