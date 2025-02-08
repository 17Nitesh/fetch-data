# React User Profile Card

## Overview

This project is a React application that fetches random user data from an API and displays it in a visually appealing profile card. It demonstrates the use of React hooks, asynchronous data fetching, and modern CSS styling with Tailwind CSS.

## Features

- Fetches random user data from the [Random User Generator API](https://randomuser.me/)
- Displays user information in a responsive, styled card layout
- Implements loading and error states for improved user experience
- Utilizes React hooks for state management and side effects
- Styled with Tailwind CSS for a modern, responsive design

## Installation

1. Clone the repository:
git clone https://github.com/your-username/react-user-profile-card.git
text

2. Navigate to the project directory:
cd react-user-profile-card
text

3. Install dependencies:
npm install
text

## Usage

To run the application in development mode:

npm start
text

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

- `src/App.js`: Main component containing the user profile card logic and layout
- `src/hooks/useFetch.js`: Custom hook for data fetching (if used)
- `public/index.html`: HTML template
- `tailwind.config.js`: Tailwind CSS configuration

## Dependencies

- React
- Tailwind CSS

## API

This project uses the [Random User Generator API](https://randomuser.me/api/?page=1&results=1&seed=abc) to fetch random user data.

## Customization

You can customize the appearance of the profile card by modifying the Tailwind classes in `App.js`. For more extensive style changes, you can edit the `tailwind.config.js` file.
