
let page1El = document.querySelector(".page-1");

window.addEventListener("scroll", () => {
    console.log("screen Scroll", window.scrollY);

    let newSize = 2000 - (window.scrollY / 2); // shrink faster
    if (newSize < 600) newSize = 600;          // set a minimum size

    page1El.style.backgroundSize = `${newSize}px auto`;
    page1El.style.opacity = 1 - (window.scrollY / 800); 
});









 let btnTheme = document.querySelector(`.theme-btn`)


 btnTheme.addEventListener("click",()=>{

   document.body.classList.toggle("dark-theme")
   btnTheme.classList.toggle("dark-btn");

 })

























let kit = ["drum", "cymbais", "snare", "drumhead", "drumstick", "bass"];
let drumEl = []; // will hold {div, audio}

// Main container
let ContainerEl = document.querySelector(".drum");

for (let kits of kit) {
    // Create drum container
    let drumDiv = document.createElement("div");

    let imgEl = document.createElement("img");
    imgEl.src = `ASSET/${kits}.png`;

    let audioEl = document.createElement("audio");
    audioEl.src = `voices/${kits}.mp3`;

    // Append to DOM
    drumDiv.appendChild(imgEl);
    drumDiv.appendChild(audioEl);
    ContainerEl.appendChild(drumDiv);

    // Save for later
    drumEl.push({ drumDiv, audioEl });

    // Mouse click event
    drumDiv.addEventListener("click", () => {
        audioEl.currentTime = 0; // restart sound
        audioEl.play();

        drumDiv.classList.add("active");
        setTimeout(() => drumDiv.classList.remove("active"), 200);
    });
}

// ✅ Single keydown listener
document.addEventListener("keydown", (event) => {
    console.log(`key press ${event.key}`);

    // Example: use numbers 1-6 for drums
    let index = parseInt(event.key) - 1;

    if (index >= 0 && index < drumEl.length) {
        let { drumDiv, audioEl } = drumEl[index];

        audioEl.currentTime = 0;
        audioEl.play();

        drumDiv.classList.add("active");
        setTimeout(() => drumDiv.classList.remove("active"), 200);
    }
});
