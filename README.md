# 🎬 MovieDex

**MovieDex** is a powerful and minimal movie browser app built with **React**, **TypeScript**, and **Vite**, leveraging the official **TMDB API**.

It supports real-time movie search, detailed movie info, genre filtering, and managing your favorites directly on your TMDB account. The UX is seamless thanks to **TanStack Query**, **Axios interceptors**, and **Optimistic UI** updates.

---

## 🚀 Features

- 🔍 **Search** trending or specific movies in real-time  
- 🧩 **Filter by genre** with dropdown from TMDB API  
- 📄 **Pagination** powered by TMDB API  
- 🔎 **Search + Pagination**: Combine search with pagination  
- ❤️ **Add/remove favorites** synced with your TMDB account  
- ⚡ **Optimistic UI**: UI updates instantly before API response  
- 🎥 **Movie details page** (poster, rating, overview, genres, etc.)  
- 🔒 **Secure API integration** via backend proxy or environment vars  
- ♻️ **Axios interceptors** to auto-inject credentials  
- 📱 **Responsive design** for mobile & desktop  
- 🧱 **Modular folder structure** with Sass modules  

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

### Add your TMDB credentials to `.env` file:

```env
VITE_API_KEY=your_api_key
VITE_SESSION_ID=your_session_id
VITE_ACCOUNT_ID=your_account_id
```

🔐 You can generate a session ID and account ID by logging into TMDB and following their [official guide](https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id).

---

### Start the development server

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

---

## 🔗 Live Demo & Repo

- 🌐 **Live**: [https://eg-moviedex.netlify.app](https://eg-moviedex.netlify.app)  
- 📦 **Repo**: [github.com/bkerolous/movie-app](https://github.com/bkerolous/movie-app)

---

## 📁 File Structure

```
src/
├── api-hooks/
│   ├── useGetData.ts
│   ├── useSearchData.ts
│   ├── useDetails.ts
│   ├── useGetFav.ts
│   ├── useGenres.ts
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

- API calls use Axios interceptors to auto-inject `api_key`, `session_id`, and `account_id`.
- Favorites are synced with your actual TMDB account – not stored locally.
- Pagination is fully driven by TMDB's `page` param.
- Genre dropdown is populated from the TMDB genres API.
- Search and trending logic are separated to prevent mixing results.
- While searching, pagination is disabled to keep the UX clean (can be extended).
- Fully modular codebase with reusable components and Sass styling.

---

## 📌 Coming Soon

- 📺 TV shows & multi-type content support  
- 🔐 TMDB login + dynamic session auth  
- 🌍 Infinite scroll option for better UX  

---

## 👨‍💻 Author

Built with ❤️ by [Kerolous Botros](https://github.com/bkerolous)