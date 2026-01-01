import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axios";
import { useAxiosGet } from "../hooks/useAxiosGet";
interface Posts {
  id: number;
  title: string;
  views: number;
}
export default function Axios() {
  // const [posts, setPosts] = useState<Posts[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

  const { data: posts, isLoading, error } = useAxiosGet<Posts[]>("/posts");
  useEffect(() => {}, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h3>Axios</h3>
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
