
# Clarionet Client

This is the client-side application for Clarionet. It is built using React and Vite, and it incorporates various libraries and tools for different functionalities.

## Features

- **Authentication:** JSON Web Tokens (JWT) are used for secure authentication.
- **Payment Integration:** Stripe is integrated for handling payments securely.
- **State Management:** Tanstack's React Query library is used for efficient state management.
- **Data Fetching:** Axios is employed for making HTTP requests to the server.
- **Database:** MongoDB is utilized for database operations.
- **Form Handling:** React Hook Form is used for handling forms with ease.
- **UI Components:** React Icons, React Loader Spinner, SweetAlert2, and more are used for enhancing the user interface.
- **Routing:** React Router DOM is employed for client-side routing.
- **Styling:** Tailwind CSS with DaisyUI for styling components.

## Scripts

- **dev:** Starts the development server using Vite.
```bash
npm run dev
```
- **build:** Builds the production-ready assets using Vite.
```bash
npm run build
```
- **lint:** Lints the source files using ESLint.
```bash
npm run lint
```


## Installation

1. Clone the repository:
```bash
git clone https://github.com/Joysd1010/Clarionet-Client-Side.git
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Configuration

Make sure to configure the following environment variables:

- **STRIPE_API_KEY:** Your Stripe API key for payment integration.
- **MONGODB_URI:** MongoDB connection URI for database operations.
- **JWT_SECRET:** Secret key for JSON Web Token generation.
