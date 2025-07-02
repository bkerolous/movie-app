# movie-app
# React + TypeScript + TMDB Movies App
🎬 React + TypeScript + TMDB Movies App

This is a powerful and minimal movie browser app built with React, TypeScript, and Vite, leveraging the official TMDB API.

It supports real-time movie search, detailed movie info, and managing your favorites directly on your TMDB account, with seamless UX powered by TanStack Query (React Query), Axios interceptors, and Optimistic UI updates.

🚀 Features

🔍 Search trending or specific movies in real-time

❤️ Add/remove favorites synced with your TMDB account

⚡ Optimistic UI: UI updates instantly before API response

🎥 View detailed movie info (poster, rating, overview, etc.)

🔒 Backend-proxy protected API key via secure environment setup

🔁 Auto-injected API credentials via Axios interceptors

🧪 Technologies Used

React

TypeScript

Vite

TanStack Query

Axios + Interceptors

React Router v6

Sass Modules

TMDB API

🛠 Getting Started

Install dependencies:

npm install

Add your TMDB credentials to ``:

VITE_API_KEY=your_api_key
VITE_SESSION_ID=your_session_id
VITE_ACCOUNT_ID=your_account_id

🔐 You can generate a session_id and account_id by logging into TMDB and following this guide.

Start the development server:

npm run dev

Open your browser at:

http://localhost:5173/

📁 File Structure

src/
├── components/
│   ├── Home/
│   ├── Favorites/
│   ├── Details/
│   ├── Layout/
│   └── Shared/
│       ├── NavBar/
│       └── Footer/
│
├── api-hooks/
│   ├── useGetData.ts
│   ├── useSearchData.ts
│   ├── useDetails.ts
│   ├── useGetFav.ts
│   └── useMutationFav.ts
│
├── utils/
│   └── axiosInstance.ts
│
├── styles/
│   └── App.module.scss
│
├── type/
│   └── interface.ts
│
├── App.tsx
└── main.tsx

⚠️ Notes

API requests are handled through Axios interceptors to securely inject credentials.

Favorites are synced directly with TMDB (no fake data or local state).

Error handling and session validation included.

Only movies are supported for now — TV and multi-search coming soon.

📌 Coming Soon

📺 Support for TV shows & multi-type search

🔐 TMDB login + dynamic session & token handling

📱 Fully responsive mobile-first design

👨‍💻 Author

Made with ❤️ by Kerolous Botros

