# 💸 Monthly Balance 📊

**Monthly Balance** is a full-stack web application built with React, TypeScript, .NET, and SQLite. It allows users to track their monthly income, expenses, and view their financial balance. The application is designed to be a simple, easy-to-use tool for managing personal finances.

---

## 🚀 Project Overview

This project consists of two main parts:
- **Frontend**: React application using TypeScript and Vite for fast development.
- **Backend**: .NET API with Entity Framework and SQLite database for managing users and financial data.

The goal of this application is to:
- Allow users to input income and expenses.
- Display the monthly balance.
- Secure login and authentication with JWT tokens.
- Clean architecture with RESTful API principles.

---

## 🔧 Technologies Used

- **Frontend**: 
  - React.js (with TypeScript)
  - Vite (for fast build and development)
  - Material UI (for UI components)
- **Backend**: 
  - .NET 9
  - Entity Framework
  - SQLite (for database storage)
  - JWT Authentication (for secure user login)
- **Others**:
  - GitHub Actions (for CI/CD)
  - Swagger (for API documentation)

---

## 🧑‍💻 Developer Instructions

If you want to contribute to the development of this project or run it locally, follow the steps below:

### 1. Clone the repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/lucasmiko/monthly-balance.git
cd monthly-balance
```

### 2. Set up the Frontend (`monthly-balance-web`)

In the `monthly-balance-web` directory, you will find the React application.

#### Install dependencies:

```bash
cd monthly-balance-web
npm install
```

#### Run the development server:

```bash
npm run dev
```

Your frontend will now be running at `http://localhost:5173` or in the port indicated on terminal.

---

### 3. Set up the Backend (`MonthlyBalanceApi`)

In the `MonthlyBalanceApi` directory, you will find the .NET application with the API.

#### Install dependencies:

```bash
cd MonthlyBalanceApi
dotnet restore
```

#### Set up the SQLite database (optional):

If you want to use a local SQLite database, it will be automatically created when the API runs.

#### Run the backend server:

```bash
dotnet run
```

Your API will now be running at `http://localhost:5093` or in the port indicated on terminal.

---

### 4. Testing the Application

Once both the frontend and backend are running locally, open your browser and go to `http://localhost:5173` to interact with the application.

To test the API, you can use **Swagger**:

1. Navigate to `http://localhost:5093/swagger` to view the API documentation.
2. Test the endpoints such as login, create income/expense, and get monthly balance.

---

## 🎯 If You Are a Recruiter/Interviewer

### 📝 Steps to Evaluate the Project

1. **Clone the Repository**:
   Follow the instructions above to clone the repository to your local machine.

2. **Run the Application Locally**:
   You can run the application in a few steps:
   - Set up the frontend and backend as described.
   - Ensure the API is running at `http://localhost:5093` and the frontend is available at `http://localhost:5173`.

3. **Explore the Application**:
   - Open the React app and test the user login functionality.
   - Add income and expenses, and check the balance summary.
   - Use Swagger UI to test API endpoints directly.

4. **Evaluate the Code**:
   - Review the code structure, organization, and use of best practices (like JWT authentication, Entity Framework, etc.).
   - Explore the UI implemented using Material UI and check responsiveness and usability.

---

## 💡 Key Features

- **JWT Authentication**: Secure login with token-based authentication.
- **Add Income/Expenses**: Simple form to track monthly income and expenses.
- **Monthly Balance**: Automatically calculates the balance based on income and expenses.
- **Responsive UI**: Built with Material UI for a modern, clean interface.
- **API Documentation**: Fully documented API with Swagger for easy testing.

---

## 🔄 Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request with your changes. We welcome contributions that improve the functionality, user experience, or code quality of the project.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Open a pull request and describe the changes you've made.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📱 Contact & Social

- **LinkedIn**: [lucasmiko](https://www.linkedin.com/in/lucasmiko/)