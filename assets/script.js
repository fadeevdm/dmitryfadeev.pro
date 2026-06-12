document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOpenBtn = document.getElementById('menuOpenBtn');
    const menuCloseBtn = document.getElementById('menuCloseBtn');

    // Функция открытия меню
    const openMenu = () => {
        mobileMenu.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // Запрещаем скролл основного сайта
    };

    // Функция закрытия меню
    const closeMenu = () => {
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = ''; // Возвращаем скролл
    };

    // Вешаем события клика
    menuOpenBtn.addEventListener('click', openMenu);
    menuCloseBtn.addEventListener('click', closeMenu);

    // Закрытие меню при клике на темную область вокруг контента шторки
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });

    // Автоматическое закрытие меню при клике на любой пункт внутри него
    const menuLinks = mobileMenu.querySelectorAll('.nav-item, .btn-discuss');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
