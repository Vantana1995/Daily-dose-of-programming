const container = document.getElementById("list-container");

const ul = document.createElement("ul");

let users = ["Ivan", "Natan", "Orcham"];

for (user of users) {
  const li = document.createElement("li");

  li.textContent = user;
  ul.appendChild(li);
}

container.appendChild(ul);
