# Mern-on-a-Plate v1.0

## Description

Quick template for a basic MERN stack app.

## Features

- Basic folder structure in client and server sections
- Express is ready to dev and production
- Startup scripts
- Sample API/Controller to test Vite proxy
- Connection to MongoDB using Mongoose
- .gitignore for Windows, MacOS, and Node

## Getting Started

To get started, clone the repo to your system.

Create a .env file in the root of the project with the following information:

PORT="3001"

MONGOURI="mongodb://localhost:27017" (edit this for your server)

1. Run "npm i" to get initial requierments installed
2. Run "npm run install" to run main install script.
3. Run "npm run dev" to start Express and Vite.

Vite enviroment will run on port 3000 and proxy all /api request to express on 3001.

# Hope you find this useful!
