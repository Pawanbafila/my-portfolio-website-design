gsap.from( ".banner-text-img .banner-img1",{
scale:1,
duration: 1,
opacity:0,
x:200,
scrub:5,

})
gsap.from( ".banner-p",{
x:-1000,
duration: 1,
opacity:0,
scrub:5,

})
gsap.from( ".banner-h",{

duration: 1,
opacity:0,
scale:2,
scrub:5,
})


gsap.from ( ".about-me p",{
    scale:1,
    duration: 1,
    opacity:0,
    x:-200,
    
    scrollTrigger: ".about-us p"
    })