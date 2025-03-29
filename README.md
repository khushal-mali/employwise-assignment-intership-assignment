# React User Management App

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Error Handling](#error-handling)
- [Persistence](#persistence)
- [Code Quality](#code-quality)
- [Bonus Features](#bonus-features)
- [Deployment](#deployment)
- [Repository](#repository)

## Overview

This React application integrates with the Reqres API to perform basic user management functions such as authentication, user listing, and CRUD operations. The app is divided into three levels of increasing complexity.

### Base API URL

`https://reqres.in/`

## Features

### Level 1: Authentication

- Login screen for user authentication.
- Uses the following endpoint:
  - `POST /api/login` with email and password.
  - Credentials:
    - **Email:** eve.holt@reqres.in
    - **Password:** cityslicka
- On successful login, stores the authentication token and redirects to the Users List page.

### Level 2: List All Users

- Fetches and displays a paginated list of users.
- Uses the following endpoint:
  - `GET /api/users?page=1`
- Displays user details in a table or card format.
- Implements pagination or lazy loading.

### Level 3: Edit, Delete, and Update Users

- **Edit User:**
  - Clicking 'Edit' opens a form pre-filled with user data.
  - Allows updating first name, last name, and email.
  - Uses endpoint: `PUT /api/users/{id}`
- **Delete User:**
  - Clicking 'Delete' removes the user from the list.
  - Uses endpoint: `DELETE /api/users/{id}`
- Displays success/error messages based on API responses.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/khushal-mali/employwise-assignment-intership-assignment.git
   cd employwise-assignment-intership-assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

## Usage

- **Login:** Enter the given credentials to authenticate.
- **Users List:** View all users in a structured layout with pagination.
- **Edit User:** Click 'Edit', modify details, and save changes.
- **Delete User:** Click 'Delete' to remove a user.

## API Endpoints

| Action      | Method | Endpoint            | Description              |
| ----------- | ------ | ------------------- | ------------------------ |
| Login       | POST   | `/api/login`        | User authentication      |
| Fetch Users | GET    | `/api/users?page=1` | Retrieve paginated users |
| Update User | PUT    | `/api/users/{id}`   | Update user details      |
| Delete User | DELETE | `/api/users/{id}`   | Remove user from list    |

## Technologies Used

- **Frontend Framework:** React.js
- **State Management:** Zustand
- **HTTP Requests:** Axios / Fetch API
- **Styling:** Tailwind CSS / Bootstrap / Custom CSS
- **Routing:** React Router (if implemented)

## Error Handling

- Displays appropriate messages on failed API calls.
- Handles form validation in login and edit screens.
- Redirects users to login if token is missing or expired.

## Persistence

- Login token is stored in **localStorage** or **sessionStorage**.
- Token verification ensures secure authentication.

## Code Quality

- Modular and well-structured React components.
- Proper use of hooks (`useState`, `useEffect`, etc.).
- Follows best practices for maintainability.

## Bonus Features

- **Client-side search and filtering** for users.
- **React Router** for page navigation.
- **Deployment on free hosting** (e.g., Vercel, Netlify, Heroku).

## Deployment

To deploy, follow these steps:

1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy using a hosting provider (e.g., Vercel, Netlify, or Heroku).
3. Provide the deployment link here:
   **Live URL:** [Your Deployment Link]

## Repository

GitHub Repository: [https://github.com/khushal-mali/employwise-assignment-intership-assignment.git](https://github.com/khushal-mali/employwise-assignment-intership-assignment.git)
