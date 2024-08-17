document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
  
    navLink.forEach((n) => n.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
  
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }
  
    toggleSwitch.addEventListener("change", switchTheme, false);
  
    const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        if (currentTheme === "dark") {
            toggleSwitch.checked = true;
        }
    }
  
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            }).catch(error => {
                console.error('Service Worker registration failed:', error);
            });
        });
    }
  
    const myDate = document.querySelector("#datee");
    const currentYear = new Date().getFullYear();
    myDate.textContent = currentYear;
  });
  