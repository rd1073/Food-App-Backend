# Food App (Backend) 

The Food App is the comprehensive backend to the  web application that enables users to manage food items, create orders, and interact with various APIs to facilitate a seamless food delivery system.

## Technologies Used

- **Node.js:** A JavaScript runtime built on the V8 JavaScript engine for server-side development.
- **Express.js:** A web application framework for Node.js that simplifies the creation of robust APIs.
- **MongoDB:** A NoSQL database for storing and managing data efficiently.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JSON Web Tokens (JWT):** For user authentication and authorization.

## Features

### 1. Food Items API

- **Get All Food Items:**
  - Endpoint: `GET /api/fooditems`
  - Description: Retrieve a list of all available food items.

- **Get a Specific Food Item:**
  - Endpoint: `GET /api/fooditems/:id`
  - Description: Retrieve details of a specific food item based on its ID.
 
  - **Get a Specific Food Item by its name(multiple if necessary)**
  - Endpoint: `GET /api/fooditems/:name`
  - Description: Retrieve details of a specific food item based on its name.

- **Add a New Food Item:**
  - Endpoint: `POST /api/fooditems`
  - Description: Create a new food item by providing relevant details in the request body.

- **Update a Food Item:**
  - Endpoint: `PUT /api/fooditems/:id`
  - Description: Update the details of a specific food item based on its ID.

- **Delete a Food Item:**
  - Endpoint: `DELETE /api/fooditems/:id`
  - Description: Remove a specific food item based on its ID.


### 2. Orders API

- **Get All Orders:**
  - Endpoint: `GET /api/orders`
  - Description: Retrieve a list of all orders placed.

- **Get a Specific Order:**
  - Endpoint: `GET /api/orders/:id`
  - Description: Retrieve details of a specific order based on its ID.

- **Create a New Order:**
  - Endpoint: `POST /api/orders`
  - Description: Place a new order by specifying the food items and quantities in the request body.

- **Delete a Specific Order:**
  - Endpoint: `DELETE /api/orders/:id`
  - Description: Cancel a specific order based on its ID.

 
