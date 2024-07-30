document.getElementById('navbarToggle').addEventListener('click', function() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('show');
});

document.querySelectorAll('.submenu-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('show');
        }
    });
});
