function main() {
  const headerEl = document.querySelector(".header");
  addHeader(headerEl);
  burgerButton();
  resolvePromiseWelcome();
  resolvePromiseAbouteMe();
  resolvePromiseServices();
  const formEl = document.querySelector(".form");
  addContact(formEl);
  formListener();
  const footerEl = document.querySelector(".footer");
  addFooter(footerEl);
}
main();
