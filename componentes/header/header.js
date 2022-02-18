function addHeader(elemento) {
  const contentHeaderEl = document.createElement("div");
  contentHeaderEl.innerHTML = `
  <div class="header__content">
  <div class="header__logo-content">
    <a href="./index.html">
      <img src="./images/AVER2.png" alt="logo" class="header__logo" />
    </a>
  </div>
  <div class="header-comp__hamburger-menu header__hamburger--open">
    <img
      src="./images/hamburguer-vector.png"
      class="header-comp__hamburger-logo"
    />
  </div>
  <div class="header-comp__window-menu">
    <div class="header-comp__window-close header__hamburger--close">
      <img
        src="./images/x-mark.png"
        alt="x"
        class="header__logo--close"
      />
    </div>
    <div class="header-comp__window-menu-link">
      <a class="header__nav-link--window-open" href="./portfolio.html"
        >Portfolio</a
      >
      <a class="header__nav-link--window-open" href="./servicios.html"
        >Servicios</a
      >
      <a class="header__nav-link--window-open" href="./contacto.html"
        >Contacto</a
      >
    </div>
  </div>
  <div class="header-comp__menu-desktop">
    <div class="header-comp__links-container">
      <a class="header__nav-link" href="./portfolio.html">Portfolio</a>
      <a class="header__nav-link" href="./servicios.html">Servicios</a>
      <a class="header__nav-link" href="./contacto.html">Contacto</a>
    </div>
  </div>
</div>
    
    `;
  elemento.appendChild(contentHeaderEl);
}

function burgerButton() {
  const openWindow = document.querySelector(".header__hamburger--open");
  const closeWindow = document.querySelector(".header__hamburger--close");
  const windowEl = document.querySelector(".header-comp__window-menu");

  openWindow.addEventListener("click", () => {
    windowEl.style.display = "inherit";
  });
  closeWindow.addEventListener("click", () => {
    windowEl.style.display = "";
  });
}
