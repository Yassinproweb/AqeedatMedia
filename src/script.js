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
            <span class="w-fit flex flex-col items-center justify-center gap-0 text-green font-medium">
              <i class="ph-fill ph-file-audio text-3xl"></i>
              <span class="text-xs">Duruus</span>
            </span>
          </div>
          <div class="w-fit items-center justify-start gap-0.5">
            <h4 class="text-6xl font-bold">${dta.books}</h4>
            <span class="w-fit flex flex-col items-center justify-center gap-0 text-green font-medium">
              <i class="ph-fill ph-books text-3xl"></i>
              <span class="text-xs">Books</span>
            </span>
          </div>
          <div class="w-fit items-center justify-start gap-0.5">
            <h4 class="text-6xl font-bold">${dta.audios}</h4>
            <span class="w-fit flex flex-col items-center justify-center gap-0 text-green font-medium">
              <i class="ph-fill ph-microphone text-3xl"></i>
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
          class="play-audio size-16 flex-shrink-0 aspect-square flex items-center justify-center rounded-full ph-fill ph-play text-green text-3xl border-2 border-green bg-transparent"></span>
        <div class="w-full flex-col items-start justify-start gap-1.5">
          <h4 class="text-xl text-green font-bold leading-tight">${audio.darsu}</h4>
          <p class="text-xs text-shade/55 font-medium">${audio.name}</p>
        </div>
      </div>
    `;

    trending.appendChild(div);
  });
};

fetchAudio();
