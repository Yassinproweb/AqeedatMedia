// Sheikhs’ div
const sheikhs = document.getElementById("sheikhs");

// fetching data from data.json file
async function fetchData() {
  const res = await fetch("./data.json");
  const data = await res.json();

  data.forEach(dta => {
    const div = document.createElement("div")

    div.innerHTML = `
      <div class="relative w-full aspect-[4/2.85] flex-col items-center justify-center gap-5 px-7 rounded-2xl shadow-md shadow-green/5 0 overflow-hidden border border-green/15 bg-white">
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
