### Project Name: API

#### Description:
This is the backend API for the Todo App built using the MERN stack.

#### Setup Instructions:
1. Run `npm install` to install dependencies.
2. Run `node server.js` to start the backend server.

#### Additional Notes:
- Ensure the frontend application is running to interact with the API.
- Database configurations and environment variables may need to be set up for full functionality.

### Dependencies:
```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "env": "^0.0.2",
    "express": "^4.18.2",
    "mongoose": "^7.3.4",
    "nodemon": "^3.0.1"
  }
}

MongoDB Connection Options:
plaintext
MONGO_URI = mongodb+srv://<username>:<password>@cluster0.i2qpuhb.mongodb.net/kesaradb?retryWrites=true&w=majority&appName=Cluster0

Connecting to MongoDB:
When setting up the MongoDB connection, replace <username> with your MongoDB username and <password> with your MongoDB password. Ensure you include the necessary options for viewers as specified in the connection URI.