document.addEventListener("formDataSubmitted", (event) => {
  const formData = event.detail; 

  const name = formData.name; 
  const email = formData.email; 
  const message = formData.message; 


  const personContainer = document.getElementById("person-list");





  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const th1 = document.createElement("th");
  th1.textContent = "Name";
  const th2 = document.createElement("th");
  th2.textContent = "Email";
  const th3 = document.createElement("th");
  th3.textContent = "Message";

  headerRow.appendChild(th1);
  headerRow.appendChild(th2);
  headerRow.appendChild(th3);
  thead.appendChild(headerRow);

 
  const tbody = document.createElement("tbody");
  const dataRow = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.textContent = name;
  const td2 = document.createElement("td");
  td2.textContent = email;
  const td3 = document.createElement("td");
  td3.textContent = message;

  dataRow.appendChild(td1);
  dataRow.appendChild(td2);
  dataRow.appendChild(td3);
  tbody.appendChild(dataRow);

  
  personContainer.appendChild(thead);
  personContainer.appendChild(tbody);
});
