# Simple Web Server

This project sets up a basic web server using raw Node.js without any external libraries like Express.

## Routes

- **/name**: Responds with my full name.
- **/hobby**: Responds with my favorite hobby or activity as a JSON object.
- **/dream**: Responds with a motivational message about my dream.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)

### Installing

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies (though none are needed here, as we're using raw Node.js).

### Running the Server Locally

Run the following command to start the server:

```bash
node server.js
```

The server will be running at `http://localhost:3000`.

### Testing the Routes

- Go to `http://localhost:3000/name` to see the response with my full name.
- Go to `http://localhost:3000/hobby` to see the response with my favorite hobby.
- Go to `http://localhost:3000/dream` to see the response with my motivational message.
