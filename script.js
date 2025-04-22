let text = document.querySelector(".text");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    if (text.style.display === "none" || text.style.display == '') {
        text.style.display = "block";
        btn.innerHTML = "CLOSE";
    } else {
        text.style.display = "none";
        btn.innerHTML = "OPEN";
    }
});
