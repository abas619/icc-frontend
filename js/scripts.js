AOS.init({
  easing: "ease-in-out-sine",
});

var body = document.querySelector("body");

if (document.querySelector(".btn-mobile-menu") != null) {
  var btnMobileMenu = document.querySelector(".btn-mobile-menu");
  var sidebarMenu = document.getElementById("sidebar-menu");
  var menuOverlay = document.querySelector(".overlay-back");
  var btnCloseSidebar = document.querySelector(".btn-close-menu");
  btnMobileMenu.onclick = () => {
    menuOverlay.classList.add("active");
    sidebarMenu.classList.add("active");
  };
  menuOverlay.onclick = () => {
    menuOverlay.classList.remove("active");
    sidebarMenu.classList.remove("active");
  };
  btnCloseSidebar.onclick = () => {
    menuOverlay.classList.remove("active");
    sidebarMenu.classList.remove("active");
  };
}

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

if (document.querySelector(".btn-close-toast") != null) {
  var btnsColse = document.querySelectorAll(".btn-close-toast");
  btnsColse.forEach((btnClose, i) => {
    btnClose.addEventListener("click", function () {
      btnClose.parentElement.style.display = "none";
    });
  });
}

// Show Filter on Mobile
if (document.getElementById("products-section") !== null) {
  var productsSection = document.getElementById("products-section");
  var productsSide = productsSection.querySelector(".products-side");
  var btnAdvancedSearch = document.querySelector(".btn-advanced-search");
  var filtersideOverlay = document.querySelector(".filterside-overlay");
  var closeAdvanced = document.querySelector(".btn-close-filter");
  btnAdvancedSearch.addEventListener("click", function () {
    productsSide.classList.add("active");
    filtersideOverlay.classList.add("active");
    body.classList.add("fixedposition");
  });
  closeAdvanced.addEventListener("click", function () {
    productsSide.classList.remove("active");
    body.classList.remove("fixedposition");
    filtersideOverlay.classList.remove("active");
  });
  filtersideOverlay.addEventListener("click", function () {
    productsSide.classList.remove("active");
    body.classList.remove("fixedposition");
    filtersideOverlay.classList.remove("active");
  });
}

// Show Filter on Mobile
if (document.getElementById("products-section") !== null) {
  var productsSection = document.getElementById("products-section");
  var productsSide = productsSection.querySelector(".products-side");
  var btnAdvancedSearch = document.querySelector(".btn-advanced-search");
  var filtersideOverlay = document.querySelector(".filterside-overlay");
  var closeAdvanced = document.querySelector(".btn-close-filter");
  btnAdvancedSearch.addEventListener("click", function () {
    productsSide.classList.add("active");
    filtersideOverlay.classList.add("active");
    body.classList.add("fixedposition");
  });
  closeAdvanced.addEventListener("click", function () {
    productsSide.classList.remove("active");
    body.classList.remove("fixedposition");
    filtersideOverlay.classList.remove("active");
  });
  filtersideOverlay.addEventListener("click", function () {
    productsSide.classList.remove("active");
    body.classList.remove("fixedposition");
    filtersideOverlay.classList.remove("active");
  });
}

if (document.querySelector(".user-dashboard-section") != null) {
  var userMenu = document.querySelector(".grid-user-menu");
  var overlayUserMenu = document.querySelector(".overlay-userMenu");
  var btnUserMenu = document.querySelector(".btn-usermenu");
  var btnCloseprofileMenu = document.querySelector(".btn-closeprofileMenu");

  btnUserMenu.onclick = () => {
    userMenu.classList.add("active");
    overlayUserMenu.classList.add("active");
  };
  overlayUserMenu.onclick = () => {
    userMenu.classList.remove("active");
    overlayUserMenu.classList.remove("active");
  };
  btnCloseprofileMenu.onclick = () => {
    userMenu.classList.remove("active");
    overlayUserMenu.classList.remove("active");
  };
}

// Change Language Direction
if (document.querySelector(".buttons-language") != null) {
  const btnLangEng = document.getElementById("btn-lang-eng");
  const btnLangFa = document.getElementById("btn-lang-fa");
  // رویداد برای دکمه فارسی
  btnLangFa.addEventListener("click", function (event) {
    event.preventDefault();
    changeLanguage("fa");
    btnLangFa.classList.add("active");
    btnLangEng.classList.remove("active");
  });

  // رویداد برای دکمه انگلیسی
  btnLangEng.addEventListener("click", function (event) {
    event.preventDefault();
    changeLanguage("en");
    btnLangFa.classList.remove("active");
    btnLangEng.classList.add("active");
  });
}
function changeLanguage(language) {
  if (language === "fa") {
    // تغییرات لازم برای فارسی
    document.documentElement.setAttribute("lang", "fa");
    document.body.dir = "rtl";
    body.classList.remove("ltr");
  } else if (language === "en") {
    // تغییرات لازم برای انگلیسی
    document.documentElement.setAttribute("lang", "en");
    document.body.dir = "ltr";
    body.classList.add("ltr");
  }
}

function changeFormStatus(n) {
  // var form_status_section = document.getElementById("form-status-section");
  var formGroup = document.querySelectorAll(".status-section");
  for (var i = 0; i < formGroup.length; i++) {
    formGroup[i].classList.remove("active");
  }
  formGroup[n].classList.add("active");
}
