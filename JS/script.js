const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'HOME';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEL => {
        if (window.scrollY >= sectionEL.offsetTop - sectionEL.clientHeight / 3) {
            currentSection = sectionEL.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classlist.add('active');
        }
    });
});
