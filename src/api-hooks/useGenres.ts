import { useQuery } from "@tanstack/react-query";
import api from "../utils/axoisInstance";

// نوع الجينر
export interface Genre {
  id: number;
  name: string;
}

// دالة جلب الجينرات من TMDB
const fetchGenres = async (): Promise<Genre[]> => {
  const { data } = await api.get("/genre/movie/list");
  return data.genres;
};

// هوك مخصص لاستدعاء الجينرات
export const useGenres = () => {
  return useQuery<Genre[]>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 1000 * 60 * 60, // ساعة كاملة كـ cache
    retry: 1, // إعادة المحاولة مرة واحدة لو فشل
  });
};
