
let numero1 = parseInt(prompt("Digite um número"))
let numero2 = parseInt(prompt("Digite outro número"))
let diferenca = numero1 - numero2

if  (numero1 > numero2)

alert ("O primeiro numero é maior e a diferença é " + Math.abs(diferenca))

else (numero2 > numero1)

alert ("O segundo numero é maior e a diferença é " + Math.abs(diferenca)) 

let num1 = parseFloat(prompt("Digite um número"))
let num2 = parseFloat(prompt("Digite um segundo número"))

if (num1 > num2)

alert ("O número " + num1 + " é maior que o " + num2)

else if (num1 == num2)

alert ("Os números são iguais")

else {(num2 > num1)

alert ("O número " + num2 + " é maior que o " + num1)}

let salario1 = parseFloat(prompt("Digite seu salário"))
let emprestimo = parseFloat(prompt("Digite o empréstimo pretendido"))

if (salario*0.3 > emprestimo)

alert ("Empréstimo concedido")

else{ (salario*0.3 < emprestimo)

alert ("Empréstimo negado")} 

let numero = parseInt(prompt("Digite um número"))

if (numero%15==0)
alert ("número inválido")

else if (numero%3==0)

alert ("div por 3") 

else if (numero%5==0)
alert ("div por 5")

else if (numero%2==0)
alert ("par")

else {(numero%2!==0)
alert ("impar")} 

let diadasemana = parseInt(prompt("Digite um número de 1 a 7"))

if (diadasemana >7)
alert ("Error")

else if (diadasemana == 1)
alert("domingo")

else if (diadasemana ==2)
alert("segunda-feira")

else if (diadasemana ==3)
alert ("terça-feira")

else if (diadasemana ==4)
alert ("quarta-feira")

else if (diadasemana ==5)
alert ("quinta-feira")

else if (diadasemana ==6)
alert ("sexta-feira")

else if (diadasemana ==7)
alert ("sábado") 

let salario = parseInt(prompt("Digite seu salário"))
let reajuste = parseFloat(prompt("Digite seu reajuste em %"))

let salarioreajustado = salario*(1+ (reajuste/100))

alert ("Seu salário reajustado é de " + salarioreajustado) 

let dolar = parseFloat(prompt("Digite seu montante em dólar")).toFixed(2)
let cotação = parseFloat(prompt("Digite a cotação atual")).toFixed(2)
let real = (dolar*cotação).toFixed(2)

alert("O valor de $" + dolar + " é equivalente a R$" + real + " tendo " + cotação + " como cotação.") 

let praga = parseInt(prompt("Digite o número correspondente a praga a ser combatida"))


if (praga == 1)
praga = 50

else if (praga ==2 )
praga = 100

else if (praga ==3)
praga =150

else { (praga =4)
praga =250}

let area = parseInt(prompt("Digite a área em acres a ser pulverizada"))

let custo = praga*area

let custo2 = ((custo-750)*0.9)+750

let custo3 = (((custo*0.95)-750)*0.9)+750

if (custo<750)
alert("O valor a ser pago é " + custo)

else if (custo > 750)
alert("O valor a ser pago é " + custo2)

else {( area>1000)
alert ("O valor a ser pago é " + custo3)} 

let tempo = parseInt(prompt("Qual foi a duração em horas da viagem?")).toFixed(2)
let velocidade = parseInt(prompt("Qual foi a velocidade média , em km/h, percorrida?")).toFixed(2)

let distancia = (velocidade*tempo).toFixed(2)
let litros = (distancia/12).toFixed(2)

alert ("Seu veículo percorreu " + distancia + " km a " + velocidade + " km/h em " + tempo + " horas de viagem e consumiu " + litros + " litros de gasolina.")


let valor = parseFloat(prompt("Digite o valor da prestação"))
let taxa = parseFloat(prompt("Digite a taxa em % da prestação"))
let dia = parseFloat(prompt("Digite os dias de atraso"))

let prestacao = valor +(valor*(taxa/100)*dia)
if (dia < 1 )

alert ("Valor inválido o tempo de atraso deve ser em dias.")

else if (Number.isInteger(dia)== false)

alert ("Valor inválido o tempo de atraso deve ser em dias.")

else { alert ("R$ " + prestacao)}
