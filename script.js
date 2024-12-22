// Initialize the variable
let songIndex = 0;
let audioElement = new Audio("Songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
// let songItems = document.getElementsByClassName('songItem');
let songs = [
  {
    songName: "Pehle-Bhi-Main",
    filePath: "Songs/1.mp3",
    coversPath: "Cover/1.jpg",
  },
  { songName: "Shayad", filePath: "Songs/2.mp3", coversPath: "Cover/2.jpg" },
  {
    songName: "Phir-Mohabbat",
    filePath: "Songs/3.mp3",
    coversPath: "Cover/3.jpg",
  },
  { songName: "Dil", filePath: "Songs/4.mp3", coversPath: "Cover/4.jpg" },
  { songName: "Kesariya", filePath: "Songs/5.mp3", coversPath: "Cover/5.jpg" },
  {
    songName: "Haan Tu Hai",
    filePath: "Songs/6.mp3",
    coversPath: "Cover/6.jpg",
  },
  {
    songName: "Khamoshiyan",
    filePath: "Songs/7.mp3",
    coversPath: "Cover/7.jpg",
  },
  {
    songName: "AdhuriKahani",
    filePath: "Songs/8.mp3",
    coversPath: "Cover/8.jpg",
  },
];

// audioElement.play();

// Handle play/Pause/click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //  Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      index = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `Songs/${index}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById('next').addEventListener('click',() => {
  if(songIndex>=9){
  songIndex = 0;
  }
  else{
    songIndex +=1;
  }
  audioElement.src = `Songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
})
 
document.getElementById('previous').addEventListener('click',() => {
  if(songIndex<=0){
  songIndex = 0;
  }
  else{
    songIndex -=1;
  }
  audioElement.src = `Songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
})


