# Transcript Highlights

### 1. Planning the data model
Before writing code, I asked Cursor to help me design the localStorage schema for my journal entries. We discussed how to store `id`, `title`, `body`, and `date`, and how to structure the data to support search and CRUD operations.

### 2. Implementing CRUD with localStorage
Cursor helped me refactor the app to use a utility file (`journalStorage.js`) for all localStorage operations. This included `getEntries`, `addEntry`, `updateEntry`, and `deleteEntry`, making the code cleaner and more maintainable.

### 3. Adding the search feature
I asked Cursor to add a real-time search that filters entries by title or body. I made sure the results update as the user types and that empty or no-match states display clear guidance.

### 4. Debugging edge cases
We reviewed potential issues like legacy entries without `title`/`body` and storage errors (e.g., quota exceeded). Cursor provided warnings, and I tested these scenarios to ensure the app wouldn’t crash.

### 5. Improving UX and styling
Cursor suggested UX improvements like disabling the Add/Save button when inputs are empty, adding a Cancel Edit button, and styling the empty state. I also updated the app to feel calmer with soft blues and greens in `App.css`.