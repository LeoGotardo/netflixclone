
# Netflix Clone

A Netflix-like application built to replicate the core functionalities and user interface of the popular streaming service.

## Features

- **User Authentication**: Secure sign-up and login functionality.
- **Movie Browsing**: Explore a wide range of movies and TV shows.
- **Search Functionality**: Quickly find content by title or genre.
- **Responsive Design**: Optimized for various devices, including desktops, tablets, and mobile phones.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/LeoGotardo/netflixclone.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd netflixclone
   ```

3. **Install server dependencies**:

   ```bash
   cd server
   npm install
   ```

4. **Install client dependencies**:

   ```bash
   cd ../netflixApp
   npm install
   ```

5. **Set up environment variables**:

   Create a `.env` file in the `server` directory with the following content:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

6. **Start the server**:

   ```bash
   cd ../server
   npm start
   ```

7. **Start the client**:

   ```bash
   cd ../netflixApp
   npm start
   ```

8. **Access the application**:

   Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Sign Up**: Create a new account using your email and a password.
- **Log In**: Access your account with your credentials.
- **Browse Content**: Explore available movies and TV shows.
- **Search**: Use the search bar to find specific titles or genres.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit your changes**:

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Inspired by Netflix's design and functionality.
- Thanks to the open-source community for the tools and resources.
```
