const sendForm = () => {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.getElementById("message").value;

  const formDataEvent = new CustomEvent("formDataSubmitted", {
    detail: { name, email, message },
  });

  document.dispatchEvent(formDataEvent);

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  document.getElementById("contactForm").reset();
};

document.getElementById("contactForm").addEventListener("submit", sendForm);
