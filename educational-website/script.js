// Change Navbar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
})


// Show/hide FAQ 
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open'); // Toggle the open class on the .faq element

        //change icon 
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        }
        else {
            icon.className = "uil uil-plus"
        }
    });
});

// show/hide the hamberger button
const menu = document.querySelector(".nav__menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closrBtn = document.querySelector("#close-menu-btn")

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closrBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


const closeNav = () => {
    menu.style.display = "none";
    closrBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closrBtn.addEventListener('click', closeNav)