# Daily Journal App

## Deployed App
[Live Version](https://daily-journal-app-main.vercel.app/)

## Project Description
The Daily Journal App is a simple web application that allows users to record and manage their daily thoughts and activities. Users can create, view, edit, and delete journal entries, as well as search entries by title or body text. The app persists data in the browser using localStorage, ensuring entries remain available across sessions. The UI has been designed to be calm and friendly with a soft blue and green color palette.  

## Features
- Add new journal entries with a title and body  
- View a list of past entries  
- Edit existing entries  
- Delete entries  
- Search/filter entries by title or body  

## Tech Stack
- React (frontend framework)  
- Vite (build tool)  
- CSS (styling)  
- Netlify / Vercel (deployment)  
- Git/GitHub (version control)  

## Setup Instructions
1. Clone the repository:  
   ```bash
   git clone https://github.com/ivannahb18/daily-journal-app-main.git

2. Navigate to the project folder:

3. cd daily-journal-app-main

4. Install dependencies:

5. npm install

6. Start the local development server:

npm run dev
Open your browser and navigate to the displayed local URL (usually http://localhost:5173) to use the app.
## Known Bugs / Limitations
Search currently filters entries but does not highlight matched text.
Legacy localStorage entries created before the current schema (title/body/date) may cause errors if malformed.
localStorage is limited to the browser; data cannot be accessed from another device.
## What I Learned

This project helped me practice planning and iterating with AI assistance. I learned how to structure localStorage for CRUD operations, create reusable utility functions, and improve UX with real-time search and form validation. Using Cursor, I iterated on features step-by-step, debugging edge cases and polishing styling for a calm, user-friendly interface. This process reinforced the importance of testing, iteration, and clear documentation when building web applications.