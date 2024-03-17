let form = document.querySelector("form");
let input = document.querySelector("input[type='email']");

form.addEventListener("submit", function (e) {
    if (input.value.length === 0) {
        document.querySelector("form span").style.display = 'block';
        input.classList.add("error");
        e.preventDefault();
    } else {
        document.querySelector("form span").style.display = 'none';
        input.classList.remove("error");
        return 1;
    }
});