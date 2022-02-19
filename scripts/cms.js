// WELCOME CONTENT

function addWelcomeContent(params = {}) {
  const welcomeTitleEl = document.querySelector(".welcome__title");
  welcomeTitleEl.textContent = params.title;
  const welcomeSubtitleEl = document.querySelector(".welcome__subtitle");
  welcomeSubtitleEl.textContent = params.subtitle;
}

function getWelcomeContent() {
  // con esto importo la seccion de bienvenida que esta en contentful
  return fetch(
    "https://cdn.contentful.com/spaces/hzma5z61vjs4/environments/master/entries?access_token=6l3gfvRte1iRjrtVzhiTZ39sh-SehCkKxWm3md44ozU&content_type=bienvenida"
  )
    .then((response) => response.json())
    .then((data) => {
      const params = data.items.map((i) => {
        return {
          title: i.fields.titulo,
          subtitle: i.fields.subtitulo,
        };
      });
      return params;
    });
}

function resolvePromiseWelcome() {
  getWelcomeContent().then((params) => {
    for (const k of params) {
      addWelcomeContent(k);
    }
  });
}

// ABOUTME SECTION

function addAboutMeContent(params = {}) {
  const aboutMeTitleEl = document.querySelector(".aboutme__h2");
  aboutMeTitleEl.textContent = params.title;
  const aboutMeParrafoEl = document.querySelector(".aboutme__p");
  aboutMeParrafoEl.textContent = params.parrafo;
}

function getAboutMeContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/hzma5z61vjs4/environments/master/entries?access_token=6l3gfvRte1iRjrtVzhiTZ39sh-SehCkKxWm3md44ozU&content_type=acercaDeMi"
  )
    .then((response) => response.json())
    .then((data) => {
      const params = data.items.map((i) => {
        return {
          title: i.fields.titulo,
          parrafo: i.fields.parrafo,
        };
      });
      return params;
    });
}

function resolvePromiseAbouteMe() {
  getAboutMeContent().then((params) => {
    for (const k of params) {
      addAboutMeContent(k);
    }
  });
}

// SERVICES SECTION

function addServicesCard(params = {}) {
  const templateServices = document.querySelector("#services__template");
  const containerServices = document.querySelector(
    ".services__template-content"
  );
  //img
  templateServices.content.querySelector(".services__img").src = params.image;

  //title
  templateServices.content.querySelector(".services__card-title").textContent =
    params.title;
  //parrafo

  templateServices.content.querySelector(
    ".services__card-parrafo"
  ).textContent = params.parrafo;
  //clono
  const clone = document.importNode(templateServices.content, true);
  // y lo agrego al contenedor con el metodo appendChild
  containerServices.appendChild(clone);
}

function getServicesCard() {
  return fetch(
    "https://cdn.contentful.com/spaces/hzma5z61vjs4/environments/master/entries?access_token=6l3gfvRte1iRjrtVzhiTZ39sh-SehCkKxWm3md44ozU&content_type=servicios"
  )
    .then((response) => response.json())
    .then((data) => {
      const params = data.items.map((i) => {
        return {
          title: i.fields.titulo,
          parrafo: i.fields.descripcion,
          imageID: i.fields.imagen.sys.id,
          includes: data.includes.Asset,
        };
      });
      params.forEach((e) => {
        let idEncontrado = buscarAssetS(e.imageID, e.includes);
        e.image = "https:" + idEncontrado.fields.file.url;
      });

      return params;
    });
}
function buscarAssetS(assetID, includes) {
  const imagen = includes.find((i) => {
    return i.sys.id == assetID;
  });
  return imagen;
}
function resolvePromiseServices() {
  getServicesCard().then((services) => {
    for (const s of services) {
      addServicesCard(s);
    }
  });
}

// PORTFOLIO SECTION
function addPortfolioCard(params = {}) {
  const templatePortfolio = document.querySelector("#portfolio__template");
  const containerPortfolio = document.querySelector(
    ".portfolio__template-content"
  );

  templatePortfolio.content.querySelector(".portfolio__img").src = params.image;

  templatePortfolio.content.querySelector(
    ".portfolio__card-title"
  ).textContent = params.title;

  templatePortfolio.content.querySelector(
    ".portfolio__card-parrafo"
  ).textContent = params.parrafo;

  templatePortfolio.content.querySelector(".portfolio__card-url").href =
    params.url;
  const clone = document.importNode(templatePortfolio.content, true);
  containerPortfolio.appendChild(clone);
}

function getPortfolioCard() {
  return fetch(
    "https://cdn.contentful.com/spaces/hzma5z61vjs4/environments/master/entries?access_token=6l3gfvRte1iRjrtVzhiTZ39sh-SehCkKxWm3md44ozU&content_type=portfolio"
  )
    .then((response) => response.json())
    .then((data) => {
      const params = data.items.map((i) => {
        return {
          title: i.fields.titulo,
          parrafo: i.fields.descripcion,
          url: i.fields.url,
          imageID: i.fields.imagen.sys.id,
          includes: data.includes.Asset,
        };
      });
      params.forEach((e) => {
        let idEncontrado = buscarAssetP(e.imageID, e.includes);
        e.image = "https:" + idEncontrado.fields.file.url;
      });
      // console.log(params);
      return params;
    });
}
function buscarAssetP(assetID, includes) {
  const imagen = includes.find((i) => {
    return i.sys.id == assetID;
  });
  return imagen;
}

function resolvePromisePortfolio() {
  getPortfolioCard().then((portfolio) => {
    for (const p of portfolio) {
      console.log(p);
      addPortfolioCard(p);
    }
  });
}
