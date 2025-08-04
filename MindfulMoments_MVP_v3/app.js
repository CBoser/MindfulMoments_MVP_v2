async function getMindfulMoment() {
  const userInput = document.getElementById("userInput").value;

  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: userInput })
  });

  const data = await response.json();
  document.getElementById("output").textContent = data.result || "No response.";
}
