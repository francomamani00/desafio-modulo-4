function main() {
  const headerEl = document.querySelector(".header");
  addHeader(headerEl);
  burgerButton();
  resolvePromiseServices();
  const footerEl = document.querySelector(".footer");
  addFooter(footerEl);
}
main();
