# Varicon Dashboard

This project is a sample dashboard application built using modern web technologies, primarily focused on creating a responsive and visually appealing user interface. The application is designed using React and Material-UI, with a customized theme that aligns with Varicon's design guidelines.

## Table of Contents

- [Varicon Dashboard](#varicon-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Project Overview](#project-overview)
  - [Installation and Setup](#installation-and-setup)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
- [Contributing](#contributing)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Material-UI (MUI)**: A popular React UI framework that provides components that follow Google's Material Design.
- **Vite**: A fast development build tool for modern web projects.
- **React Query**: For managing server-state and caching.
- **Axios**: A promise-based HTTP client for making API requests.
- **Context API**: For managing global state in a React application.
- **MUI Theming**: Custom theming of Material-UI components to match Varicon's design guidelines.

## Project Overview

The Varicon Dashboard is a front-end project aimed at demonstrating the implementation of a responsive dashboard layout. The project showcases how to:

- Use Material-UI to create a modern UI/UX experience.
- Implement a custom theme to align with a company's branding.
- Manage layout and routing in a React application.
- Use React Query and Axios for handling API requests and caching.
- Employ Context API for global state management.

## Installation and Setup

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14 or later)
- **npm** (v6 or later) or **yarn**

### Steps

1. **Clone the repository**

   ```bash
    git clone git@github.com:pradip-varicon/Dashboard-Practice.git
    cd Dashboard-Practice
    ```


2. **Install dependencies**
  If you're using `npm`:
   ```bash
    npm install
    ```

3. **Run the development server**
  To start the application in development mode, use:
   ```bash
    npm run dev
    ```
4. **Open in your browser**
   Visit http://localhost:5173 to view the application in your browser.

# Project Structure

The project structure is organized as follows:
```bash
varicon-dashboard/
├── public/
├── src/
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── components/         # Reusable UI components
│   ├── pages/              # Pages of the application
│   ├── theme/              # MUI theme and custom styles
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point for the application
│   ├── index.css           # Global styles
│   └── vite-env.d.ts       # Vite environment declaration file
├── .gitignore
├── index.html              # Main HTML template
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

# Contributing
I welcome contributions to improve this project. To contribute, please follow the following steps.
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.
