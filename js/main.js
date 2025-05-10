// Page Loading
window.addEventListener("DOMContentLoaded", function () {
   const loader = document.getElementById("page-loader");

   setTimeout(() => {
      loader.classList.add("fade-out");

      setTimeout(() => loader.remove(), 100);
   }, 1300);
});

// Back to top scroll
document.addEventListener("DOMContentLoaded", () => {
   const backToTop = document.getElementById("back-to-top");

   window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
         backToTop.classList.remove("d-none");
      } else {
         backToTop.classList.add("d-none");
      }
   });

   backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   });
});
