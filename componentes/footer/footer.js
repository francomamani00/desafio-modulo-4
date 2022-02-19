function addFooter(elemento) {
  const contentFooterEl = document.createElement("div");
  contentFooterEl.innerHTML = `
    <div class="footer__content">
        <div class="footer__logo-content">
          <a href="./index.html" class="footer__link-logo">
            <img src="./images/AVER2.png" alt="" class="footer__logo" />
          </a>
        </div>
        <div class="footer__redes-content">
          <a
            href="https://instagram.com"
            target="_BLANK"
            class="footer__redes footer__redes-ig"
          >
            <span class="footer__redes-txt footer__redes-txt-ig"
              >Instagram</span
            >
            <img
              src="./images/instagrampng.png"
              alt=""
              class="footer__redes-img footer__redes-img-ig"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_BLANK"
            class="footer__redes footer__redes-linkedin"
          >
            <span class="footer__redes-txt footer__redes-txt-linkedin"
              >Linkedin</span
            >
            <img
              src="./images/linkedinpng.png"
              alt=""
              class="footer__redes-img footer__redes-img-linkedin"
            />
          </a>
          <a
            href="https://github.com"
            target="_BLANK"
            class="footer__redes footer__redes-github"
          >
            <span class="footer__redes-txt footer__redes-txt-github"
              >Github</span
            >
            <img
              src="./images/github.png"
              alt=""
              class="footer__redes-img footer__redes-img-github"
            />
          </a>
        </div>
      </div>
    `;
  elemento.appendChild(contentFooterEl);
}
