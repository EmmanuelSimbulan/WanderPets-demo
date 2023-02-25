document.getElementById("login").addEventListener("submit", (event) => {
  event.preventDefault()
  const username = document.getElementById("username").value;

  localStorage.setItem("username", username);

  window.location.href = 'index.html';
})