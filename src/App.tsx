import React, { lazy,useState } from "react";
// import ChildA from "./components/child/ChildA";
// import ChildB from "./components/child/ChildB";
// const ChildA = React.lazy(() => import("./components/child/ChildA"));
const ChildA = lazy(() => import("./components/child/ChildA"));
const ChildB = lazy(() => import("./components/child/ChildB"));

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
      {isShow && (
        <>
          <ChildA />
          <ChildB />
        </>
      )}
    </>
  );
}
