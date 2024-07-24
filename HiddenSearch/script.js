const input = document.querySelector("input");
const img = document.querySelector("img");


img.addEventListener("click", () => {
    console.log(input.value);

    input.classList.toggle("expand");

  
}) ;


