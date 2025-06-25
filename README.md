# movie-app
# React + TypeScript + TMDB Movies App

This project is a minimal setup using **React**, **TypeScript**, and **Vite** to build a movie browser app using **TMDB API**.

It supports movie search, favorite list, and movie details with an optimized UI using **React Query** and **Axios**.

## Features

- 🔍 Search for trending movies
- ❤️ Add/Remove from favorites
- 📄 Movie details view with rating & image
- ⚡ Fast development with Vite & React Query

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Query](https://tanstack.com/query/latest)
- [React Router v6](https://reactrouter.com/en/main)
- [Axios](https://axios-http.com/)
- [Sass Modules](https://sass-lang.com/)
- [TMDB API](https://www.themoviedb.org/)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser at:

```
http://localhost:5173/
```

## File Structure

```plaintext
src/
├── Components/
│   ├── Home/
│   ├── Favorites/
│   ├── Details/
│   ├── NavBar/
│   ├── Footer/
│   └── Layout/
│
├── API-hooks/
│   ├── useGetData.ts
│   ├── useSearch.ts
│   └── useDetails.ts
│
├── Styles/
│   └── App.module.scss
│
├── type/
│   └── interface.ts
│
├── App.tsx
└── main.tsx
```

## Notes

- Make sure to use your own TMDB `api_key` in API hook files.
- Currently supports **movies only**.

## Coming Soon

- Support for TV shows and multi search
- Login & session-based favorite list
- Responsive mobile enhancements

## Author

Made with ❤️ by [Kerolous Botros]
