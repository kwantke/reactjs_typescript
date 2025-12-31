import { useEffect, useState } from "react";

interface Posts {
  id: number;
  title: string;
  views: number;
}
export default function Fetch() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    setError("");
    fetch("http://localhost:3000/postsf")
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
        setError(e instanceof Error ? e.message : "unknown error");
      })
      .finally(() => {
        setIsLoading(false);
      });
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
