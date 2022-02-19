function addContact(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <section class="contact">
      <h2 class="contact__title">Escribeme</h2>
      <form class="form__form contact__form">
      <label>
        <span class="contact__label">Nombre</span>
        <input type="text" class="contact__input" />
      </label>
      <label>
        <span class="contact__label">Email</span>
        <input type="email" class="contact__input" />
      </label>
      <label>
        <span class="contact__label">Mensaje</span>
        <textarea id="input-message" name="input-message" class="contact__input-textarea"></textarea>
      </label>
      <div class="contact__submit-container">
        <button class="contact__submit-button">Enviar</button>
      </div>
    </form>
  </section>`; // ACA LE AGREGUE EL HTML AL componentEl
  // const form = document.querySelector(".contact__form");
  // no va document, porque el DOM no contiene NADA del formulario de contacto
  // entonces pongo el componentEl, que le agregue HTML justito arriba

  el.appendChild(componentEl);
}

// function sendFormData() {
//   const myContactForm = document.querySelector(".contact-form");
//   myContactForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const formDataFinal = {
//       Nombre: formData.get("nombre"),
//       Email: formData.get("email"),
//       Mensaje: formData.get(mensaje),
//     };
//     const data = {
//       to: "franco.mamani00@gmail.com",
//       message: formDataFinal.Mensaje,
//     };
//     fetch("https://apx-api.vercel.app/api/utils/dwf", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => res.json())
//       .catch((error) => console.log("Error"), error)
//       .then((res) => console.log("salio bien", res));
//   });
// }

const handleEvent = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const objeto = Object.fromEntries(data.entries());
  sendFormData(objeto);
  let inputs = document.querySelectorAll(".input");
  inputs.forEach((i) => {
    i.value = "";
  });
};

function sendFormData(objeto) {
  const url = "https://apx-api.vercel.app/api/utils/dwf";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: "franco.mamani00@gmail.com",
      message: objeto["input-message"],
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
}
const formListener = () => {
  const myForm = document.querySelector(".form__form");
  myForm.addEventListener("submit", handleEvent);
};
