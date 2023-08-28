import axios from "axios";

export default async function handler(req, res) {
  const token = req.query.token;

  const instance = axios.create({
    baseURL: "http://api.lvh.me:3000/",
    timeout: 1000,
    headers: { Authorization: "Bearer " + token },
  });
  const bjRes = await instance.get("oauth/token/info");

  res.status(200).json({ message: bjRes.data });
}
