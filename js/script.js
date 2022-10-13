let songindex = 0;
let audioElement = new Audio('sound/music/Bear bear & Friends - GLOW (Lyrics).mp3');
let masterPlay = document.getElementById("masterPlay");
let songitem = Array.from(document.getElementsByClassName('songitem'));
let myprogares = document.getElementById("myprogares");
var songs = [
    { songName: "riends - GLOW (Lyrics)", filePath: "sound/music/Bear bear & Friends - GLOW (Lyrics).mp3'", coverPath: "sound/download (1).jpg" },
    { songName: "Cartoon_-_On_&_On_", filePath: "sound/music/Cartoon_-_On_&_On_(feat._Daniel_Levi)_[NCS_Release](256k).mp3", coverPath: "sound/download (1).jpg" },
    { songName: "Clean_Bandit_-_Rockabye", filePath: "sound/music/Clean_Bandit_-_Rockabye_(feat._Sean_Paul_&_Anne-Marie)_[Official_Video](256k).mp3", coverPath: "sound/download.jpg" },
    { songName: "Deep_Chills_-_Run_Free", filePath: "sound/music/Deep_Chills_-_Run_Free_(feat._IVIE)_(Official_Audio)_TikTok_#shoechange(256k).mp3", coverPath: "sound/fe529a64193929.5aca8500ba9ab.jpg" },
    { songName: "Dj_Snake_-_Let_Me_Love_You", filePath: "sound/music/Dj_Snake_-_Let_Me_Love_You_ft_Justin_Bieber(256k).mp3", coverPath: "sound/images.jpg" },
    { songName: "Dua_Lipa_-_Levitating", filePath: "sound/music/Dua_Lipa_-_Levitating_Featuring_DaBaby_(Official_Music_Video)(256k).mp3", coverPath: "sound/images.png" },
    { songName: "Ed_Sheeran_-_Shape_of_You", filePath: "sound/music/Ed_Sheeran_-_Shape_of_You_(Official_Music_Video)(256k).mp3", coverPath: "sound/download (1).jpg" },
    { songName: "La_Casa_de_Papel", filePath: "sound/music/La_Casa_de_Papel___My_Life_Is_Going_On_-_-_Cecilia_Krull_(Vídeo_Oficial)(256k).mp3", coverPath: "sound/download.jpg" },
    { songName: "Maggie_Lindemann_-_Pretty_Girl", filePath: "sound/music/Maggie_Lindemann_-_Pretty_Girl_[Official_Music_Video](256k).mp3", coverPath: "sound/download (1).jpg" },
    { songName: "Ellie_Goulding", filePath: "sound/music/Ellie_Goulding_-_Love_Me_Like_You_Do_(Official_Video)(256k).mp3", coverPath: "sound/download (1).jpg" },
]

function masterP() {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circleT");
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circleT");
    }
}
audioElement.addEventListener('timeupdate', () => {
    Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myprogares.value = Progress;
});
myprogares.addEventListener('change', () => {
    audioElement.currentTime = myprogares.value * audioElement.duration / 100;
});


songitem.forEach(function(element, value) {
    element.getElementsByTagName("img")[0].src = songs[value].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[value].songName;
});
let makeallplays = () => {
    Array.from(document.getElementById("songitempaly")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
    })
}
Array.from(document.getElementById("songitempaly")).forEach((element) => {
        element.addEventListener('click', (e) => {
            console.log(element);
            makeallplays();
            element.classList.remove("fa-caret-right");
            element.classList.add("fa-pause-circle");
            console.log(songitempaly);

        });
    })
    // ================ nathi chaltu========
    // masterPlay.addEventListener('click', () => {
    //     document.getElementById("let").style.color = "yellow";

//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.remove("fa-play-circle");
//         masterPlay.classList.add("fa-pause-circleT");
//     }
// })