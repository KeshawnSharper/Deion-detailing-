let mobileIcon = document.querySelector(".mobile-icon")
let mobileList = document.querySelector(".mobile-view")
console.log(document.querySelector(".mobile-icon"))
mobileIcon.addEventListener("click",() => {
    if (mobileList.style.display === "none"){
        console.log("hello")
        mobileList.style.display = "block"
    }
    else{
        console.log("hello")
        mobileList.style.display = "none"
    }
})