// api/getApplicationByAgentId.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const { page, size } = req.query;

    const response = await fetch(
      `http://fintechqrqronboardingbackend-fcwvv1-aa5875-91-108-104-214.traefik.me/api/admin/1/getApplicationByAgentId?page=${page}&size=${size}`
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
}
