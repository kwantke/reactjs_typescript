import { useEffect, useState } from "react";

interface Posts {
  id: number;
  title: string;
  views: number;
}
export default function Fetch() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/posts")
      .then((resposne) => {
        console.log(resposne);
        return resposne.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
