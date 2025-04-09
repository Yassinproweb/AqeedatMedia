// Sheikhs’ div
const sheikhs = document.getElementById("sheikhs");

// fetching data from data.json file - Sheikhs’ data
async function fetchData() {
  const res = await fetch("./data.json");
  const data = await res.json();

  data.forEach(dta => {
    const div = document.createElement("div")

    div.innerHTML = `
      <div class="relative w-full aspect-[4/2.85] flex-col items-center justify-start gap-5 px-7 pt-[19%] rounded-2xl shadow-md shadow-green/5 0 overflow-hidden border border-green/15 bg-white">
        <h3 class="text-2xl text-shade text-center font-bold">${dta.name}</h3>
        <div class="div-banner absolute bottom-0 left-0 w-full flex items-center justify-between px-3.5 py-3 bg-white text-shade">
          <div class="w-fit items-center justify-start gap-0.5">
            <h4 class="text-6xl font-bold">${dta.duruus}</h4>
            <span class="w-fit flex flex-col items-center justify-center gap-0 text-shade font-bold">
              <i class="hgi hgi-stroke hgi-folder-audio text-3xl"></i>
              <span class="text-xs">Duruus</span>
            </span>
          </div>
          <div class="w-fit items-center justify-start gap-0.5">
            <h4 class="text-6xl font-bold">${dta.books}</h4>
            <span class="w-fit flex flex-col items-center justify-center gap-0 text-shade font-bold">
              <i class="hgi hgi-stroke hgi-book-04 text-3xl"></i>
              <span class="text-xs">Books</span>
            </span>
          </div>
          <div class="w-fit items-center justify-start gap-0.5">
            <h4 class="text-6xl font-bold">${dta.audios}</h4>
            <span class="w-fit flex flex-col items-center justify-center gap-0 text-shade font-bold">
              <i class="hgi hgi-stroke hgi-mic-01 text-3xl"></i>
              <span class="text-xs">Audios</span>
            </span>
          </div>
        </div>
      </div>
    `;

    sheikhs.appendChild(div);
  });
};

fetchData();

// audios’ div
const trending = document.getElementById("trending");

// fetching audios from trending.json file
async function fetchAudio() {
  const res = await fetch("./trending.json");
  const audios = await res.json();

  audios.forEach(audio => {
    const div = document.createElement("div")

    div.innerHTML = `
      <div role="button"
        class="w-full items-center justify-between gap-7 px-5 py-3.5 rounded-xl shadow-md shadow-shade/5 bg-shade/5">
        <span
          class="play-audio hgi hgi-stroke hgi-play-circle w-16 flex items-center justify-center text-green text-5xl font-light"></span>
        <div class="w-full flex-col items-start justify-start gap-1.5">
          <h4 class="text-base text-green font-bold leading-tight line-clamp-2">${audio.darsu}</h4>
          <p class="text-xs text-shade/55 font-medium">${audio.name}</p>
        </div>
      </div>
    `;

    trending.appendChild(div);
  });
};

fetchAudio();

// audios’ div
const topic = document.getElementById("series");

// fetching audios from series.json file
async function fetchSeries() {
  const res = await fetch("./series.json");
  const series = await res.json();

  series.forEach(serie => {
    const div = document.createElement("div")

    div.innerHTML = `
      <div role="button"
        class="w-full items-center justify-between gap-7 px-5 py-3.5 rounded-xl shadow-md shadow-shade/5 bg-shade/5">
        <div class="w-full flex-col items-start justify-start gap-1.5">
          <h4 class="text-base text-green font-bold leading-tight line-clamp-2">${serie.title}</h4>
          <p class="text-xs text-shade/55 font-medium">${serie.sheikh}</p>
        </div>
        <div class="w-fit flex-shrink-0 items-center justify-start gap-0.5">
          <h4 class="text-6xl font-bold text-green">${serie.audios}</h4>
          <span class="w-fit flex flex-col items-center justify-center gap-0 text-green font-bold">
            <i class="hgi hgi-stroke hgi-folder-audio text-3xl"></i>
            <span class="text-xs">Audios</span>
          </span>
        </div>
      </div>
    `;

    topic.appendChild(div);
  });
};

fetchSeries();

// change footer year every min
function updateYear() {
  const now = new Date();
  const year = now.getFullYear();
  document.getElementById("date").textContent = year;
}

