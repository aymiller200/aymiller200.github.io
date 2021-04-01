const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');

const navLink = document.querySelector('#navbarNavDropdown')

const headShot = document.querySelector('#headShot');
const jobImg = document.querySelector('#jobImg');
const jobTitle = document.querySelector('#jobTitle');
const jobTextBox = document.querySelector('#jobDescription');

const next = document.querySelector('#next')
const prev = document.querySelector('#prev')


next.addEventListener('click', nextJob)
navLink.style.opacity = "0";

window.onscroll = function () { displayNav() };

function play() {
    setTimeout(() => {
        p1.innerText = 'Musician'
        p1.style.color = 'red'
    }, 500)
    setTimeout(() => {
        p1.innerText = 'Game Master'
        p1.style.color = 'green'
    }, 1000)
    setTimeout(() => {
        p1.innerText = 'Podcast Listener'
        p1.style.color = 'orange'
    }, 1500)
    setTimeout(() => {
        p1.innerText = 'Coffee Drinker'
        p1.style.color = 'gold'
    }, 2000)
    setTimeout(() => {
        p1.innerText = 'Bad Dancer'
        p1.style.color = 'pink'
    
    }, 2500)
    setTimeout(() => {
        p1.innerText = 'Web Developer.'
        p1.style.color = 'rgba(203, 114, 206, 1)'
       
    }, 3000)
}

play()

function displayNav() {
    if (document.documentElement.scrollTop > 400 && navLink.style.opacity == "0") {
        navLink.style.opacity = "0.8"
    } else if (document.documentElement.scrollTop < 400 && navLink.style.opacity == '0.8') {
        navLink.style.opacity = '0'
    }
}

jobTitle.innerText = "Apprentice 2016-Current"
jobTextBox.innerText = "During the many treasured hours I have spent at Ping's Music setting up intruments, fixing broken guitar necks (mostly my own), soldering, desoldering, and treating soldering iron burns (mostly my own); I gained powerful problem solving skills, the capacity to think critically, and the ability to take pride in the work I do. What I have learned here has helped solidify my understanding and love for HTML, CSS, and Javascript. In many ways, web development is a lot like the 'guts' of a guitar. Everything is connected, it takes time and patience to set up correctly, and when you finally get it right it is absolutely the best feeling."



let pgNum = 1

let img = [
    "./assets/pings.jpg", //0
    "./assets/monon.jpg", //1
    "./assets/humane.jpg", //2
    "./assets/orchard.jpg" //3
]

function nextJob() {
    if (pgNum === 4) {
        pgNum = 0
        jobTitle.innerText = "Apprentice 2016-Current"
        jobTextBox.innerText = "During the many treasured hours I have spent at Ping's Music setting up intruments, fixing broken guitar necks (mostly my own), soldering, desoldering, and treating soldering iron burns (mostly my own); I gained powerful problem solving skills, the capacity to think critically, and the ability to take pride in the work I do. What I have learned here has helped solidify my understanding and love for HTML, CSS, and Javascript. In many ways, web development is a lot like the 'guts' of a guitar. Everything is connected, it takes time and patience to set up correctly, and when you finally get it right it is absolutely the best feeling."
    }

    if (pgNum === 1) {
        jobTitle.innerText = 'Barista 2018-Current'
        jobTextBox.innerText = "I am so grateful to be a part The Monon Coffee Company family. Everyday we work together to foster an inclusive and safe environment for ourselves and for our guests, all while keeping the masses caffeinated. Since I have worked here, I have felt a greater passion for my community, and a greater compassion to those that are a part of it. Being able to go to work and make a stranger's day even just a little bit brighter means the world to me."
    }

    if (pgNum === 2) {
        jobTitle.innerText = 'Canine Care Tech 2018-2019'
        jobTextBox.innerText = "My time at the Indianapolis Humane Society instilled in me a passion and a drive for life that I didn't think I was capable of possessing. I was part of a small team responsible for the care of anywhere between 60-100 dogs. Teamwork and time manangement were key to ensuring we made it through the day. We lifted each other up, cheered each other on, and picked up the slack if one of us was hurt or sick. Some days were brutally heartbreaking, but we were always there for one another and we were always there for the dogs. I strive to hold that same level of respect and compassion for any team I find myself a part of."
    }

    if (pgNum === 3) {
        jobTitle.innerText = 'Musician 2016-Current'
        jobTextBox.innerText = "Throughout all of my adult life I have spent my free time playing shows with and managing The Orchard Keepers. This band is something I am incredidly proud of; from the musicians that are a part of it, to the music we create. Booking venues, booking studio time, traveling across the US, making and selling merchandise have all been a constant in my life for almost seven years. I am so grateful for the one of a kind experiences I have had and the one of a kind people I have met. This wild adventure has taught me to communicate thoughtfully, stand up for myself, and be confident in the work I do.  "
    }

    jobImg.src = img[pgNum]
    pgNum++
}














