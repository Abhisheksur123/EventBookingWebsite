# Event Booking Website

This is a web application for booking events. The application allows users to browse, book, and manage events easily. 

## Features

- **User Registration and Authentication**: Secure user sign-up and login functionalities.
- **Event Listings**: Browse and search for events.
- **Booking System**: Book tickets for events.
- **User Dashboard**: Manage bookings and view event history.
- **Admin Panel**: Manage events, view bookings, and handle user management.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Docker, Heroku

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Abhisheksur123/EventBookingWebsite.git
    cd EventBookingWebsite
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=3000
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```

4. **Start the application**:
    ```sh
    npm start
    ```

    The application should now be running on `http://localhost:3000`.

## Usage

### User Registration and Login

1. Visit the homepage and navigate to the registration page to create a new account.
2. Use your credentials to log in.

### Browsing Events

1. After logging in, browse through the available events.
2. Use the search functionality to find specific events.

### Booking Events

1. Select an event to view its details.
2. Click on the "Book Now" button to reserve your tickets.

### Managing Bookings

1. Go to your user dashboard to view your bookings.
2. Cancel or manage your bookings as needed.

### Admin Panel

1. Log in with admin credentials to access the admin panel.
2. Manage events, view bookings, and handle user management.

## Contributing

We welcome contributions to improve this project! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please contact [Abhishek Sur](mailto:abhisheksur99@gmail.com).

---

Thank you for using the Event Booking Website! We hope it makes your event management and booking process seamless and efficient.
