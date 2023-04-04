//HTML buttons
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const reset = document.querySelector("#reset")

//establishing global total
let total = 0;


//event listeners to subtract, add, and reset global total
minus.addEventListener("click", () => {
    total--;
    document.getElementById("total").innerHTML = total;
})

plus.addEventListener("click", () => {
    total++;
    document.getElementById("total").innerHTML = total;
})

reset.addEventListener("click", () => {
    total = 0;
    document.getElementById("total").innerHTML = total;
})