const nav=document.querySelector(".nav")
const navLinks = document.querySelectorAll(".nav-item a");
const homeLinkIcon = document.querySelector("#home_link_icon");
const searchLinkIcon = document.querySelector("#search_link_icon");
const wishListLinkIcon = document.querySelector("#wishlist_link_icon");
const contactLinkIcon = document.querySelector("#contact_link_icon");
const settingsLinkIcon = document.querySelector("#settings_link_icon");








homeLinkIcon.addEventListener("mouseover", () => {
    nav.style.width = "100%";
    homeLinkIcon.classList.toggle("nav-active")
    navLinks.forEach((a) => {
        a.style.opacity = "1"
    })
})

homeLinkIcon.addEventListener("mouseout", () => {
    nav.style.width = "70px"
    homeLinkIcon.classList.toggle("nav-active")
    navLinks.forEach((a) => {
        a.style.opacity="0"
    })
})

searchLinkIcon.addEventListener("mouseover",() => {
    nav.style.width = "100%";
    searchLinkIcon.classList.toggle("nav-active")
    navLinks.forEach((a) => {
        a.style.opacity = "1"
    })
})

searchLinkIcon.addEventListener("mouseout",  () => {
    nav.style.width = "70px"
    searchLinkIcon.classList.toggle("nav-active")
    navLinks.forEach((a) => {
        a.style.opacity="0"
    })
})

wishListLinkIcon.addEventListener("mouseover", () => {
    nav.style.width = "100%";
    wishListLinkIcon.classList.toggle("nav-active")
    navLinks.forEach((a) => {
        a.style.opacity = "1"
    })
})

wishListLinkIcon.addEventListener("mouseout", () => {
    nav.style.width = "70px"
    wishListLinkIcon.classList.toggle("nav-active")
    navLinks.forEach((a) => {
        a.style.opacity="0"
    })
})

contactLinkIcon.addEventListener("mouseover", () => {
    nav.style.width = "100%";
    contactLinkIcon.classList.toggle("nav-active")
    navLinks.forEach((a) => {
        a.style.opacity = "1"
    })
})

contactLinkIcon.addEventListener("mouseout",  () => {
    nav.style.width = "70px"
    contactLinkIcon.classList.toggle("nav-active")
    navLinks.forEach((a) => {
        a.style.opacity="0"
    })
})

settingsLinkIcon.addEventListener("mouseover", () => {
    nav.style.width = "100%";
    settingsLinkIcon.classList.toggle("nav-active")
    navLinks.forEach((a) => {
        a.style.opacity = "1"
    })
})

settingsLinkIcon.addEventListener("mouseout", () => {
    nav.style.width = "70px"
    settingsLinkIcon.classList.toggle("nav-active")
    navLinks.forEach((a) => {
        a.style.opacity="0"
    })
})
