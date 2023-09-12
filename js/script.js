//1 Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello Word");

//2 Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.//
const namberOne = 1;
const namberTwoo = 3;
let result = namberOne + namberTwoo;

console.log(result);

//3 Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".//

if (typeof result === "number") {
  alert(result + " Este dado é um numero");
} else {
  alert("Este dado nao é um numero ");
}

// 4 Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".;
var fruta = true;
console.log(fruta);

switch (typeof fruta) {
  case "string":
    alert(" Este dado é uma String ");
    break;
  case "number":
    alert(" Este dado é um nomero");
    break;

  case "boolean":
    alert(" Este dado é um booleano");
    break;
  default:
    alert("Dado desconhecido");
}
//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let numberPrimary = 2;
if (numberPrimary % 2 === 0) {
  alert(numberPrimary + " Este numero é Par ");
} else {
  alert(numberPrimary + " Este numero é impar");
}
