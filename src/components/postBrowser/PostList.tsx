import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { axiosInstance } from "../../api/axios";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import { usePostStore } from "./store/postStore";
import NoData from "./NoData";

export default function PostList() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const currentPage = usePostStore((state) => state.currentPage);
  const term = usePostStore((state) => state.term);
  const limit = usePostStore((state) => state.limit);
  useEffect(() => {
    const controller = new AbortController();
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(
          `/postds?_page=${currentPage}&_limitt=${limit}&q=${encodeURIComponent(
            term
          )}`,
          {
            signal: controller.signal,
          }
        );
        setPosts(data);
      } catch (e) {
        if (e instanceof Error && e.name !== "CanceledError")
          setError(e.message);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };
    fetchPosts();
    return () => controller.abort();
  }, [currentPage, limit, term]);
  return (
    <div className="mb-8">
      {/* 데이터가 없을 때 */}
      {/* <NoData /> */}
      {/* 로딩 중일 때 */}
      {/* <LoadingState /> */}
      {/* 에러가 발생했을 때 */}
      {/* <ErrorState /> */}
      {/* 데이터가 있을 때 */}
      {isLoading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState />
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
}
