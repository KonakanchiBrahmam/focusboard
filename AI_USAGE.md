\# AI Usage Disclosure



\## Tools Used

\- Gemini (AI Assistant)



\## Representative Prompts

1\. "Explain the main requirements and deliverables from the FocusBoard assignment PDF."

2\. "Generate the React + Vite folder structure, sampleTasks.js, and useLocalStorage.js hook."

3\. "Create reusable components for TaskForm, FilterTabs, SearchBar, and the 3-slide FocusNotes carousel."

4\. "Provide responsive CSS rules for 1440px, 768px, and 390px viewports."



\## AI-Assisted Areas

\- Component scaffolding and folder structure

\- `useLocalStorage` hook and derived statistics logic

\- Responsive CSS layout and accessibility attributes



\## Verified or Corrected Suggestion

\- \*\*What was checked:\*\* Initial `npm create vite@latest` setup and `TaskForm` modal state.

\- \*\*Correction made:\*\* Ran `npm install`, `npm install lucide-react`, and `npm run dev` individually in PowerShell, and wrapped `TaskForm` in `{isFormOpen \&\& ...}` with a `key` prop in `App.jsx` so the modal opens/closes properly without `useEffect` warnings.

