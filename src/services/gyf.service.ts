import axiosNoAuth from "../utils/axiosNoAuth";
import { urls } from "../utils/apiUrls";
import Post from "../models/Post";
import User from "../models/User";

const baseUrl = urls.apiUrlCat;

export function getPostsList(): Promise<Post[]> {
  return axiosNoAuth<Post[]>(`${baseUrl}/posts`, "GET");
}

export function getUserId(id: number): Promise<User> {
  return axiosNoAuth<User>(`${baseUrl}/users/${id}`, "GET");
}
