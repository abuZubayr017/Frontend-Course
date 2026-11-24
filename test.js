const URL_USERS = "https://jsonplaceholder.typicode.com/usersx";
 const statusEl = document.getElementById("status");
 const listEl = document.getElementById("list");
 async function loadUsers() {
 statusEl.textContent = "Yuklanmoqda..."; // loading
 listEl.innerHTML = "";
 try {
 const res = await fetch(URL_USERS);
 if (!res.ok) throw new Error("HTTP " + res.status);
 const users = await res.json();
 listEl.innerHTML = users
 .map(u => `<li>${u.name} (${u.email})</li>`)
 .join(""); // data
 } catch (err) {
 statusEl.textContent = "Xatolik: " + err.message; // error
 return;
 } finally {
 if (listEl.children.length) statusEl.textContent = "";
 }
 }
 document.getElementById("reload").addEventListener("click", loadUsers);
 loadUsers();
