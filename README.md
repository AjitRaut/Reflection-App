
This application allows users to register, generate unique feedback collection links, and view anonymous feedback on a dashboard. It was developed for the ThinkQuotient Coding Challenge, focusing on simplicity and user-friendliness.

---

## **Features**

1. **User Registration and Login**  
   - Users can register with an email and password.
   - Authenticated users can log in to access the application.

2. **Feedback Link Generation**  
   - After logging in, users can create a unique link to collect feedback.

3. **Anonymous Feedback Submission**  
   - Participants can submit feedback without logging in.
   - A "Thank You" message confirms submission.

4. **Feedback Dashboard**  
   - Users can view all feedback submissions in an organized, anonymous format.

---

## **Screenshots**

### Registration Page  
![Registration Page](client/public/assets/images/register.png)

### Login Page  
![Login Page](client/public/assets/images/login.png)

### Feedback Link Generation Page  
![Feedback Link Generation](client/public/assets/images/link-generate.png)

### Feedback Submission Page  
![Feedback Submission](client/public/assets/images/feedbackform.png)

### Dashboard View  
![Dashboard](client/public/assets/images/dashboard.png)

### User database
![User Database](client/public/assets/images/userdatabse.png)

### FeedBack database
![FeedBack Database](client/public/assets/images/feedBackdatabase.png)
---

## **Tech Stack**

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB 
- **Styling Framework**: Tailwind CSS  

---

## **Setup and Installation**

### Prerequisites  
- Node.js and npm installed.  
- MongoDB or the chosen database installed and running.

### Steps to Run the Project Locally 

1. Clone the repository:  
   ```bash
    git clone: https://github.com/AjitRaut/Reflection-App.git
   cd reflection-app


2. Install dependencies for the backend and frontend:
   For the backend:
   ```bash
   cd server
   npm install
   
   For the frontend:
   cd client
   npm install

3.Set up environment variables for your application:
  Create a .env file in the server folder with your MongoDB connection string and other required environment variables.

### Usage
1. Register: Sign up using an email and password.
2. Log in: Use your credentials to access the application.
3. Create Feedback Link: After logging in, create a unique link for collecting feedback.
4. Share the Feedback Link: Distribute the link to participants who can provide feedback without logging in.
5. View Feedback: Access your feedback dashboard to see all submitted responses.

### Version Information
Node.js: v16.x
React: v18.x
MongoDB: v6.x

### Author
Ajit Raut
Email: [ajitraut9561@gmail.com]
LinkedIn: [https://www.linkedin.com/in/ajit-raut-b1254222a/]
