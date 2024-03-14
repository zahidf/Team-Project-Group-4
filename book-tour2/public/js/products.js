searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
};

//swiper functioning
window.onscroll = () => {
    searchForm.classList.remove("active");

    if (window.scrollY > 93) {
        document.querySelector(".header .header-2").classList.add("active");
    } else {
        document.querySelector(".header .header-2").classList.remove("active");
    }
};

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
    } else {
        document.querySelector(".header .header-2").classList.remove("active");
    }

    fadeOut();
};

function loader() {
    document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
    setTimeout(loader, 4000);
}

//swiper functioning for new arrivals
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

//swiper functioning for best sellers
var swiper = new Swiper(".bestsellers-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

window.addEventListener("DOMContentLoaded", (event) => {
    const token = localStorage.getItem("usertoken");
    const loginBtn = document.getElementById("login-btn");
    const dropdownContent = loginBtn.querySelector(".dropdown-content");

    if (token) {
        dropdownContent.innerHTML = `<a href="#" id="logout" onclick="handleLogout()">Logout</a>`;
    } else {
        dropdownContent.innerHTML = `<a href="/mainlogin" id="xstext">Log In</a>`;
    }
});

function handleLogout() {
    localStorage.removeItem("usertoken");
    window.location.href = "/products";
}
