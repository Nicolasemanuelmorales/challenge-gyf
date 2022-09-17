import axiosNoAuth from "../utils/axiosNoAuth";
import { urls } from "../utils/apiUrls";
import Post from "../models/Post";

const baseUrl = urls.apiUrlCat;
const cienPostsUrl = "posts";

export function getPostsList(): Promise<Post[]> {
  return axiosNoAuth<Post[]>(`${baseUrl}/${cienPostsUrl}`, "GET");
}
