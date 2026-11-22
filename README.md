# FocusBoard

A responsive, single-user task management dashboard built with React and Vite, featuring full CRUD operations, combined search and filtering, dynamic overview statistics, a three-slide Focus Notes carousel, and browser persistence via `localStorage`.

## Links
- **Live Hosted URL:** https://focusboard-steel.vercel.app
- **GitHub Repository:** https://github.com/KonakanchiBrahmam/focusboard

## Tech Stack
- React (Hooks)
- Vite
- JavaScript (ES6+)
- CSS3 (Responsive Grid/Flexbox + Media Queries)
- Lucide React (Icons)

## Key Features
- **Dynamic Statistics:** Real-time calculation of Total Tasks, In Progress, Completed, and Completion Percentage.
- **Task CRUD:** Create, edit, and delete tasks (with confirmation dialog) using a single reusable modal form with validation.
- **Quick Status Updates:** Inline status selector (`To do`, `In progress`, `Completed`) on every task card.
- **Combined Search & Filtering:** Case-insensitive title search, status tabs (`All`, `To do`, `In progress`, `Completed`), and priority filter (`All`, `High`, `Medium`, `Low`).
- **Focus Notes Carousel:** Three-slide carousel with Previous/Next buttons and clickable slide indicators.
- **Browser Persistence:** Automatically saves and restores tasks in `localStorage` under the `focusboard_tasks` key.
- **Responsive & Accessible:** Tested at `1440px`, `768px`, and `390px` with semantic HTML, labels, and keyboard focus indicators.

## Project Structure
```text
focusboard/
├── screenshots/
│   ├── desktop.png
│   └── mobile.png
├── src/
│   ├── components/
│   │   ├── FilterTabs.jsx
│   │   ├── FocusNotes.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   ├── data/
│   │   └── sampleTasks.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── AI_USAGE.md
├── package.json
└── README.md