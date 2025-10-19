# Streamo Video Conferencing App

Streamo is a real-time video and audio conferencing application built with the MERN stack (MongoDB, Express.js, React, Node.js). It uses WebRTC for peer-to-peer media and Socket.io for signaling and real-time chat.

**Live Demo:** [https://streamogo.onrender.com](https://streamogo.onrender.com)

---

## Features

* User authentication (register / login)
* Real-time video & audio via WebRTC
* Screen sharing
* In-meeting chat
* Meeting history for logged-in users
* Guest access (join without registering)
* Protected dashboard/routes

---

## Tech Stack

**Frontend:** React, Vite, Socket.io-client, MUI, React Router, Axios

**Backend:** Node.js, Express, MongoDB (Mongoose), Socket.io, bcrypt

---

## Project structure

A clear and readable project tree — copy this into your README to display the layout.

```
Streamo/
├── .gitignore
├── README.md
├── Backend/
│   ├── app.js
│   ├── controllers/
│   │   ├── socketManager.js
│   │   └── user.controller.js
│   ├── models/
│   │   ├── meeting.model.js
│   │   └── user.model.js
│   └── routes/
│       └── users.routes.js
│
├── Frontend/
│   ├── public/
│   │   ├── background.png
│   │   ├── logo3.png
│   │   ├── mobile.png
│   │   └── vite.svg
│   ├── src/
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Authentication.jsx
│   │   │   ├── History.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Landing.jsx
│   │   │   └── VideoMeet.jsx
│   │   ├── styles/
│   │   │   └── videoComponent.module.css
│   │   ├── utils/
│   │   │   └── withAuth.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── environment.js
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└──
```

> **Note (common deployment issues):**
>
> * File *name case sensitivity*: Linux environments (like Render) are case-sensitive. If your import is `./pages/landing` but the file is named `Landing.jsx`, change either the import or the filename so they exactly match (including uppercase/lowercase). Use `git mv` to force-case renames.
>
> * Vite output folder: Vite by default writes the production build to `dist`. Some hosts (e.g. Render) expect a `build` directory. Either change the Render "Publish Directory" to `dist`, change `vite.config.js` `build.outDir` to `build`, or copy/rename the folder in the build script.

---

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

* Node.js (v18.x or higher recommended)
* npm
* MongoDB (local or Atlas)

### Backend (development)

1. Open a terminal and go to the backend folder:

```bash
cd Backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` in `Backend/` with your MongoDB connection string:

```
MONGODB_URI="your_mongodb_connection_string"
PORT=8000
```

4. Start the backend server (development):

```bash
npm run dev
```

Server default: `http://localhost:8000`

### Frontend (development)

1. Open a terminal and go to the frontend folder:

```bash
cd Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Configure the backend URL for local development: open `src/environment.js` and set `IS_PROD = false` (or ensure `BASE_URL` points to `http://localhost:8000`).

4. Start Vite dev server:

```bash
npm run dev
```

Vite default: `http://localhost:5173`

### Build for production

From `Frontend/` run:

```bash
npm run build
```

* Vite will create a production bundle in the `dist` folder by default.
* If your host expects a `build` folder, either change `vite.config.js` or copy `dist` to `build` in the build step.

Example `package.json` build script to copy `dist` to `build`:

```json
"scripts": {
  "build": "vite build && cp -R dist build"
}
```

---

## Troubleshooting common issues

* **Import not found on Render / Linux**: Check filename case and that the file exists at the expected path. Use `ls -la src/pages` locally or in CI logs. To force a case-only rename:

```bash
git mv src/pages/Landing.jsx src/pages/_tmp.jsx
git mv src/pages/_tmp.jsx src/pages/landing.jsx
git commit -m "Fix filename case for landing component"
git push
```

* **Render shows `Publish directory build does not exist`**: Change Render publish directory to `dist` or change Vite output to `build` as described above.

---

## Author

**MOHITPOONIYA** — [GitHub](https://github.com/MOHITPOONIYA)

---

If you want, I can now:

* produce a small git patch you can apply to replace the existing `README.md`, or
* generate the exact `vite.config.js` or `package.json` edit to fix the `dist` vs `build` issue, or
* inspect `src/App.jsx` and `src/pages` listing to fix any case mismatches (paste the listing or I can read it for you).
