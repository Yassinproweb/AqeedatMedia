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
const content = document.getElementById("playing"),
  audioTitle = document.getElementById("audio-title"),
  audioSheikh = document.getElementById("audio-sheikh"),
  playPause = document.getElementById("play-pause"),
  playPauseBtn = document.getElementById("play-pause-btn"),
  Audio = document.getElementById("now-playing"),
  prevBtn = document.getElementById("hgi-previous"),
  nextBtn = document.getElementById("hgi-next"),
  progressBar = document.getElementById("progress-bar"),
  progressDetails = document.getElementById("progress-details"),
  repeatBtn = document.getElementById("repeat"),
  Playimage = document.getElementById("audio-thumb"),
  shuffle = document.getElementById("shuffle");

let duruus = [
  {
    title: "Abaffe! Shayātwīn zirina obuyinza ku muntu?",
    sheikh: "Shk. Muhammad Quraysh Mazinga",
    img: "/imgs/thumb8.jpg",
    dars: "/audio/sitaane.m4a"
  },
  {
    title: "Omuntu agezeseddwa n'eddogo akola atya?",
    sheikh: "Shk. Hamzah Kayiira",
    img: "/imgs/thumb6.jpg",
    dars: "/audio/eddogo.mp3"
  },
  {
    title: "Ebituufu ku kiro kya Laylat Al-Qadr",
    sheikh: "Shk. Hamzah Muwonge",
    img: "/imgs/thumb9.jpg",
    dars: "/audio/darsu.aac"
  },
  {
    title: "Tafsīr Sūratul Kahf - Part 60",
    sheikh: "Shk. Abdu-Rrahmaan Mukisa",
    img: "/imgs/thumb3.jpg",
    dars: "/audio/tafsir.mp3"
  }
]

let index = 0;

window.addEventListener("load", () => {
  loadData(index);
});

function loadData(indexValue) {
  audioTitle.innerHTML = duruus[indexValue].title;
  audioSheikh.innerHTML = duruus[indexValue].sheikh;
  Playimage.src = duruus[indexValue].img;
  Audio.src = duruus[indexValue].dars;
}

playPause.addEventListener("click", () => {
  const isMusicPaused = content.classList.contains("paused");
  if (!isMusicPaused) {
    pauseDarsu();
  }
  else {
    playDarsu();
  }
});

function playDarsu() {
  content.classList.remove("paused");
  playPauseBtn.classList.replace("hgi-play", "hgi-pause");
  Audio.play();
}

function pauseDarsu() {
  content.classList.add("paused");
  playPauseBtn.classList.replace("hgi-pause", "hgi-play");
  Audio.pause();
}

nextBtn.addEventListener("click", () => {
  nextDarsu();
});

prevBtn.addEventListener("click", () => {
  prevDarsu();
});

function nextDarsu() {
  index++;
  if (index >= duruus.length) {
    index = 0;
  }
  else {
    index = index;
  }
  loadData(index);
  playDarsu();
}

function prevDarsu() {
  index--;
  if (index < 0) {
    index = duruus.length - 1;
  }
  else {
    index = index;
  }
  loadData(index);
  playDarsu();
}

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const formattedHrs = hrs > 0 ? hrs + ":" : "";
  const formattedMins = hrs > 0 ? String(mins).padStart(2, "0") : mins;
  const formattedSecs = String(secs).padStart(2, "0");

  return formattedHrs + formattedMins + ":" + formattedSecs;
}

Audio.addEventListener("timeupdate", (e) => {
  const initialTime = e.target.currentTime; // Get current music time
  const finalTime = e.target.duration; // Get music duration
  let BarWidth = (initialTime / finalTime) * 100;
  progressDetails.style.width = BarWidth + "%";

  progressBar.addEventListener("click", (e) => {
    let progressValue = progressBar.clientWidth; // Get width of Progress Bar
    let clickedOffsetX = e.offsetX; // get offset x value
    let MusicDuration = Audio.duration; // get total music duration

    Audio.currentTime = (clickedOffsetX / progressValue) * MusicDuration;
  });

  //Timer Logic
  // Audio.addEventListener("loadeddata", () => {
  let finalTimeData = document.getElementById("play-final");
  finalTimeData.innerText = formatTime(finalTime);
  // });

  //Update Current Duration
  let currentTimeData = document.getElementById("play-start");
  currentTimeData.innerText = formatTime(initialTime);

  //repeat button logic
  repeatBtn.addEventListener("click", () => {
    Audio.currentTime = 0;
  });
});

//shuffle Logic
shuffle.addEventListener("click", () => {
  var randIndex = Math.floor(Math.random() * duruus.length) + 1; // Select random between 1 and song array length
  loadData(randIndex);
  playDarsu();
});

Audio.addEventListener("ended", () => {
  index++;
  if (index > duruus.length) {
    index = 0;
  }
  loadData(index);
  playDarsu();
});

