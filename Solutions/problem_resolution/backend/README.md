# Project Backend Setup

This document outlines the steps to set up and run the backend of the project.

## Prerequisites

Before starting, ensure you have the following installed on your system:
- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
- **npm**: Comes bundled with Node.js, but verify it's installed by running `npm -v` in your terminal.

## Setup Instructions

1. **Navigate to the Backend Directory**
   - Open your terminal and change to the frontend directory
     cd problem_resolution/backend


2. Install Dependencies
Run the following command to install all required packages:
- npm install


3. Start the application
- npm start

4. Access.
- The backend api will be accessible at http://localhost:3001.
- The end point use as a POST is the following:
    http://localhost:3001/api/v1/calculate-scores
- The front end sends a payload in this json format, for example:
    {"scores":[5,5,1,4,5]} 


# Thank you