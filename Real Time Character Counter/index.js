const textareaEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const remaincounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter(){
    totalcounterEl.innerText = textareaEl.value.length;
    
    remaincounterEl.innerText = textareaEl.getAttribute("maxLength") - totalcounterEl.innerText;
}
