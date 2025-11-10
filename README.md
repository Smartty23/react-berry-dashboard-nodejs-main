# React Node JS Berry Dashboard

`Full-Stack` modern web application **created by smartty23**. Features a beautiful Material-UI based design with a powerful Node.js backend.

## 🚀 Tech Stack & Features

This is a production-ready full-stack application with:
- **React 18.3.1** - Modern React with concurrent features
- **MUI v6** - Latest Material-UI component library
- **React Router v6** - Client-side routing
- **Redux 5** - State management
- **Node.js + Express** - RESTful API backend
- **TypeScript** - Type-safe backend code
- **JWT Authentication** - Secure user authentication
- **SQLite** - Lightweight database with TypeORM

![React Berry Dashboard - Full-Stack Application](https://user-images.githubusercontent.com/51070104/174480640-e0b450b1-07a8-4cc7-84bc-287bb9c45773.png)

<br >

## 📦 Frontend Dependencies

### Core Libraries
- **@mui/material** (v6.3.0) - Material-UI component library for beautiful, responsive UI
- **@mui/icons-material** (v6.3.0) - Material Design icons
- **@mui/x-data-grid** (v7.24.0) - Advanced data grid component
- **@mui/lab** (v6.0.0-beta.15) - Experimental MUI components
- **@mui/styles** (v6.3.0) - Styling solution for MUI components

### State Management & Routing
- **react** (v18.3.1) - Core React library with latest features
- **react-dom** (v18.3.1) - React DOM rendering
- **react-router-dom** (v6.29.0) - Declarative routing for React
- **redux** (v5.0.1) - Predictable state container
- **react-redux** (v9.2.0) - Official React bindings for Redux
- **redux-persist** (v6.0.0) - Persist Redux state to localStorage

### UI & Styling
- **@emotion/react** (v11.14.0) - CSS-in-JS library for styling
- **@emotion/styled** (v11.14.0) - Styled components for Emotion
- **framer-motion** (v11.15.0) - Animation library for React
- **clsx** (v2.1.1) - Utility for constructing className strings
- **react-perfect-scrollbar** (v1.5.8) - Custom scrollbar component

### Forms & Validation
- **formik** (v2.4.6) - Form management library
- **yup** (v1.7.1) - Schema validation library

### Charts & Visualization
- **apexcharts** (v4.2.0) - Modern charting library
- **react-apexcharts** (v1.4.1) - React wrapper for ApexCharts

### Utilities
- **axios** (v1.7.9) - HTTP client for API requests
- **@tabler/icons-react** (v3.35.0) - Icon library
- **react-device-detect** (v2.2.3) - Device detection utility
- **material-ui-popup-state** (v5.3.6) - Popup state management helper

### Development Tools
- **react-scripts** (v5.0.1) - Create React App scripts
- **sass** (v1.83.0) - CSS preprocessor
- **@testing-library/react** (v16.3.0) - React testing utilities
- **@testing-library/jest-dom** (v6.6.3) - Custom Jest matchers
- **@testing-library/user-event** (v14.6.1) - User interaction simulation

<br />

> `Tests` (compatibility matrix)

| NodeJS | NPM | YARN | 
| --- | --- | --- |  
| `v14.0.0` | ✅ | ✅ |
| `v16.0.0` | ✅ | ✅ | 
| `v18.0.0` | ❌ | ❌ | 


<br />

## 🔧 Backend Dependencies

### Core Framework
- **express** - Fast, minimalist web framework for Node.js
- **typescript** - Type-safe JavaScript for better code quality
- **ts-node** - TypeScript execution environment for Node.js

### Database & ORM
- **typeorm** - Modern TypeScript ORM for database operations
- **sqlite3** - Lightweight, serverless SQL database
- **reflect-metadata** - Metadata reflection API for TypeORM decorators

### Authentication & Security
- **passport** - Authentication middleware for Node.js
- **passport-jwt** - JWT authentication strategy for Passport
- **jsonwebtoken** - JSON Web Token implementation
- **bcryptjs** - Password hashing library

### Validation & Utilities
- **joi** - Schema validation library for request validation
- **cors** - Enable Cross-Origin Resource Sharing
- **dotenv** - Environment variable management
- **body-parser** - Parse incoming request bodies

### Development Tools
- **nodemon** - Auto-restart server on file changes
- **jest** - JavaScript testing framework
- **eslint** - Code linting and style enforcement
- **prettier** - Code formatting tool

<br />

> `Tests` (compatibility matrix)

| NodeJS | NPM | YARN | 
| --- | --- | --- | 
| `v18.0.0`  | ❌ | ✅ |
| `v17.0.0`  | ❌ | ✅ |
| `v16.13.0` | ❌ | ✅ | 
| `v16.0.0`  | ❌ | ❌ | 


<br /> 

## ✨ How to use it

Being a full-stack product, the backend and the frontend should be compiled and started separately. 
Before starting to compile the product, make sure you have the following tools installed in the environment:

- [NodeJS](https://nodejs.org/en/) - version `14.x` or higher
- [GIT](https://git-scm.com/) - used to clone tjhe sources from Github
- [Python3](https://www.python.org/) - used in many tools

<br />

### 👉 Start the Frontend 

> **Step 1** - Once the project is downloaded, change the directory to `react-ui`. 

```bash
$ cd react-ui
```

<br >

> **Step 2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

> **Step 3** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

<br />

At this point, the app is available in the browser `localhost:3000` (the default address).


<br /> 

### 👉 Start the Backend Server 

> **Step 1** - Change the directory to `api-server-nodejs`

```bash
$ cd api-server-nodejs
```

<br >

> **Step 2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

> **Step 3** - Run the SQLite migration via TypeORM

```bash
$ npm run typeorm migration:run
// OR 
$ yarn typeorm migration:run
```

<br />

> **Step 4** - Start the API server (development mode)

```bash
$ npm run dev
// OR
$ yarn dev
```

The API server will start using the `PORT` specified in `.env` file (default 5000).

<br /> 

## 👉 Codebase Structure

```bash
< ROOT / src >
     | 
     |-- config/                              
     |    |-- config.ts             # Configuration       
     |    |-- passport.ts           # Define Passport Strategy             
     | 
     |-- migration/
     |    |-- some_migration.ts     # database migrations
     |
     |-- models/                              
     |    |-- activeSession.ts      # Sessions Model (Typeorm)              
     |    |-- user.ts               # User Model (Typeorm) 
     | 
     |-- routes/                              
     |    |-- users.ts              # Define Users API Routes
     | 
     | 
     |-- index.js                   # API Entry Point
     |-- .env                       # Specify the ENV variables
     |                        
     |-- ************************************************************************
```

<br />

## 👉 SQLite Path

The SQLite Path is set in `.env`, as `SQLITE_PATH`

<br />

## 👉 Database migration

> Generate migration:

```bash
$ yarn typeorm migration:generate -n your_migration_name
```

> run migration: 

```bash
$ yarn typeorm migration:run
```

<br />

## 🎯 Key Features

### Frontend Features
- ✅ Modern React 18 with concurrent rendering
- ✅ Material-UI v6 components and theming
- ✅ Responsive design for all screen sizes
- ✅ Dark/Light theme support
- ✅ Redux state management with persistence
- ✅ Protected routes with authentication guards
- ✅ Form validation with Formik and Yup
- ✅ Interactive charts and data visualization
- ✅ Smooth animations with Framer Motion

### Backend Features
- ✅ RESTful API with Express
- ✅ JWT-based authentication
- ✅ TypeScript for type safety
- ✅ TypeORM for database operations
- ✅ Password hashing with bcrypt
- ✅ Request validation with Joi
- ✅ CORS enabled for cross-origin requests
- ✅ Session management
- ✅ Database migrations support

<br />

---
**Created and maintained by smartty23** - Upgraded full-stack React + Node.js application with modern dependencies and best practices.
