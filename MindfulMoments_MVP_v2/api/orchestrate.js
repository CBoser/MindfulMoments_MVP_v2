
export default async function handler(req, res) {
  if (process.env.DISABLE_AI === "true") {
    res.status(200).json({ plan: "Fallback: Breathe deeply and relax for 5 minutes." });
    return;
  }

  const body = await req.json();
  const planType = body.type || "meditation";
  const plan = `AI-generated ${planType} plan: Start with 1 minute of deep breathing, followed by 4 minutes of body scan.`;
  res.status(200).json({ plan });
}
