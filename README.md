HEAD
# movie-app
# React + TypeScript + TMDB Movies App
🎬 React + TypeScript + TMDB Movies App


This is a powerful and minimal movie browser app built with **React**, **TypeScript**, and **Vite**, leveraging the official **TMDB API**.

It supports real-time movie search, detailed movie info, and managing your favorites directly on your TMDB account, with seamless UX powered by **TanStack Query**, **Axios interceptors**, and **Optimistic UI** updates.

---

## 🚀 Features

- 🔍 **Search** trending or specific movies in real-time  
- ❤️ **Add/remove favorites** synced with your TMDB account  
- ⚡ **Optimistic UI**: UI updates instantly before API response  
- 🎥 **View details** (poster, rating, overview, etc.)  
- 🔒 **Backend-proxy protected API keys** via secure setup  
- 🔁 **Auto-injected credentials** using Axios interceptors  
- 📱 **Responsive UI**: mobile & desktop layouts  
- 📂 **Clean modular structure** with Sass Modules  

---

## 🧪 Technologies Used

- React  
- TypeScript  
- Vite  
- TanStack Query (React Query)  
- Axios (+ Interceptors)  
- React Router v6  
- Sass Modules  
- TMDB API  

---

## 🛠 Getting Started

### Install dependencies

```bash
npm install
```

### Add your TMDB credentials in `.env` file:

```
VITE_API_KEY=your_api_key
VITE_SESSION_ID=your_session_id
VITE_ACCOUNT_ID=your_account_id
```

> 🔐 You can generate a session ID and account ID by logging into TMDB and following [TMDB's official guide](https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id).

---

### Start the development server

```bash
npm run dev
```

Open your browser at: [http://localhost:5173](http://localhost:5173)

---

## 📁 File Structure

```
src/
├── api-hooks/
│   ├── useGetData.ts
│   ├── useSearchData.ts
│   ├── useDetails.ts
│   ├── useGetFav.ts
│   └── useMutationFav.ts
│
├── components/
│   ├── Home/
│   ├── Favorites/
│   ├── Details/
│   ├── Layout/
│   └── Shared/
│       ├── NavBar/
│       └── Footer/
│
├── styles/
│   └── App.module.scss
│
├── utils/
│   └── axiosInstance.ts
│
├── type/
│   └── interface.ts
│
├── App.tsx
└── main.tsx
```

---

## ⚠️ Notes

- API requests use Axios interceptors to securely inject `api_key`, `session_id`, and `account_id`.
- Favorites are synced directly with TMDB (no local storage or fake data).
- Mobile navigation is conditionally rendered using media queries + `useState` logic.
- Fully modular with reusable components and Sass styles.

---

## 📌 Coming Soon

- 📺 TV shows & multi-type search support  
- 🔐 TMDB login + dynamic session & token auth  

---

## 👨‍💻 Author

Made with ❤️ by **Kerolous Botros**
