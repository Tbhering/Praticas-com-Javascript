console.log("Destinos disponiveis");

const listaDeDestino = new Array("São paulo", "Rio de Janeiro", " Salvador");


console.log(listaDeDestino);

const idadeComprador = 18;
const elaEstaacompanhada = false

if (idadeComprador >= 18 || elaEstaacompanhada == true) {

    console.log("Boa Viagem!");

    console.log(listaDeDestino.splice(0, 1));


}
else {
    console.log("Vendas permitidas apenas para maiores de 18 anos ou menores acompanhados por maiores!")

}


