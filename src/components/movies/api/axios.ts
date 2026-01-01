import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWMzZTQ5Y2ZjOTAzYTBjMGUzN2Y3NmQ4MjU3NmRmMyIsIm5iZiI6MTY2MjEyMTIwNC42MjIwMDAyLCJzdWIiOiI2MzExZjRmNDAyMzFmMjAwN2RiZWFmMGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mSkD-vwUFLFnU3ZF0RQi9zVec8IZYZF2KrqD3MWjHhs",
  },
});
