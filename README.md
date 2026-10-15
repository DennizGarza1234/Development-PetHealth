# Pet Health App

A web application designed to help pet owners organize and manage information about their pets and their health.

## Project Overview

The Pet Health App provides a central location for users to manage their pets and access health-related information. The application is being developed with a focus on a clear structure, simple navigation, and an organized user experience.

## Technologies

* React
* Vite
* JavaScript
* React Router
* Supabase
* ESLint

## Current Features

* React/Vite application setup
* Application routing with React Router
* Shared application layout
* Login page
* Dashboard page
* Pets page
* Organized page and component structure
* Production build configuration

## Application Structure

```text
src/
├── App.jsx
├── main.jsx
├── index.css
├── App.css
├── components/
│   └── Layout.jsx
└── pages/
    ├── Login.jsx
    ├── Dashboard.jsx
    └── Pets.jsx
```

## Development

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

## Development Goals

Future development will expand the application with additional pages, pet management functionality, health-related information, improved navigation, responsive design, accessibility improvements, testing, and additional user interactions.

## Development Week 2 Progress

**Total Hours**

* **Total Hours Contributed:** 3 hours 20 minutes

**Task Breakdown & Proof of Work**

**Task 1**

* **Task/Activity:** Project setup and development environment configuration
* **Time:** 1 hour
* **Proof of Work:** Initialized the Vite React project, configured the project with ESLint, installed the required React Router and Supabase dependencies, removed the default Vite template assets, and verified that the production build completed successfully.
* **Link (if applicable):** N/A

**Task 2**

* **Task/Activity:** Application structure and routing
* **Time:** 1 hour 15 minutes
* **Proof of Work:** Established the React application entry point, configured React Router, created the shared `Layout` component, created the `pages` directory, and established routes for the login, dashboard, and pets sections of the application.
* **Link (if applicable):** N/A

**Task 3**

* **Task/Activity:** Initial pages and project documentation
* **Time:** 1 hour 5 minutes
* **Proof of Work:** Created the Login, Dashboard, and Pets pages, connected the pages to the application routing structure, verified the application through the development server and production build, and created the initial project README documenting the application's purpose, technologies, current features, structure, development commands, and goals.
* **Link (if applicable):** N/A

## Development Week 3 Progress

### Total Hours

- **Total Hours Contributed:** 3 hours 19 minutes

### Task Breakdown & Proof of Work

#### Task 1

- **Task/Activity:** Pet Management interface and styling
- **Time:** 45 minutes
- **Proof of Work:** Styled pet cards, improved the responsive card layout, added hover effects, improved dropdown readability, and supported reduced-motion preferences.
- **Link (if applicable):** Pet Management pull request

#### Task 2

- **Task/Activity:** Pet search and species filtering
- **Time:** 40 minutes
- **Proof of Work:** Implemented search functionality for pet names, species, and breeds; added a species dropdown filter; created a dynamic count of matching pets; and added a no-results message.
- **Link (if applicable):** Pet Management pull request

#### Task 3

- **Task/Activity:** Add Pet navigation and empty-state handling
- **Time:** 1 hour 19 minutes
- **Proof of Work:** Added an Add Pet button using React Router navigation, created an empty-state message for when no pets are registered, and styled the message to match the application's design.
- **Link (if applicable):** Pet Management pull request

#### Task 4

- **Task/Activity:** Testing, Git workflow, and pull request
- **Time:** 35 minutes
- **Proof of Work:** Tested pet search, species filtering, dynamic result counts, and navigation. Committed the changes to the `feature/pet-management` branch and created a pull request to merge the work into `main`.
- **Link (if applicable):** Pet Management pull request