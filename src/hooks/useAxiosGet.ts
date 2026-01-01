import { useEffect, useRef, useState } from "react";
import { axiosInstance } from "../api/axios";
import axios from "axios";

type UseAxiosGetOptions = {
  enabled?: boolean; // 필요 시 호출 제어
};

export function useAxiosGet<T>(url: string, options: UseAxiosGetOptions = {}) {
  const { enabled = true } = options;

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(enabled);
  const [error, setError] = useState<string>("");

  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const refetch = async () => {
      if (!enabled) return;

      // 이전 요청 취소
      controllerRef.current?.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      setIsLoading(true);
      setError("");

      try {
        const res = await axiosInstance.get<T>(url, {
          signal: controller.signal,
        });
        setData(res.data);
      } catch (e: unknown) {
        // cancel은 무시
        if (axios.isCancel(e)) return;

        if (e instanceof Error) {
          // axios v1 cancel은 보통 CanceledError
          if (e.name !== "CanceledError") setError(e.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };
    refetch();
    return () => controllerRef.current?.abort();
    // url 바뀌면 자동 재호출
  }, [url, enabled]);

  return { data, isLoading, error };
}
