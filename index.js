
//fiz todos comentários considerando o texto solicitado mas abordando o uso na realidade.

const respostaDoUsuario = prompt("Digite o número que você quer testar")

const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
/*
a) Explique o que o código faz. Qual o teste que ele realiza? 
    
    é recebido através do prompt uma entrada, essa entrada é submetida a um   
    casting na tentativa de converter a entrada para o tipo number (válido), porém
    pode ocorrer a falha na conversão com entrada null por exemplo (caso o usúario clique em cancelar)
    sendo null, o sistema vai passar no teste o que é um erro, se o usuário clicar
    em ok sem digitar nada induzira o sistema a um erro de validação também.

    o teste para verificar se o número tem uma divisão exata por 2 não é 100% funcional, 
    pois uma entrada null ou vázia retornará nesse caso 0, validando a entrada, para ser 
    feita a validação completa seria necessário utilizar recursos que não foram ensinados ainda no curso,
    o que impossibilita garantir a validação 100%.

b) Para que tipos de números ele imprime no console "Passou no teste"? 
    
    deveria imprime apenas para o caso do usuário digitar um número (inteiro e par )
    ( observar o ítem a)

c) Para que tipos de números a mensagem é "Não passou no teste"?
    imprime para qualquer outro número ou string que após o casting não seja um ( inteiro e par )
    ( observar o ítem a )
    
*/


//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
      
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    
 /*   
    a) Para que serve o código acima?

        o código em questão serve para receber uma determinada fruta e imprimir o seu nome e valor  
    
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

        será impresso: O preço da fruta Maçã é R$ 2.25
  
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

        será impresso: O preço da fruta Pêra é R$ 5

*/

//3. Leia o código abaixo:
    
    
    const number = Number(prompt("Digite o primeiro número."))
    
    if(number > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)

    /*
    
    a) O que a primeira linha está fazendo?
        
        atribuindo um dado recebido através do prompt já fazendo o casting para o tipo number
    
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

        se digigar 10 será impresso:
        Esse número passou no teste   
        Essa mensagem é secreta!!!

        agora se digitar -10 haverá um erro ( explicarei no ítem c )
    
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

        sim, o console.log(mensagem) implicará em erro caso a condição de validação não senda atenditda, 
        isso porque a variável mensagem é de escopo local ao if, logo não é acessível fora do if.

    */