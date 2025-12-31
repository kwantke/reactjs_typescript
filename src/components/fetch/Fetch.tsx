import { useEffect, useState } from "react";

interface Posts {
  id: number;
  title: string;
  views: number;
}
export default function Fetch() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    //setIsLoading(true);
    //setError("");
    fetch("http://localhost:3000/posts", {
      signal: controller.signal,
    })
      .then((resposne) => {
        console.log(resposne);
        if (!resposne.ok) throw new Error("네트워크 통신 오류");
        return resposne.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((e) => {
        console.log("오류: " + e);
        if (e instanceof Error && e.name !== "AbortError") setError(e.message);
        //setError(e instanceof Error ? e.message : "unknown error");
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h3>Fetch</h3>
      <ul>
        {isLoading ? (
          <p>Loading... </p>
        ) : (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        )}
      </ul>
    </>
  );
}
