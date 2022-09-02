console.log("Cálculando desconto sobre o sálario")

const salario = 1249;

if (salario >= 1250) {
    console.log("desconto do FGTS");
    console.log(salario / 100 * 10);
    console.log("Desconto da alimentação");
    console.log(salario / 100 * 1);
    console.log("Desconto do transporte")
    console.log(salario / 100 * 6)
} else if (salario < 1250) {

    console.log("desconto do FGTS");
    console.log(salario / 100 * 10);
}
//console.log()

