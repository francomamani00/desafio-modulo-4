function main() {
  const headerEl = document.querySelector(".header");
  addHeader(headerEl);
  burgerButton();
  const formEl = document.querySelector(".form");
  addContact(formEl);
  formListener()
  const footerEl = document.querySelector(".footer");
  addFooter(footerEl);
}
main();
