# Personal Finance Tracker - Project Documentation

## 1. Project Information
- **Project Name**: Personal Finance Tracker
- **Version**: 1.0
- **Author**: Aman Bhatt
- **Date**: 3-11-2024

## 2. Project Overview
The Personal Finance Tracker is a web application designed to help users manage and monitor their finances effectively. It allows users to track income, expenses, set budgets, and achieve their financial goals, all in one place.

### Objectives
- Provide a user-friendly platform for tracking income and expenses.
- Enable budgeting, savings goal tracking, and comprehensive reporting features.

### Target Audience
The application is aimed at individuals who want to improve their financial health through better monitoring and planning of their income and expenses.

## 3. Features

### Core Features
- **User Authentication**: Secure user registration, login, and password management.
- **Dashboard**: Overview of user’s financial status with income and expense summaries.
- **Expense Tracking**: Add, edit, and delete expenses.
- **Income Tracking**: Record and categorize sources of income.
- **Budget Management**: Set and manage monthly/weekly budgets.
- **Financial Reports**: Generate reports to analyze financial habits.
- **Transaction Categories**: Customizable categories (Food, Rent, Entertainment, etc.)

### Advanced Features
- **Recurring Transactions**: Automated recurring expenses or incomes.
- **Savings Goals**: Set and track savings targets.
- **Debt Tracker**: Manage and monitor debts.
- **Multiple Accounts**: Separate records for bank accounts, cash, credit cards, etc.
- **Notifications & Alerts**: Alerts for budgets, upcoming payments, etc.
- **Data Export/Import**: Export data as CSV or Excel files.
- **Currency Conversion**: Multi-currency support.

### Future Additions
- **AI-based Insights**: Expense prediction and budgeting suggestions using AI.
- **Bank Integrations**: Connection with external bank APIs for transaction imports.
- **Mobile App Version**: React Native-based mobile application for portability.

## 4. Technology Stack
- **Frontend**: React.js, Chart.js (graphs), Tailwind CSS (or Bootstrap)
- **Backend**: Spring Boot, Hibernate for ORM
- **Database**: MySQL or PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger for detailed API specification

## 5. System Architecture
The application employs a client-server model, where the **React.js frontend** communicates with the **Spring Boot backend** using RESTful APIs. The backend interacts with the database to handle CRUD operations and stores financial data.

### High-Level Architecture Diagram
(Placeholder for architecture diagram)

### API Overview
Documentation of REST API endpoints and functionality.

## 6. Database Schema
- **Users**: `user_id`, `name`, `email`, `password` (hashed), etc.
- **Transactions**: `transaction_id`, `user_id`, `amount`, `date`, `category`, `type` (income/expense)
- **Budget**: `budget_id`, `user_id`, `amount`, `start_date`, `end_date`
- **Goals**: `goal_id`, `user_id`, `goal_name`, `target_amount`, `current_amount`, `deadline`

### ER Diagram
(Placeholder for Entity-Relationship diagram)

## 7. Project Requirements

### Functional Requirements
- Support user authentication and secure session management.
- Enable CRUD operations for income, expenses, budgets, and goals.
- Generate reports and visual summaries for financial data.

### Non-functional Requirements
- **Performance**: Fast data processing and response times.
- **Security**: Strong encryption for sensitive data, secure authentication.
- **Usability**: Intuitive user interface and smooth user experience.

## 8. Implementation Details
- **Feature Breakdown**: Steps for implementing each core and advanced feature.
- **API Documentation**: Swagger-based documentation for each endpoint.
- **Security Measures**: Use of HTTPS, JWTs, password hashing with bcrypt.

## 9. Testing & QA
- **Backend Testing**: Unit tests with JUnit for all service layers.
- **Frontend Testing**: Use of React Testing Library for UI components.
- **Integration Testing**: Comprehensive end-to-end testing using Spring Boot Test.

## 10. Future Scope
- **AI-based Predictions**: Expense forecasting and budgeting advice using machine learning.
- **External API Integrations**: Support for financial and bank API connections.
- **Mobile Application**: Development of a mobile application with React Native.

## 11. Appendix

### API Endpoints
- **User Authentication**: Endpoints for user registration, login, and profile.
- **Transaction Management**: CRUD operations for managing income and expenses.
- **Budget and Goal Management**: Endpoints to create and update budgets and goals.

### Sample JSON Requests
- Example JSON format for common API requests and responses.

### References & Resources
- Relevant links, tutorials, and documentation for further reading.
---
