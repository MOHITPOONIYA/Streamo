# Streamo Video Conferencing App

Streamo is a real-time video and audio conferencing application that allows users to connect with others seamlessly. It is built with the MERN stack (MongoDB, Express.js, React, Node.js) and utilizes WebRTC for peer-to-peer communication and Socket.io for signaling and real-time chat.

**Live Demo:** [streamogo.onrender.com](https://streamogo.onrender.com)

![Streamo GitHub Repository](https://i.imgur.com/image_d65a9b.png)

## Features

-   **User Authentication**: Secure login and registration for users.
-   **Real-time Video/Audio**: High-quality, low-latency video and audio calls using WebRTC.
-   **Screen Sharing**: Share your screen with other participants in the meeting.
-   **In-Meeting Chat**: A real-time text chat feature available during calls.
-   **Meeting History**: Logged-in users can view a history of the meetings they've joined.
-   **Guest Access**: Users can quickly join a meeting as a guest without registering.
-   **Protected Routes**: User dashboard and history are protected routes, accessible only after logging in.

## Tech Stack

### Frontend
-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A fast and modern build tool for web development.
-   **Socket.io-client**: For real-time communication with the backend server.
-   **Material-UI (MUI)**: A popular React UI framework for creating beautiful and responsive components.
-   **Axios**: For making HTTP requests to the backend API.
-   **React Router**: For handling client-side routing.

### Backend
-   **Node.js**: A JavaScript runtime environment.
-   **Express.js**: A web application framework for Node.js.
-   **MongoDB**: A NoSQL database used to store user data and meeting history.
-   **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
-   **Socket.io**: Enables real-time, bidirectional communication between web clients and servers.
-   **bcrypt**: A library for hashing user passwords before storing them in the database.

## Project Structure

Here is the file and directory layout for the project:

Streamo/ │ ├── .gitignore │ ├── Backend/ │ ├── controllers/ │ │ ├── socketManager.js │ │ └── user.controller.js │ ├── models/ │ │ ├── meeting.model.js │ │ └── user.model.js │ ├── routes/ │ │ └── users.routes.js │ └── app.js │ └── Frontend/ ├── public/ │ ├── background.png │ ├── logo3.png │ ├── mobile.png │ └── vite.svg ├── src/ │ ├── contexts/ │ │ └── AuthContext.jsx │ ├── pages/ │ │ ├── Authentication.jsx │ │ ├── History.jsx │ │ ├── Home.jsx │ │ ├── Landing.jsx │ │ └── VideoMeet.jsx │ ├── styles/ │ │ └── videoComponent.module.css │ ├── utils/ │ │ └── withAuth.jsx │ ├── App.css │ ├── App.jsx │ ├── environment.js │ └── main.jsx ├── .gitignore ├── eslint.config.js ├── index.html ├── package.json ├── package-lock.json ├── README.md └── vite.config.js

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   **Node.js** (v18.x or higher recommended)
-   **npm** (Node Package Manager)
-   **MongoDB**: Make sure you have a running instance of MongoDB or an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-hosted database.

### Backend Setup

1.  **Navigate to the backend directory**:
    ```sh
    cd Backend
    ```
2.  **Install NPM packages**:
    ```sh
    npm install
    ```
3.  **Create a `.env` file** in the `Backend` root directory. Add your MongoDB connection string to it. This is crucial for connecting to your database.
    ```env
    MONGODB_URI="your_mongodb_connection_string"
    ```
4.  **Start the backend server**:
    ```sh
    npm run dev
    ```
    The server should now be running on `http://localhost:8000`.

### Frontend Setup

1.  **Navigate to the frontend directory**:
    ```sh
    cd Frontend
    ```
2.  **Install NPM packages**:
    ```sh
    npm install
    ```
3.  **Configure the backend server URL**. Open `src/environment.js` and set `IS_PROD` to `false` to connect to your local backend instance.
    ```javascript
    let IS_PROD = false; // Set to false for local development
    ```
4.  **Start the frontend development server**:
    ```sh
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or another port specified by Vite).

## Author

-   **MOHITPOONIYA** - [GitHub Profile](https://github.com/MOHITPOONIYA)
