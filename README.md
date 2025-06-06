Inventory app is a full-stack web application featuring a React frontend and a NestJS backend. It provides functionalities such as product listings, filtering, sorting, and pagination.

Features
Display a list of products with details.

Filter products based on attributes.

Sort products by various fields.

Paginate through product listings.

Responsive UI built with Material-UI.


Technologies Used
Frontend: React, TypeScript, Material-UI, Axios

Backend: NestJS, TypeScript

Containerization: Docker, Docker Compose


Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v18 or later)

Docker

Docker Compose

Installation
Clone the repository:


cd tenApp
Install dependencies:

# For frontend
cd client
npm install

# For backend
cd ../server
npm install

Running the Application
Using Docker Compose

docker-compose up --build
This will start both the frontend and backend services.

Frontend: http://localhost:3000

Backend API: http://localhost:3001

Running Manually
Start the backend:

cd server
npm run start


Start the frontend:

cd client
npm start