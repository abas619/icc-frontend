AOS.init({
    easing: 'ease-in-out-sine'
});

var body = document.querySelector('body');

if (document.querySelector('.btn-mobile-menu') != null) {
    var btnMobileMenu = document.querySelector('.btn-mobile-menu');
    var sidebarMenu = document.getElementById('sidebar-menu');
    var menuOverlay = document.querySelector('.overlay-back');
    var btnCloseSidebar = document.querySelector('.btn-close-menu');
    btnMobileMenu.onclick = () => {
        menuOverlay.classList.add('active');
        sidebarMenu.classList.add('active');
    }
    menuOverlay.onclick = () => {
        menuOverlay.classList.remove('active');
        sidebarMenu.classList.remove('active');
    }
    btnCloseSidebar.onclick = () => {
        menuOverlay.classList.remove('active');
        sidebarMenu.classList.remove('active');
    }
}


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


if (document.querySelector('.btn-close-toast') != null) {
    var btnsColse = document.querySelectorAll('.btn-close-toast');
    btnsColse.forEach((btnClose, i) => {
        btnClose.addEventListener('click', function () {
            btnClose.parentElement.style.display = 'none'
        })
    })
}

// Show Filter on Mobile
if (document.getElementById('products-section') !== null) {
    var productsSection = document.getElementById('products-section');
    var productsSide = productsSection.querySelector('.products-side');
    var btnAdvancedSearch = document.querySelector('.btn-advanced-search');
    var filtersideOverlay = document.querySelector('.filterside-overlay');
    var closeAdvanced = document.querySelector('.btn-close-filter')
    btnAdvancedSearch.addEventListener('click', function () {
        productsSide.classList.add('active');
        filtersideOverlay.classList.add('active')
        body.classList.add('fixedposition');
    });
    closeAdvanced.addEventListener('click', function () {
        productsSide.classList.remove('active');
        body.classList.remove('fixedposition');
        filtersideOverlay.classList.remove('active')
    });
    filtersideOverlay.addEventListener('click', function () {
        productsSide.classList.remove('active');
        body.classList.remove('fixedposition');
        filtersideOverlay.classList.remove('active')
    });
}

// Show Filter on Mobile
if (document.getElementById('products-section') !== null) {
    var productsSection = document.getElementById('products-section');
    var productsSide = productsSection.querySelector('.products-side');
    var btnAdvancedSearch = document.querySelector('.btn-advanced-search');
    var filtersideOverlay = document.querySelector('.filterside-overlay');
    var closeAdvanced = document.querySelector('.btn-close-filter')
    btnAdvancedSearch.addEventListener('click', function () {
        productsSide.classList.add('active');
        filtersideOverlay.classList.add('active')
        body.classList.add('fixedposition');
    });
    closeAdvanced.addEventListener('click', function () {
        productsSide.classList.remove('active');
        body.classList.remove('fixedposition');
        filtersideOverlay.classList.remove('active')
    });
    filtersideOverlay.addEventListener('click', function () {
        productsSide.classList.remove('active');
        body.classList.remove('fixedposition');
        filtersideOverlay.classList.remove('active')
    });
}


if (document.querySelector('.user-dashboard-section') != null) {
    var userMenu = document.querySelector('.grid-user-menu');
    var overlayUserMenu = document.querySelector('.overlay-userMenu');
    var btnUserMenu = document.querySelector('.btn-usermenu');
    var btnCloseprofileMenu = document.querySelector('.btn-closeprofileMenu');

    btnUserMenu.onclick = () => {
        userMenu.classList.add('active');
        overlayUserMenu.classList.add('active');
    }
    overlayUserMenu.onclick = () => {
        userMenu.classList.remove('active');
        overlayUserMenu.classList.remove('active');
    }
    btnCloseprofileMenu.onclick = () => {
        userMenu.classList.remove('active');
        overlayUserMenu.classList.remove('active');
    }
}
