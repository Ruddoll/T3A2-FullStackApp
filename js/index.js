const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

function goToRegisterPage() {
    window.location.href = "pages/register.html";
}

