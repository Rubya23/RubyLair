

fetch('GalleryLinks.txt')
    .then(res => {
        if (res.ok) { console.log('GalleryLoaded') }
        else { console.log('GalleryLoadFailed') }
        res.json()
    })
    .then(data => console.log(data))
    ;





////SIDEBAR TOGGLER

const navBar = document.querySelector('.sidebar')
const sidebarToggler = document.querySelector('#sidebar-active')
const navBarText = document.querySelectorAll('.navBarText')

function sidebarOpen() {
    navBar.classList.toggle('open')
    navBarText.forEach(gomb => gomb.classList.toggle('open'))
};


console.log(document.querySelector('#sidebar-active').value)
sidebarToggler.addEventListener('click', () => { sidebarOpen() })













////////GALERY RANDOMIZATOR

let randomGallery = [];
for (i = 0; i < fullPicGallery.length; i++) {
    let randomIndex = Math.floor(Math.random() * fullPicGallery.length)
    randomGallery.push(fullPicGallery[randomIndex])
    fullPicGallery.splice(randomIndex, 1)
}

fullPicGallery = randomGallery




//Full Screen Mode

// ActiveFullScreenIndex >>>>afci
//let afci = '3'
afci = ''
//fullScreen(afci)

function fullScreen(x) {
    document.querySelector('#fullScreenCont').innerHTML =
        ('<p id="artistDataContainer"><a id="artistData"  href="' + fullPicGallery[x].artistLink + '">@' + fullPicGallery[x].tags[0] + '</a><button id="exitButton" calss="fullScreenButtons" onclick="exitBut()">(X)</button></p>') +
        ('<div id="fullScreenCard">') +
        ('<img id="fullScreenPic" src="' + fullPicGallery[x].picLink + '" alt=""></img>') +
        ('<div id="fullScreenNavBut">') +
        ('<button id="prevButton"  calss="fullScreenButtons" onclick="prevBut()"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="var(--color-text)"><path d="M860-240 500-480l360-240v480Zm-400 0L100-480l360-240v480Zm-80-240Zm400 0Zm-400 90v-180l-136 90 136 90Zm400 0v-180l-136 90 136 90Z"/></svg></button>') +
        ('<input id="diaSpeed"  calss="fullScreenButtons" type="number" style=" width : 30px " value="3">') +
        ('<button id="playButton"  calss="fullScreenButtons" onclick="playBut()">Play</button>') +
        ('<button id="nextButton" calss="fullScreenButtons" onclick="nextBut()"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="var(--color-text)"><path d="M100-240v-480l360 240-360 240Zm400 0v-480l360 240-360 240ZM180-480Zm400 0Zm-400 90 136-90-136-90v180Zm400 0 136-90-136-90v180Z"/></svg></button>') +
        ('') +
        ('</div>') +
        ('</div>');
    afci = x

}
function refreshFullScreen(x) {
    document.querySelector('#fullScreenPic').src = fullPicGallery[x].picLink;
    document.querySelector('#artistDataContainer').innerHTML = '<a id="artistData" href="' + fullPicGallery[x].artistLink + '">@' + fullPicGallery[x].tags[0] + '</a><button id="exitButton" calss="fullScreenButtons" onclick="exitBut()">(X)</button>';
}

function nextBut() {
    if (afci < fullPicGallery.length - 1) {
        afci++;
        refreshFullScreen(afci)

    }
    else {
        afci = 0;
        refreshFullScreen(afci);
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === 'ArrowRight') { nextBut() }
})



function prevBut() {
    if (afci > 0) {
        afci--;
        refreshFullScreen(afci);
    }
    else {
        afci = fullPicGallery.length - 1;
        refreshFullScreen(afci);
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === 'ArrowLeft') { prevBut() }
})

function exitBut() {
    document.querySelector('#fullScreenCont').innerHTML = '';
    clearInterval(diaOnOff)
};
document.addEventListener("keydown", function (event) {
    if (event.key === 'Escape') { exitBut() }
})
document.addEventListener("keydown", function (event) {
    console.log(event.key)
})


let diaOnOff = ''
let diaSpeed = 3000
function playBut() {
    if (document.querySelector('#playButton').innerHTML === 'Play') {
        console.log('play');
        nextBut();
        diaSpeed = document.querySelector('#diaSpeed').value * 1000;
        diaOnOff = setInterval(nextBut, diaSpeed);
        document.querySelector('#playButton').innerHTML = 'Stop';
    }
    else {
        console.log('Stop')
        document.querySelector('#playButton').innerHTML = 'Play'
        clearInterval(diaOnOff)
    }



}


///FUL GALLERY LOADING
//console.log(document.querySelector('#fullGallery').innerHTML)
helloGalleryJs()


let galleryCards = document.querySelector('#fullGallery')
//console.log(galleryCards.innerHTML)

for (let i = 0; i < fullPicGallery.length && i !== 50; i++) {
    galleryCards.innerHTML += ('<button id="galCardButton" onclick="fullScreen(' + i + ')">') +
        ('<img id="galCardPic" loading="lazy" src="' + fullPicGallery[i].picLink + '" alt="">') +
        ('</button>') +
        ('<p>' + fullPicGallery[i].tags[1] + '</p>')
    //console.log(i)
}
let texxxt = document.querySelector('#input')

function sayInput() {
    if (texxxt.value === 'hi') {
        console.log('hello')
    }
    else if (texxxt.value === 'random') {
        let x = (Math.floor(Math.random() * fullPicGallery.length))
        console.log('random')
        console.log(x)
        fullScreen(x);
    }

    else { console.log(texxxt.value) }
}





