
# SpendSense

**SpendSense** is a personal finance tracker that helps users manage their income, expenses, and budgets with ease. With an intuitive interface and powerful backend, SpendSense enables users to gain insights into their spending habits, set budgets, and make informed financial decisions.

## 🚀 Features

- **User Authentication**: Secure login and registration for personalized finance tracking.
- **Income & Expense Tracking**: Add and categorize income and expenses for easy record-keeping.
- **Budget Management**: Set budgets and monitor spending against targets.
- **Data Visualizations**: Visualize financial data with charts to track trends over time.
- **Reports**: Generate monthly and yearly reports for a comprehensive overview.
- **Secure Data Handling**: Ensures privacy and security for user financial data.

## 📂 Project Structure

This repository contains two main directories:

- **SpendSense Backend/**: Spring Boot server handling data management, authentication, and business logic.
- **SpendSense Frontend/**: React JS client for the user interface, providing tools for data entry, visualizations, and reports.

## 🛠️ Tech Stack

### Frontend
- **React JS**: For building an interactive user interface.
- **React Router**: Enables smooth navigation between different views.
- **Axios**: Manages API requests and data fetching.
- **Chart.js / Recharts**: Used for displaying income and expense trends.

### Backend
- **Spring Boot**: Framework for building the backend server with Java.
- **Spring Security**: Provides authentication and authorization.
- **Spring Data JPA**: Simplifies database interactions.
- **JWT (JSON Web Tokens)**: Ensures secure user sessions.
- **MySQL**: Database for storing user information, transactions, and budget records.
- **Lombok**: Reduces boilerplate code in Java classes.

### DevOps & Deployment
- **Docker**: For containerizing the application and ensuring consistent deployment.
- **Git & GitHub**: Version control and code hosting.
  
## 📈 Architecture

SpendSense follows a RESTful architecture, with React handling client-side logic and Spring Boot managing backend services. The database is managed with MySQL, providing a stable and efficient storage solution for user data.

## 📝 Setup Instructions

### Prerequisites
- **Node.js** and **npm** installed for the frontend.
- **Java** and **Maven** installed for the backend.
- **MySQL** server running locally or in the cloud.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AmanBhatt0910/SpendSense.git
   cd SpendSense
   ```

2. **Backend Setup:**
   - Navigate to the `backend` folder:
     ```bash
     cd SpendSense\ Backend/
     ```
   - Configure MySQL database connection in `application.properties`.
   - Build and run the backend:
     ```bash
     mvn spring-boot:run
     ```

3. **Frontend Setup:**
   - Navigate to the `frontend` folder:
     ```bash
     cd SpendSense\ Frontend/
     ```
   - Install dependencies and start the React development server:
     ```bash
     npm install
     npm start
     ```

4. Open your browser and go to `http://localhost:3000` to use SpendSense.

## 📊 Usage

1. **Register** as a new user or **log in** to your account.
2. **Add Income and Expenses** with details and categories.
3. **Set Budgets** and track your spending in real-time.
4. View **visualizations** and **reports** for a summary of your finances.

## 🧪 Testing

- **Frontend**: Test components using tools like Jest or React Testing Library.
- **Backend**: Run unit tests with JUnit and Mockito for the service and controller layers.

## 📈 Future Enhancements

- **Expense Notifications**: Get alerts when spending nears or exceeds the budget.
- **Multi-Currency Support**: Manage transactions in different currencies.
- **Advanced Reports**: Generate more detailed reports with filters and export options.

## 🤝 Contributing

Contributions are welcome! Please fork this repository and open a pull request to contribute to SpendSense.

---

**SpendSense** - Empowering you to take control of your financial health with ease and clarity.