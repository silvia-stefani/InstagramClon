//BUBBLE NOTIFICATIONS

const bubbleNotifications = document.querySelectorAll(".main_navigation li")

bubbleNotifications.forEach(li => {

    li.addEventListener("click", () => {

        li.querySelector(".bubble_notification").classList.toggle("active")
    })
})

//OPEN MODAL MENU

const logo = document.querySelector(".logo");
const modalWindow = document.querySelector(".modal_window_menu")
const closeButton = document.querySelector(".close_button")

logo.onclick = () => {
    modalWindow.classList.add("opened")
}
closeButton.onclick = () => {
    modalWindow.classList.remove("opened")
}


//OPEN NAV MOBILE

const userPic = document.querySelector (".open_nav");
const navBar = document.querySelector(".nav_mobile")
const closeNavBar = document.querySelector(".close_nav")

userPic.onclick = () => {
    navBar.classList.add("opened")
}
closeNavBar.onclick = () => {
    navBar.classList.remove("opened")
}


//OPEN USER SECTIONS

    //DIRECT
    const expandSectionDirect = document.querySelector (".expand_direct")
    const sectionOpenedDirect = document.querySelector (".section_drop.drop_direct")

    expandSectionDirect.onclick = () => {
        sectionOpenedDirect.classList.toggle("opened")
        sectionOpenedLikes.classList.remove("opened")
    }

    //LIKES
    const expandSectionLikes = document.querySelector (".expand_likes")
    const sectionOpenedLikes = document.querySelector (".section_drop.drop_likes")

    expandSectionLikes.onclick = () => {
        sectionOpenedLikes.classList.toggle("opened")
        sectionOpenedDirect.classList.remove("opened")
    }

//CHARGE DAY STORY
const chargeStory = document.querySelectorAll(".user_picture a")

chargeStory.forEach(a => {

    a.addEventListener("click", () => {

        a.querySelector(".charging_story").classList.add("active")
    })
})

//CHARGE HIGHLIGHT STORIES
const chargeHighlights = document.querySelectorAll(".story_img a")

chargeHighlights.forEach(a => {

    a.addEventListener("click", () => {

        a.querySelector(".charging_highlights").classList.add("active")
    })
})
