import { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { axiosInstance } from "./api/axios";

export default function Movie() {
  const [nowData, setNowData] = useState<MovieType[]>([]);
  const [nowLoading, setLoading] = useState(false);
  const [nowError, setError] = useState<Error | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchCategory = async (
      endpoint: string,
      setNowData: React.Dispatch<React.SetStateAction<MovieType[]>>,
      setLoading: React.Dispatch<React.SetStateAction<boolean>>,
      setError: React.Dispatch<React.SetStateAction<Error | null>>
    ) => {
      setLoading(true);
      setError(null);
      try {
        const {
          data: { results },
        } = await axiosInstance.get(`/${endpoint}`, {
          signal,
        });
        console.log(results);
        setNowData(results);
      } catch (e) {
        if (e instanceof Error && e.name !== "CanceledError") setError(e);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };
    fetchCategory("now_playing", setNowData, setLoading, setError);
    return () => controller.abort();
  }, []);
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList
        title="Now Playing"
        movies={nowData}
        loading={nowLoading}
        error={nowError}
      />
    </>
  );
}
