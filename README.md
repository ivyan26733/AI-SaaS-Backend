# AI SaaS Chatbot Backend

This repository contains the backend code for an AI SaaS chatbot application.

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd AI-SaaS-Chatbot
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

    This will install all the required dependencies for the project.

4. **Set up environment variables:**

    Create a `.env` file in the root directory of the project and add the following environment variables:

    ```
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

    Replace `your_mongodb_uri` with your MongoDB connection URI, and `your_jwt_secret` with a secret key for JWT token generation.

5. **Start the development server:**

    ```bash
    npm start
    ```

    This will start the development server. You should see a message indicating that the server is running.

6. **Access the API:**

    You can now access the API at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request if you find any issues or want to contribute to the project.

## License

This project is licensed under the [MIT License](LICENSE).
