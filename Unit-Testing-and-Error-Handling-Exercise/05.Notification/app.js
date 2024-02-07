function notify(message) {
  const divRef = document.getElementById("notification");
  divRef.textContent = message; // Set the text content
  divRef.style.display = "block"; // Show the notification div
  divRef.addEventListener("click", () => {
      divRef.style.display = "none"; 
  });
}
