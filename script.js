function isInViewport(element, offsetTop = 0, offsetBottom = 0) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        rect.top <= windowHeight - offsetBottom &&
        rect.bottom >= offsetTop
    );
}

function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-in-element');

    fadeElements.forEach((element) => {
        if (isInViewport(element, 0, 0)) {
            element.style.opacity = 1;
        }
    });
}

window.onscroll = handleScroll;
handleScroll(); // Initial check on page load

//   section stick to navbar =====
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const section = document.getElementById(targetId);
            const navbarHeight = document.getElementById('navbar').offsetHeight;

            window.scrollTo({
                top: section.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    });
});

// tooltip====
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// toast=====
document.getElementById("last-btn").onclick = function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}