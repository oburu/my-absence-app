# 🧾 Employee Absences Table

A **React + TypeScript** project built with **Vite** that displays employee absences in a dynamic, sortable, and paginated table.

---

## 🛠️ Tech Stack

- ⚡ **Vite** — Fast build tool and dev server
- 🧩 **React + TypeScript** — Component-based architecture with strong typing
- 🔍 **TanStack Query** — Server-state management and data fetching
- 📊 **TanStack Table** — Flexible and performant table library
- 🎨 **Material UI (MUI)** — Component library for styling
- 🧪 **Vitest**, **React Testing Library**, **MSW** — Testing stack

---

## 🚀 Features

- Displays **employee absences** data in a table
- Sort by:
  - Full Name
  - Date (From / To)
  - Absence Type
- **Pagination** — limits each API request to 10 results
- Click on a **Full Name** to filter data by that employee

---

## 🧩 Installation

```bash
npm install
```

## 💻 Development

```bash
npm run dev
```

## 🧪 Testing & Coverage

```bash
npm run coverage
```

This project uses:

- Vitest for unit testing
- React Testing Library for component testing
- MSW (Mock Service Worker) for API request mock

## 🌱 Future Enhancements

- 🧭 Sidebar: show more details when a name is clicked
- 🌗 Day/Night mode toggle
- 🔍 Search input to filter employees by name
