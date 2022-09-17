import axios, { Method } from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use((response) => {
  return response.data;
});

export default function axiosNoAuth<R>(
  url: string,
  method: Method,
  body?: object
): Promise<R> {
  const options = {
    url,
    headers: { "Content-Type": "application/json" },
    method,
    data: body,
  };

  return axiosInstance.request<any, R>(options);
}
