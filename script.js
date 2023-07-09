console.log(" Welcome to AMUSIC ");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('stay1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myprogressbar");


let songs = [
    { songName: "stay", filepath: "song/stay1.mp3", coverpath: "cover/stay.jpg" },
    { songName: "breath", filepath: "song/breath 6.mp3", coverpath: "cover/breath.jpg" },
    { songName: "older", filepath: "song/older2.mp3", coverpath: "cover/older.jpg" },
    { songName: "make me move", filepath: "song/make me move 5.mp3", coverpath: "cover/move.jpeg" },
    { songName: "no friends", filepath: "song/no friends 3.mp3", coverpath: "cover/no friends.jpg" },
    { songName: "nights", filepath: "song/nights 4.mp3", coverpath: "cover/nights.jpg" },
]

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click'() => {
    if(audioElement.paused || audioElement.currentTime <= 0){
    audioElement.play();
}

})
// Listen to Events
myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // update seekbar

})