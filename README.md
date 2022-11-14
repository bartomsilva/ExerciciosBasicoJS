
# EXERCÍCIOS BÁSICOS

-  Leia atentamente o texto e siga a rigor o que se pede, assim estará praticando tanto
   a parte técnica como a parte de interpretação.

//////////////////////////////////////////////////

PARA TODOS EXERCÍCIOS 

Observação: NÃO COPIE E COLE, faça tudo digitando,
            E DIGITE EXATAMENTE O MESMO CONTEÚDO.
            e nas impressões no console imprima
            utilizando sempre template strings.
            
//////////////////////////////////////////////////

#  Exercício 1

01) crie uma nova pasta, para por todos os exercícios desta lista (pode ser junto as exercícios da Labenu)

02) dentro da pasta que você criou, crie dois arquivos, são eles:
   
   a)  index.html ( e dentro dele crie toda estrura básica, conforme abaixo )

   <!DOCTYPE html>
   <html>

   <head>
      <meta charset="utf-8">
      <title>Exercícios</title>
      <script src="script.js"></script>
   </head>

   <body>

   </body>

   </html>

   b) crie também o arquivo script.js

Com a pasta criada e os dois arquivos nela agora vamos no passo a passo.


# Exercício 2

Conceitos Fundamentais 

Faça tudo dentro do script.js


a) Crei todas varáveis abaixo com os seus respectivos valores.

   const nome = "Valentino"   
   const idade = 33   
   const casado = true   
   const notas = [ 7, 8, 9, 10 ]
   const hobbys = "Futebol,Ciclismo,Ler,Estudar,Filmes"
   const surpresa = ( 9*4 <= 50 )
   
b) agora imprima no console utilizando o console.log o tipo de cada variável.
   utilize o typeof para fazer isso.  

   veja no console se os valores impressos são iguais a esses, se correu tudo bem siga a diante:
      string
      number
      boolean
      objetct
      string
      boolean

c) agora imprima no console, a quantidade de caracteres ou itens das variáveis 
   nome, notas e hobbys.

   nome  ( como resultado deverá imprimir: 9 letras)
   notas ( como resultado deverá imprimir: 4 itens )
   hobbys ( como resultado deverá imprimir: 35 caracteres )


////////////////////////////////////////////////////////////////////////////
Se chegou até aqui tendo feito tudo exatamente como pedido, parabéns, se não 
fez refaça!!! faça, escreve exatamente como foi pedido, pôs seguir roteiros
faz parte da vida e obrigação do desenvolvedor.
////////////////////////////////////////////////////////////////////////////


# Exercício 3

a) Crie as duas variáveis abaixo com seus valores ( lembra? não copiar e colar, Digite!!")

   let valorA = 10
   let valorB = 20

b) agora você precisa imprimir no console o seguinte: ( lembra? utilize template strings )

   - quanto é valorA multiplicado por valorB
   - quanto é valorB dividido por valorA
   - e qual a diferença de valores entre valorB e valorA

   como resposta no console deverá obter exatamente assim:
   10 multiplicado por 20 é igual a 200
   20 dividido por 10 é iqual a 2
   a diferença de valores entre 20 e 10 é igual a 10

# Exercício 4

Utilizando as mesmas variáveis do exercício 3, faça o seguinte:

a) imprima no console qual variável tem o maior valor. ( lembra? utilize template strings )
   obs: utilize o if

   como resposta deverá obter:
   o valor 20 é maior que 10

b) agora você deverá trocar o valor das variáveis entre elas, de modo
   que valorA passe a valer 20 e valorB passe a valer 10, utilize para
   isso uma terceira variável machamada auxiliar, após fazer as trocas
   imprima o valorA e o valorB.
   obs: utilize o if

   como resultado deverá obter:
   o valor de valorA agora é 20
   o valor de valorB agora é 10
  

# Exercício 5

a) Crie um array como todos dias da semana no idioma Português Brasil

   domingo  segunda-feira  terça-feira  quarta-feira  quinta-feira   sexta-feira   sábado

b) Crie um outro array como todos os dias da semana no idioma Inglês

   sunday	monday	tuesday	wednesday	thursday	 friday	saturday	


# Exercício 6

Vamos utilizar agora os arrays criados no Exercício 5

a) imprima no console o primeiro elemento do array que contém os dias da semana em inglês

b) imprima no console o quarto elemento do array que contém dos dias da semana em português

c) imprima no console na mesma linha, o ultimo elemento do primeiro e do segundo array

como resultado deverá obter algo assim:
sunday
quarta-feira
sábado - saturday 

# Exercício 7

Vamos fazer funções agora?

a) crie uma arrow function que recebe dois parametros, são eles: nome e idade

b) o que essa função vai fazer e imprimir no console a seguinte mensagem: 

   olá (nome informado) você ja viveu aproximadamente (xxx) dias.

não é para receber valores por prompt, passe os arguntos na chamada da função
manualmente, utilize como teste os dados abaixo, observe.

Exemplo:

const minhaFuncao=()=>{
   // meu codigo
}

chamando a função: ( utilize os mesmos dados para ver se fez certo )

minhaFuncao( "Eliza",30  )    -> o resultado = olá Eliza você ja viveu aproximadamente 10950 dias.

minhaFuncao( "Heitor",40  )   -> o resultado = olá Heitor você ja viveu aproximadamente 14600 dias.

minhaFuncao( "Elvira",70  )   -> o resultado = olá Elvira você ja viveu aproximadamente 25550 dias.


////////////////////////////////////////
        Conseguiu? Parabéns!!!
////////////////////////////////////////

# Exercício 8 

Vamos utilizar a variável hobbys criada no exercício 2 ( ela já foi cria e tem valor ok )
então não precisamos declarar novamente nem atribuir valor, apenas utilizar.

a) Crie um array chamado meusHobbys e nesse array passe todos "hobbys" que estão contidos na variável hobbys para esse array.
   calma... vamos utilizar o split para nos ajudar a fazer isso! Esse vou explicar como faz, é uma dica de como pegar uma string
   que tem algum tipo de separador e colocar em um array, nesse nosso caso o separador é a virgula, veja como está a variável 
   hobbys (const hobbys = "Futebol,Ciclismo,Ler,Estudar,Filmes") as palavras estão separadas por vigula e se não estivesse?
   (const hobbys = "Futebol Ciclismo Ler Estudar Filmes") usariamos o espaço em branco.

   digite o seguinte código: ( não copie e cole, digite!!!)

   const listaDeHobbys = hobbys
   const meusHobbys = listaDeHobbys.split(",")  
   console.log(listaDeHobbys)
   console.log(meusHobbys)

agora veja no console como ficou o array criado....


b) Agora com base no que já sabe, crie uma variável com uma lista de coisas a sua escolha, e transforme em um array
   utilizando o split, use como separador de palavras o *, imprima no console a sua lista e o seu array e veja se o
   resultado está correto.


   Se essa lista for aprovada.. farei outra com arrays, objetos e funções.


   

   




