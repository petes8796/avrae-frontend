const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  try {
    const response = await fetch("https://api.avrae-society.com/applications/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Server response:", data);
      throw new Error(data.detail || "Submission failed");
    }

    setSubmitted(true);
  } catch (err) {
    console.error("Client error:", err);
    setError("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};
