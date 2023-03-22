import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";

interface Game {
  id: number;
  name: string;
}

interface FGR {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FGR>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error, setError, setGames };
};

export default useGames;
