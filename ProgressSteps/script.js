const prev = document.getElementById("prev")
const next = document.getElementById("next")
const linea = document.querySelectorAll(".linea")

const arrayLinea = Array.from(linea)
console.log(arrayLinea);

const circulos = document.querySelectorAll(".circulo")
const arrayCirculos = Array.from(circulos)
console.log(arrayCirculos[0].classList.contains("blue"));

arrayCirculos.find(c => c.classList.contains("blue"))
console.log(arrayCirculos);

next.addEventListener("click",(e)=>{
console.log(e);

const a =  arrayCirculos.find(h2 => !h2.classList.contains("blue"));

    if(!a.classList.contains("blue")){
        a.classList.add("blue")
    }

    if(arrayCirculos[3].classList.contains("blue")){
        next.classList.remove("buttomFalse")
        next.classList.add("buttomFalse") 
     }

     if(arrayCirculos[1].classList.contains("blue")){
        prev.classList.remove("buttomFalse") 
    }
    pintarAzul()
})

function pintarAzul(){
    for (let i = 0; i < arrayCirculos.length; i++) {
        try {
            if(arrayCirculos[i].classList.contains("blue") && arrayCirculos[i+1].classList.contains("blue")){
                arrayLinea[i].classList.add("azul")
            }
        } catch (error) {
        }
       
    }
}

const invertido = [...arrayCirculos].reverse(); 
console.log(invertido);
console.log(invertido[0]);

prev.addEventListener("click", (e) => {
    
    
    const a = invertido.find((h2) => h2.classList.contains("blue"));

    
    if(!((a.id==1) && (invertido[3].id ==1))){
        a.classList.remove("blue");
    }

    if(a.id ==2){
        prev.classList.add("buttomFalse") 

    }

    if(invertido[1].classList.contains("blue")){
        next.classList.remove("buttomFalse") 
    }
    
    despintarAzul();
    
  });

  function despintarAzul(){
    for (let i = 0; i < arrayCirculos.length; i++) {
        try {
            if(arrayCirculos[i].classList.contains("blue") && !arrayCirculos[i+1].classList.contains("blue")){   
                arrayLinea[i].classList.remove("azul")
            }
        } catch (error) {
        }
       
    }

}

