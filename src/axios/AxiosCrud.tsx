import axios from "axios";

export default function AxiosCrud() {
  const fetchGet = async () => {
    // { data } : 이렇게 중괄호로 가져오면 구조분해 할당해서 가져온다 라고 한다.
    const { data, status } = await axios.get("http://localhost:3000/posts");
    console.log(data, status);
  };

  const fetchPost = async () => {
    const { data } = await axios.post("http://localhost:3000/posts", {
      title: "a axios data",
      view: 50,
    });
    console.log(data);
  };

  const fetchPut = async () => {
    const { data } = await axios.put("http://localhost:3000/posts/101", {
      title: "a axios data2",
      view: 100,
    });
    console.log(data);
  };

  const fetchPatch = async () => {
    const { data } = await axios.patch("http://localhost:3000/posts/101", {
      title: "a axios data3",
      view: 100,
    });
    console.log(data);
  };
  const fetchDelete = async () => {
    const { data, status } = await axios.delete(
      "http://localhost:3000/posts/101"
    );
    console.log(data, status);
  };
  return (
    <>
      <button onClick={fetchGet}>GET</button>
      <button onClick={fetchPost}>POST</button>
      <button onClick={fetchPut}>PUT</button>
      <button onClick={fetchPatch}>PATCH</button>
      <button onClick={fetchDelete}>DELETE</button>
    </>
  );
}
