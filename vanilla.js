// const aboutGrid = document.querySelectorAll('.about-grid-cont');

// //javascript lenis

// // const lenis = new Lenis()

// // lenis.on('scroll', ScrollTrigger.update)

// // gsap.ticker.add((time)=>{
// //   lenis.raf(time * 1000)
// // })

// // gsap.ticker.lagSmoothing(0)



// aboutGrid.forEach(about => {
//     let aboutH = about.getElementsByTagName('h2');
//     let aboutP = about.getElementsByTagName('p');

//     gsap.set(aboutH, {
//         xPercent: -100,
//         opacity: 0
//     })

//     gsap.set(aboutP, {
//         xPercent: 100,
//         opacity: 0
//     })
// })


const navBar = document.getElementById('nav-bar');
const nav = document.getElementById('nav');

navBar.addEventListener("click", () => {
    nav.classList.toggle("active")

})


var loaderPage = document.querySelector('.loader-page')
var viewPoint = document.querySelector('.viewpoint')

window.addEventListener('load', () => {
    loaderPage.classList.add("hidden");
    viewPoint.classList.add("show")
})