
const listaDeDestino = new Array("São paulo", "Rio de Janeiro", "salvador");


const idadeComprador = 17;
const elaEstaacompanhada = true;
let passagemComprada = false;
const destino = "salvador";



console.log("\n Destinos possíveis:");
console.log(listaDeDestino);

//let podeComprar = idadeComprador >= 18 || elaEstaacompanhada == true;


let contador = 0;
let destinoExiste = false
for (let i = 0; i < 3; i++) {
    if (listaDeDestino[i] == destino);
    passagemComprada = true;
    destinoExiste = true;
  if ( idadeComprador >= 18 || elaEstaacompanhada == true

    ){
        console.log("Destino existe");
    };
    break;
   
}

if (idadeComprador >= 18 || elaEstaacompanhada == true && passagemComprada == true && destinoExiste == true) {
    
    console.log("Boa-Viagem!")
} else {
    console.log("Desculpa, houve algum erro! \n Tente novamente em alguns segundos.")
}





