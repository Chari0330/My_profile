var typed = new Typed(".multiple-text",{
    strings: ["An Undergraduate","A Traverler","A Volunteer","A Designer","A Developer","A Musician"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
            })
        }
    })
}