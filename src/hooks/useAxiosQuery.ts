import { useQuery, type QueryKey } from "@tanstack/react-query";
import { axiosInstance } from "../api/axios";

export function useAxiosQuery<TData>(
  queryKey: QueryKey,
  path: string,
  enabled = true
) {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const res = await axiosInstance.get<TData>(path);
      return res.data;
    },
    enabled,
  });
}
