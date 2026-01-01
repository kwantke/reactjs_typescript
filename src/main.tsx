import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import "./styles/index.css";
import "./css/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Provider } from "react-redux";
// import { store } from "./store/store.ts";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 실패 시 재시도 횟수
      refetchOnWindowFocus: false,
      staleTime: 30_000, // 30초 동안 fresh 취급
    },
    mutations: {
      retry: 0,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </QueryClientProvider>
  </StrictMode>
);
