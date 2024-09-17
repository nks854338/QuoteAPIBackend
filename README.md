# Quote API Backend

This is a backend API for managing quotes, built with Node.js, Express.js, and MongoDB. It supports CRUD operations for quotes, and utilizes middleware for efficient request/response handling.

## Features
- **GET**: Retrieve quotes or a single quote by ID.
- **POST**: Add new quotes.
- **PATCH**: Update existing quotes.
- **DELETE**: Remove quotes.
- **Middleware**: Handles CORS, logging, and error handling.

## API Endpoints

- **GET**: `/api/quotes` - Get all quotes
    ```bash
    GET /
    ```

- **POST**: `/api/quotes` - Add a new quote
    ```bash
    POST /api/quotes
    ```

- **PATCH**: `/quotes/:id` - Update a quote
    ```bash
    PATCH /api/quotes/:id
    ```

- **DELETE**: `/api/quotes/:id` - Delete a quote
    ```bash
    DELETE /quotes/:id
    ```

## Project Structure

```bash
.
├── controllers      # Handles quote CRUD logic
├── db               # database connection
├── models           # Mongoose models (e.g., Quote.js)
├── routes           # API routes (quoteRoutes.js)
└── index.js        # Main entry point

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/quote-api-backend.git
    cd quote-api-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file with the following:
    ```env
    MONGO_URI=<your-mongo-db-connection-string>
    PORT=6600
    ```

4. Start the server:
    ```bash
    npm run dev
    ```
