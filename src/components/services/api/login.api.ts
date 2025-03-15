import axios from "axios";
import { BASE_URL, header } from "./api";

export async function userLogin(body: any) {
  const res = await axios.post(`${BASE_URL}/api/users/login`, body, {
    headers: header,
  });
  return res.data;
}

export async function isLogin(token: any) {
  try {
    const res = await axios.get(`${BASE_URL}/api/users/me`, {
      headers: {
        ...header,
        Authorization: `Bearer ${token}`,
      },
    });
    return res.status;
  } catch (error: any) {
    console.error("Auth Check Error:", error.response?.data || error.message);
    return false;
  }
}
