const storageSongs = [
    {
        title: "Tropical Sunset",
        cover: "cover1.jpg",
        sound: "Tropical Sunset.m4a",
    },
    {
        title: "Travel",
        cover: "cover2.jpg",
        sound: "tubebackr & JayJen - Travel.m4a",
    },
    {
        title: "Flamingo",
        cover: "cover3.jpg",
        sound: "Vlad Gluschenko - Flamingo.m4a",
    },{
        title: "AK  Wanderlust",
        cover: "cover4.jpg",
        sound: "AK  Wanderlust.mp3",
    },{
        title: "Infinity",
        cover: "cover5.jpg",
        sound: "Victoriya x Andy Leech  Infinity.mp3",
    },
    
];

let actualSong = null;

const listSong = document.getElementById('listMusic');
const coverSong = document.getElementById('cover-sound');
const titleSong = document.getElementById('title-sound');
const audio = document.getElementById('audio');

const prev = document.getElementById('prev-sound');
const play = document.getElementById('play-sound');
const next = document.getElementById('next-sound');

const progress = document.getElementById('progress');

const progressContainer = document.getElementById('progress-container');
progressContainer.addEventListener('click', setProgress);

const inicioCon = document.getElementById('Inicio');
const inicioSec = document.getElementById('Iniciosecon');


const finalCon = document.getElementById('Final');
const finalConSec = document.getElementById('Finalsecon');



audio.addEventListener('timeupdate', updateProgress);

prev.addEventListener('click', ()  => prevSong());
next.addEventListener('click', ()  => nextSong());

play.addEventListener('click', () => {
    if(audio.paused){
        playSong();
    }else{
        pauseSong();
    }
});


// Para cargar la lista y de los audios
function loadSong() {
    storageSongs.forEach((song, index) => {
        // Valores Predeterminados
        coverSong.src = `img/${storageSongs[2].cover}`;
        titleSong.innerText = `${storageSongs[2].title}`;

        const songLi = document.createElement('li');
        songLi.textContent = storageSongs[index].title;
        listSong.appendChild(songLi);
        songLi.addEventListener('click', () => {
            loadCoverAndTitle(index);
            loadSongs(index);
        });
    });
}
function loadSongs(songIndex) {
    if(songIndex !== actualSong){
        changeActive(actualSong, songIndex);
        actualSong = songIndex;
        audio.src = `Music/${storageSongs[songIndex].sound}`;
        audio.play()
    }
}


function updateControls() {
    if(audio.paused){
        play.classList.toggle('fa-pause');
        play.classList.toggle('fa-play');
    }else{
        play.classList.toggle('fa-play');
        play.classList.toggle('fa-pause');
    }
}

function playSong() {
    if(actualSong !== null){
        audio.play();
        updateControls();
    }
}

function pauseSong() {
    audio.pause();
    updateControls();
}


function loadCoverAndTitle(indexCover) {
    coverSong.src = `img/${storageSongs[indexCover].cover}`;

    // Cagar el titulo de la musica
    titleSong.innerText = `${storageSongs[indexCover].title}`;
}

function changeActive(lastIndex, newIndex){
    const listado = document.querySelectorAll('li');
    if(lastIndex !== null){
        listado[lastIndex].classList.remove('active');
    }
        listado[newIndex].classList.toggle('active');
}

function prevSong() {
    if(actualSong > 0){
        loadSongs(actualSong - 1);
        loadCoverAndTitle(actualSong);
    }else{
        loadCoverAndTitle(storageSongs.length - 1);
        loadSongs(storageSongs.length - 1);
    }
}

function nextSong() {
    if(actualSong < storageSongs.length - 1){
        loadSongs(actualSong + 1);
        loadCoverAndTitle(actualSong);
    }else{
        loadSongs(0);
        loadCoverAndTitle(0);
    }
}

function updateProgress(event) {
    let {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100;
    progress.style.width = percent + '%';

    let  inicioMic = Math.floor((currentTime / 60));
    let inicioSecu = Math.floor((currentTime * 60) / 60) % 60;

    let final = Math.floor((duration / 60));
    let seconfinal = Math.floor(((duration * 60) / 60) % 60);

    inicioCon.innerText = `${inicioMic}`;

    if(inicioSecu < 10){
        inicioSec.innerText = `0${inicioSecu}`;
    }else{
        inicioSec.innerText = `${inicioSecu}`;
    }

    let a = (seconfinal - inicioSecu);


    if(a < 0){
        finalConSec.innerText  = `${(seconfinal + 60) - inicioSecu}`;
        // console.log('hola');
    }else{
        finalConSec.innerText  = `${seconfinal - inicioSecu}`;
    }



    // console.log((seconfinal + 60) - inicioSecu );
    // console.log((seconfinal + 60) - inicioSecu);


    finalCon.innerText  = `${final}`;
    finalConSec.innerText  = `${seconfinal}`;

}

function setProgress(event) {
    const totalWidth = this.offsetWidth;
    const progressWith = event.offsetX;
    const current = (progressWith / totalWidth) * audio.duration
    audio.currentTime = current;
}

audio.addEventListener('ended', () => nextSong());
loadSong();