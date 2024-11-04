## **SpendSense - Tech Stack**

### **Frontend**

1. **React JS**  
   - **Why**: React offers a flexible way to build interactive user interfaces with a component-based structure, ideal for managing dynamic content updates (like dashboards, charts, etc.).

2. **React Router**  
   - **Why**: Enables seamless, client-side navigation for different views (e.g., Dashboard, Reports) without page reloads.

3. **Axios**  
   - **Why**: Axios handles HTTP requests with features like request/response interception, which is useful for token-based authentication and API calls.

4. **Chart.js / Recharts**  
   - **Why**: Used for financial data visualizations, making it easier for users to interpret trends in income, expenses, and savings.

### **Backend**

1. **Spring Boot**  
   - **Why**: Simplifies standalone, production-grade application development, especially for complex backend tasks like data processing and security.

2. **Spring Web**  
   - **Why**: Provides the essential features for creating RESTful APIs, handling HTTP requests, and routing, which are crucial for communication with the frontend.

3. **Spring Data JPA**  
   - **Why**: Offers easy CRUD operations for Java objects mapped to database tables, ideal for managing users, transactions, and budget data.

4. **Lombok**  
   - **Why**: Reduces boilerplate code (e.g., getters/setters) in entity classes, making code cleaner and more readable.

5. **MySQL Database**  
   - **Why**: A reliable, structured relational database to store and query user data, transactions, categories, and budget records.

6. **Validation Library (javax.validation)**  
   - **Why**: Ensures data integrity by validating user inputs before storing them, enhancing security and user experience.

7. **JWT (JSON Web Token)**  
   - **Why**: Enables secure, stateless user authentication, providing access to protected routes after login without requiring re-authentication.

8. **Maven**  
   - **Why**: Manages project dependencies and builds, ensuring a consistent development process with version control for Spring Boot dependencies.

### **Testing**

1. **JUnit**  
   - **Why**: JUnit facilitates unit tests for backend services and controllers, increasing reliability.

2. **Mockito**  
   - **Why**: A mocking framework that allows isolated testing by mocking dependencies, useful for testing service layers independently.

### **Deployment & DevOps**

1. **Docker**  
   - **Why**: Containerizes the application for consistent deployment across environments, packaging frontend and backend for easy scalability.

2. **Git & GitHub**  
   - **Why**: Provides version control and a central repository for code hosting, feature branching, and collaborative development.