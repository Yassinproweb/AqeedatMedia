// header scroll effect
const header = document.querySelector('header')
window.addEventListener("scroll", function() {
  if (window.scrollY > 35) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// search terms and displaying data
const filter = document.getElementById("filter");
const filterBox = document.getElementById("filter-box");
const filteredList = [];

// showing filter box on input and removing it on click outside input and box
document.addEventListener("click", (event) => {
  if (!filter.contains(event.target) && !filterBox.contains(event.target)) {
    filterBox.style.display = "none";
  }
});

filter.addEventListener("input", (e) => {
  filterBox.style.display = "flex";
  filterItems(e.target.value);
  e.stopPropagation();
});

// searching for data on input 
filter.addEventListener("input", (e) => filterItems(e.target.value));

// fetching data from data.json file
async function fetchData() {
  const res = await fetch("/data.json");
  const data = await res.json();

  data.forEach(dta => {
    const li = document.createElement("li")

    filteredList.push(li);

    li.innerHTML = `
          <div class="w-full flex-col items-center gap-2.5 bg-[--white] rounded-lg p-1.5">
            <div class="w-full items-center justify-start gap-1.5">
              <img src="${dta.image}" class="w-14 h-14 object-center object-cover rounded-lg" loading="lazy">
              <div class="w-full flex-col justify-center">
                <h4 class="text-md text-[--theme] font-medium opacity-90">${dta.price}</h4>
                <p class="text-xs text-[--theme] opacity-70">${dta.location}</p>
              </div>
            </div>
            <button class="w-48 text-sm text-[--white] bg-[--color] rounded-lg py-2.5 hover:bg-blue-600 shadow-md">${dta.type}</button>
          </div>
        `;

    filterBox.appendChild(li);
  });
};

fetchData();

function filterItems(searchTerm) {
  filteredList.forEach(list => {
    if (list.querySelector("p").innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      list.classList.remove("hide");
    } else {
      list.classList.add("hide");
    }
  });
};
