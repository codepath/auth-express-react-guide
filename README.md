# A Guide to User Authentication and Session Management (React + Express)

## Overview
This repository demonstrates how to implement various common use cases related to user authentication and session management using React, Express, and Postgresql (via Sequelize). 

The primary use cases that will be covered include:

1. Signing in/Signing up and redirecting to a logged in screen
2. Refreshing the page with user-specific elements post login
3. Remaining signed in after page reload
4. Logging out and redirecting to the home page
5. Fetching data customized for the signed in user
6. Redirecting to the home page when accessing a signed-in user only route

## Demo

[![Demo Video](https://raw.githubusercontent.com/codepath/auth-express-react-guide/main/images/demo.png)](https://www.loom.com/share/57bd05632e9b4b92935e044c6eebff59?sid=c11c299b-02f3-4624-b3a1-591f283b3c2f "Demo Video - Click to Watch!")

## Background
This section will discuss the architectural choices made during the creation of this repository. These include the choice between sessions/cookies vs jwt vs Auth0/Passport, and the pros and cons of each method.

## Implementation Milestones
Below are the user story-based milestones to start implementing in your application. Each milestone has a video walkthrough that explains how the code works, and how to bring it into your application.

### Prerequisites

In the milestones below, I'll assume that you already have a basic React and Express app (with Sequelize) set up that you'd like to add user authentication to. In this demo project, there is a React app at auth-demo-ui and an Express app at auth-demo-api.

### Milestone #1: User Registration / Login

In this milestone, we'll cover the basic scaffolding that you'll need in order to set up user registration and login. Read the basic steps below, and watch the video for more explanation.

**React**

1. Install required packages in your React app. Open Terminal, change to your React folder, and run the command below.

`npm install react react-dom react-router-dom`

2. Look at the LoginForm and SignupForm components, and copy them into your project.

3. Look at the BrowserRouter in App.jsx and adapt to your project.

**Express**

1. Install required packages in your Express app. Open Terminal, change to your Express folder, and run the command below.

`npm install bcrypt connect-session-sequelize cors express express-session morgan pg pg-hstore sequelize`

2. Look at routes/users.js, and copy that file into your project.

3. Look at server.js, and copy the sections related to cors, sessions, and adding the userRoutes.

[![Demo Video](https://raw.githubusercontent.com/codepath/auth-express-react-guide/main/images/demo.png)](https://www.loom.com/share/57bd05632e9b4b92935e044c6eebff59?sid=c11c299b-02f3-4624-b3a1-591f283b3c2f "Demo Video - Click to Watch!")

### Updating Website After Login
[![Updating Website After Login](https://via.placeholder.com/900x600.png)](https://www.loom.com/share/yourvideoid "Updating Website After Login - Click to Watch!")


