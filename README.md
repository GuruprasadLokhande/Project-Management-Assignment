# Project Management Todo (Jira-like Board)

A lightweight Jira-like project management board built with React and Vite.

This project lets you create lists and cards (tasks), open forms in modals, validate inputs with Zod, and show toast notifications. It's styled with Tailwind CSS and uses `react-hook-form` for form state.

## Features

- Create and name lists
- Add cards with title and description
- Form validation powered by Zod and `react-hook-form`
- Reusable modal component using `@headlessui/react`
- Toast notifications with `react-hot-toast`
- Tailwind CSS-based styling and responsive layout

## Tech stack

- React 19
- Vite
- Tailwind CSS
- Zod (validation)
- react-hook-form
- @headlessui/react (modal)
- react-hot-toast

## Prerequisites

- Node.js 16+ (recommended)
- npm (comes with Node.js)

This project was developed and tested on Windows with PowerShell as the default shell.

## Install

From the project root (`d:\Vetty Assignment\ProjectManagementTodo`) run:

```powershell
npm install
```

This will install dependencies listed in `package.json`.

## Available scripts

The `package.json` in this project provides the following scripts (used below):

- `dev` — run the Vite dev server
- `build` — build the production bundle
- `preview` — locally preview the production build
- `lint` — run ESLint across the codebase

## Run (development)

Start the dev server (PowerShell):

```powershell
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`) in a browser. The dev server supports HMR so changes reload automatically.

## Build for production

```powershell
npm run build

# preview the production build locally
npm run preview
```

## Common issues & tips

- If CSS changes don't show, ensure Tailwind is configured and `postcss` is installed (this repo already includes Tailwind in `devDependencies`).
- If you see lint errors, run `npm run lint` and fix reported issues or adjust `.eslintrc` as needed.
- If the ports are in use, Vite will suggest an alternative port in the terminal.

## Development notes

- Forms use `zod` schemas in `src/lib/validations.js` and are wired through `react-hook-form`.
- The modal component is in `src/components/Modal.jsx` and is reused by the Add List and Add Card components.

## Contributing

Feel free to open issues or make pull requests. Small, focused changes with a short description are easiest to review.

## License

This repository does not include a license file. Add one if you plan to publish or share the project publicly.

---

If you'd like, I can also add a short development checklist (run commands, tests) or a contributor guide. Tell me what you'd prefer next.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
