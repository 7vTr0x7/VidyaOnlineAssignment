export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "http://fintechqrqronboardingbackend-fcwvv1-aa5875-91-108-104-214.traefik.me/api/admin/1/saveApplicationDraft",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
}
