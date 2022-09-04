
const listaDeDestino = new Array("São paulo", "Rio de Janeiro", "salvador");


const idadeComprador = 18;
const elaEstaacompanhada = false;
const passagemComprada = false;
const destino = "Rio de Janeiro";


console.log("\n Destinos possíveis:");
console.log(listaDeDestino);

const podeComprar = idadeComprador >= 18 || elaEstaacompanhada == true;

let contador = 0;
while(contador<3){
    if(listaDeDestino[contador] == destino){
        console.log("Destino existe");
    }else{
        console.log("Destino não existe")
    };
    contador += 1;
}



