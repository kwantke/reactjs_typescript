import { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { axiosInstance } from "./api/axios";
import { InView, useInView } from "react-intersection-observer";
export default function Movie() {
  const [nowData, setNowData] = useState<MovieType[]>([]);
  const [nowLoading, setNowLoading] = useState(false);
  const [nowError, setNowError] = useState<Error | null>(null);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  // const [popData, setPopData] = useState<MovieType[]>([]);
  // const [popLoading, setPopLoading] = useState(false);
  // const [popError, setPopError] = useState<Error | null>(null);

  // const [topData, setTopData] = useState<MovieType[]>([]);
  // const [topLoading, setTopLoading] = useState(false);
  // const [topError, setTopError] = useState<Error | null>(null);

  const { ref } = useInView({
    threshold: 0.5, // 얼마만큼 그 영역이 보여야 랜더링을 하겠는가
    rootMargin: "200px", // 얼마만큼 여백을 남길것이냐
    onChange: (inView: boolean) => {
      //스크롤이 바닥에 닿으면 발생하는 이벤트
      if (inView && !nowLoading && hasMore) {
        setPage((page) => page + 1);
      }
    },
  });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchCategory = async (
      endpoint: string,
      setData: React.Dispatch<React.SetStateAction<MovieType[]>>,
      setLoading: React.Dispatch<React.SetStateAction<boolean>>,
      setError: React.Dispatch<React.SetStateAction<Error | null>>
    ) => {
      setLoading(true);
      setError(null);
      await new Promise((resolve) =>
        setTimeout(
          resolve,
          [3000, 4000, 5000, 6000, 7000][Math.floor(Math.random() * 5)]
        )
      );
      try {
        const {
          data: { results, total_pages },
        } = await axiosInstance.get(`/${endpoint}?page=${page}`, {
          signal,
        });
        setHasMore(page < total_pages);
        if (page === 1) setData(results);
        else setData((data) => [...data, ...results]);
        console.log(results);
        //setData(results);
      } catch (e) {
        if (e instanceof Error && e.name !== "CanceledError") setError(e);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };
    fetchCategory("now_playing", setNowData, setNowLoading, setNowError);
    // fetchCategory("popular", setPopData, setPopLoading, setPopError);
    // fetchCategory("top_rated", setTopData, setTopLoading, setTopError);
    return () => controller.abort();
  }, [page]);
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
      <div ref={ref}></div>
      {/* <MovieList
        title="Popular"
        movies={popData}
        loading={popLoading}
        error={popError}
      />
      <MovieList
        title="Top Rated"
        movies={topData}
        loading={topLoading}
        error={topError}
      /> */}
    </>
  );
}