updateYear();
setInterval(updateYear, 60000);

// audio player
const content = document.querySelector(".content"),
  audioTitle = document.getElementById("audio-title"),
  audioSheikh = document.getElementById("audio-sheikh"),
  playPause = document.getElementById("play-pause"),
  playPauseBtn = document.getElementById("play-pause-btn"),
  Audio = document.getElementById("now-playing"),
  backward15 = document.getElementById("backward-15"),
  forward15 = document.getElementById("forward-15"),
  prevBtn = document.querySelector(".hgi-previous"),
  nextBtn = document.querySelector(".hgi-next"),
  progressBar = document.getElementById("progress-bar"),
  progressDetails = document.getElementById("progress-details"),
  repeatBtn = document.getElementById("repeat"),
  Playimage = document.getElementById("audio-thumb");

let index = 1;

window.addEventListener("load", () => {
  loadData(index);
});

function loadData(indexValue) {
  audioTitle.innerHTML = duruus[indexValue - 1].title;
  audioSheikh.innerHTML = duruus[indexValue - 1].sheikh;
  Playimage.src = duruus[indexValue - 1].img;
  Audio.src = duruus[indexValue - 1].dars;
}

playPause.addEventListener("click", () => {
  const isMusicPaused = content.classList.contains("paused");
  if (isMusicPaused) {
    pauseSong();
  }
  else {
    playSong();
  }
});

function playSong() {
  content.classList.add("paused");
  playPauseBtn.classList.replace("hgi-play-button", "hgi-pause");
  Audio.play();
}

function pauseSong() {
  content.classList.remove("paused");
  playPauseBtn.classList.replace("hgi-pause", "hgi-play-button");
  Audio.pause();
}

nextBtn.addEventListener("click", () => {
  nextSong();
});

prevBtn.addEventListener("click", () => {
  prevSong();
});

function nextSong() {
  index++;
  if (index > duruus.length) {
    index = 1;
  }
  else {
    index = index;
  }
  loadData(index);
  playSong();
}

function prevSong() {
  index--;
  if (index <= 0) {
    index = duruus.length;
  }
  else {
    index = index;
  }
  loadData(index);
  playSong();
}

Audio.addEventListener("timeupdate", (e) => {
  const initialTime = e.target.currentTime; // Get current music time
  const finalTime = e.target.duration; // Get music duration
  let BarWidth = (initialTime / finalTime) * 100;
  progressBar.style.width = BarWidth + "%";

  progressDetails.addEventListener("click", (e) => {
    let progressValue = progressDetails.clientWidth; // Get width of Progress Bar
    let clickedOffsetX = e.offsetX; // get offset x value
    let MusicDuration = Audio.duration; // get total music duration

    Audio.currentTime = (clickedOffsetX / progressValue) * MusicDuration;

  });

  //Timer Logic
  Audio.addEventListener("loadeddata", () => {
    let finalTimeData = content.querySelector(".final");

    //Update finalDuration  
    let AudioDuration = Audio.duration;
    let finalMinutes = Math.floor(AudioDuration / 60);
    let finalSeconds = Math.floor(AudioDuration % 60);
    if (finalSeconds < 10) {
      finalSeconds = "0" + finalSeconds;
    }
    finalTimeData.innerText = finalMinutes + ":" + finalSeconds;

  });

  //Update Current Duration
  let currentTimeData = content.querySelector(".current");
  let CurrentTime = Audio.currentTime;
  let currentMinutes = Math.floor(CurrentTime / 60);
  let currentSeconds = Math.floor(CurrentTime % 60);
  if (currentSeconds < 10) {
    currentSeconds = "0" + currentSeconds;
  }
  currentTimeData.innerText = currentMinutes + ":" + currentSeconds;

  //repeat button logic
  repeatBtn.addEventListener("click", () => {
    Audio.currentTime = 0;
  });
});

//Playlist Logic
Playlist.addEventListener("click", () => {
  var randIndex = Math.floor(Math.random() * duruus.length) + 1; // Select random betwn 1 and song array length
  loadData(randIndex);
  playSong();
});

Audio.addEventListener("ended", () => {
  index++;
  if (index > duruus.length) {
    index = 1;
  }
  loadData(index);
  playSong();
});

