# Pet Health App

## Project Overview

The Pet Health App is a web application designed to help users manage their pets' information in one place. This project is being developed as part of my Application Development coursework, with a focus on responsive design, reusable components, navigation, and database integration.

## Technologies Used

- React
- Vite
- JavaScript
- React Router
- Supabase
- CSS
- ESLint
- Git and GitHub

## Current Features

- React and Vite project setup
- Application routing with React Router
- Shared application layout and header
- Login page
- Dashboard with navigation cards
- My Pets page with pet cards
- Pet search by name, species, or breed
- Species filtering
- Add Pet page with a structured form interface
- Responsive layout and styling
- Supabase client configuration
- Organized project structure

**Note:** The Add Pet form is currently a user interface. Saving new pet records to Supabase is planned for a future development stage.

## Project Structure

```text
development pethealth/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   └── BackButton.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Pets.jsx
│   │   ├── AddPet.jsx
│   │   └── Profile.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── supabaseClient.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Running the Project Locally

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a local `.env` file and configure the required Supabase environment variables.
4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite.

To create a production build:

```bash
npm run build
```

## Development Progress

### Week 1: Supabase Client Setup

**Task: Configure Supabase Client**

- Created the Supabase client configuration.
- Connected the application using environment variables.
- Updated `.gitignore` to prevent environment files and secrets from being committed.
- Verified that the application loaded without errors.

**Pull request:** [Configure Supabase client — PR #1](https://github.com/DennizGarza1234/Development-PetHealth/pull/1)

### Week 2: Project Setup and Application Structure

**Total time: 3 hours 20 minutes**

**Task 1: Project Setup and Environment — 1 hour**
- Set up the React and Vite development environment.
- Installed and configured project dependencies.

**Task 2: Application Structure and Routing — 1 hour 15 minutes**
- Organized the application into reusable components and page files.
- Set up application routing and the shared layout.

**Task 3: Initial Pages and Documentation — 1 hour 5 minutes**
- Developed the initial application pages.
- Documented the project structure and setup instructions.

### Week 3: Pet Management Features

**Total time: 3 hours 19 minutes**

**Task 1: Pet Management Interface and Styling — 45 minutes**
- Created pet cards with sample pet information.
- Improved the layout and styling of the My Pets page.

**Task 2: Pet Search and Species Filtering — 40 minutes**
- Added search functionality for pet names, species, and breeds.
- Added a species filter and dynamic pet count.

**Task 3: Add Pet Navigation and Empty State — 1 hour 19 minutes**
- Added navigation to the Add Pet page.
- Improved the page's empty-state behavior.

**Task 4: Testing and Git Workflow — 35 minutes**
- Tested the pet management interface.
- Committed the changes and merged the feature pull request.

**Pull request:** [Add pet management features — PR #2](https://github.com/DennizGarza1234/Development-PetHealth/pull/2)

### Week 4: Responsive Layout and Dashboard Improvements

**Estimated total time: 3 hours 30 minutes**

**Task 1: Responsive App Layout — 35 minutes**
- Updated the root layout to use the available viewport width.
- Added a maximum content width and minimum viewport height.
- Tested existing pages to confirm they continued to display correctly.

**Pull request:** [Improve responsive app layout — PR #3](https://github.com/DennizGarza1234/Development-PetHealth/pull/3)

**Task 2: Shared Layout and Header — 35 minutes**
- Added a consistent shared header and main content area.
- Improved layout consistency across the application.

**Task 3: Add Pet Form Interface — 55 minutes**
- Added fields for pet name, species, breed, and age.
- Added labels, placeholders, input focus styling, and responsive spacing.
- Prepared the interface for future form functionality.

**Task 4: Dashboard Navigation — 45 minutes**
- Added dashboard cards linking to My Pets and Add a Pet.
- Added responsive card styling, hover states, and keyboard focus styling.

**Task 5: Testing and Git Workflow — 40 minutes**
- Tested the shared header, Add Pet page, and dashboard navigation.
- Committed the changes and merged the feature pull request.

**Pull request:** [Improve shared layout and dashboard navigation — PR #4](https://github.com/DennizGarza1234/Development-PetHealth/pull/4)

## Future Development Goals

- Connect pet management forms to Supabase.
- Save, retrieve, edit, and delete pet records.
- Add pet health records, vaccinations, and appointment tracking.
- Improve form validation and error handling.
- Continue improving accessibility and responsive design.
- Add automated tests for key application features.

## Repository

[Development-PetHealth on GitHub](https://github.com/DennizGarza1234/Development-PetHealth)
