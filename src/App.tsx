import React, { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import ChildA from "./components/child/ChildA";
// import ChildB from "./components/child/ChildB";
// const ChildA = React.lazy(() => import("./components/child/ChildA"));
const ChildA = lazy(() => import("./components/child/ChildA"));
const ChildB = lazy(() => import("./components/child/ChildB"));

function Fallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>retry</button>
    </div>
  );
}
export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((isShow) => !isShow)}>토글</button>
      {isShow && (
        <>
          {/*ErrorBoundary: 오류 발생시 대체 ui 화면를 표시함  */}
          <ErrorBoundary fallback={<p>ChildB went wrong</p>}>
            {/*Suspense: 화면 지연시 대체 ui 화면을 임시로 표시함 */}
            <Suspense fallback={<h1>ChildA Loading..</h1>}>
              <ChildA />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary FallbackComponent={Fallback}>
            <Suspense fallback={<h1>ChildB Loading..</h1>}>
              <ChildB />
            </Suspense>
          </ErrorBoundary>
        </>
      )}
    </>
  );
}
