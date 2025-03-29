# React User Management App

🚀 **Live URL:** [https://employwise-assignment-intership-assignment.vercel.app/](https://employwise-assignment-intership-assignment.vercel.app/)

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

This React application integrates with the Reqres API to perform basic user management functions such as authentication, user listing, and CRUD operations. The app is divided into three levels of increasing complexity, ensuring a structured and scalable implementation.

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
- On successful login, stores the authentication token in **localStorage** and redirects to the Users List page.

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

- **Frontend Framework: React.js** ⚛️ - The industry-standard JavaScript library for building fast, modular, and scalable user interfaces.
- **State Management: Zustand** 🗂️ - A lightweight yet powerful state management library that keeps the application state simple and predictable.
- **Routing: React Router** 🚀 - Enables seamless client-side navigation, improving the user experience with dynamic routing.
- **UI Components: ShadCN** 🏗️ - A modern and customizable component library built on top of Radix UI and Tailwind CSS for a sleek and accessible interface.
- **Styling: Tailwind CSS** 🎨 - A utility-first CSS framework that ensures rapid development, responsiveness, and a consistent design system.
- **Form Handling: React Hook Form** 📝 - Enhances form performance with minimal re-renders, making form validation and submission efficient.
- **Schema Validation: Zod** ✅ - Ensures data integrity with runtime schema validation, improving the robustness of user inputs.
- **HTTP Requests: Axios** 🌐 - A promise-based HTTP client that simplifies API communication with built-in error handling and request customization.

## Error Handling

- Displays appropriate messages on failed API calls.
- Handles form validation in login and edit screens using **React Hook Form** and **Zod**.
- Redirects users to login if the authentication token is missing or expired.

## Persistence

- Login token is securely stored in **localStorage**.
- Automatic token verification ensures that users remain authenticated without unnecessary re-login prompts.

## Code Quality

- Modular and well-structured React components for maintainability and scalability.
- Proper usage of React hooks (`useState`, `useEffect`, `useNavigate`, etc.).
- Clean, reusable, and well-documented code adhering to best practices.

## Bonus Features

- **Client-side search and filtering** for a smoother user experience.
- **React Router** for structured and dynamic page navigation.
- **Deployment on free hosting platforms** (e.g., Vercel, Netlify, Heroku) for easy access and scalability.

## Deployment

This application has been deployed on **Vercel** and is accessible at the following link:

**Live URL:** [https://employwise-assignment-intership-assignment.vercel.app/](https://employwise-assignment-intership-assignment.vercel.app/)

To deploy on your own, follow these steps:

1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy using a hosting provider (e.g., Vercel, Netlify, or Heroku).
3. Update the **Live URL** accordingly.

## Repository

GitHub Repository: [https://github.com/khushal-mali/employwise-assignment-intership-assignment.git](https://github.com/khushal-mali/employwise-assignment-intership-assignment.git)
