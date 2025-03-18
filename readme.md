# Complex Fibonacci - Multi-Project Setup

This repository contains a multi-container application that computes Fibonacci numbers asynchronously using a worker process. The system is built with:

- **Vue.js** for the frontend
- **Express.js** for the server (API)
- **Redis** for the worker queue
- **NGINX** for routing


## Services

1. **Frontend (Vue.js)**
   - Provides a simple UI for users to input a Fibonacci index.
   - Communicates with the Express API.

2. **Backend (Express.js)**
   - Handles API requests from the frontend.
   - Stores computed Fibonacci results in PostgreSQL.
   - Pushes computational tasks to Redis.

3. **Worker (Node.js)**
   - Listens for Fibonacci computation requests from Redis.
   - Computes the Fibonacci sequence and stores results.

4. **NGINX**
   - Acts as a reverse proxy for the frontend and backend.
   - Handles request routing efficiently.

