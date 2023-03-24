import useData from "./useData";
import genre from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return { data: genre, isLoading: false, error: null };
};

export default useGenres;
