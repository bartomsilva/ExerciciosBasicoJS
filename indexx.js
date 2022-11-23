/*

QUANDO USAR ? SWITCH  / IF / LOOPS (LAÇOS)

SWITCH QUANDO SÓ SE FAZ CORAPAÇÕES DE IQUALDADE


no parametro de entrada do switch pode vir:
uma variável, o retorno de uma função ou uma expressão

switch(parametro) {   
    
    case valorEsperado1:  "xxx"
		código(s)
		break
	case valorEsperado2:  "ccc"
		código(s)
		break
 	default:
        código(s)
}



//obs para utilizar link ao index.html


const opcaoSelecionada=Number( prompt(`MENU DE SERVIÇOS:
                                1- Segunda via de fatura
                                2- Ver limite disponível
                                3- Ver o melhor dia para compra
                                9- Encerrar atendimento `) )
   
switch(opcaoSelecionada) {
    case 1: 
        segundaVia()
        break
    case 2:
        verLimite()
        break
    case 3: 
        melhorDiaCompra()
        break
    case 9:
        encerrarAtendimento()
        break
    default:
        console.log("opção selecionada inválida!!!!")
}

// CABE UM IF? VEJA COMO FICA  VISUALMENTE


if (opcaoSelecionada === 1){
    segundaVia()
} else if ( opcaoSelecionada === 2) {
    verLimite()
} else if ( opcaoSelecionada === 3) {
    melhorDiaCompra()
} else if ( opcaoSelecionada === 9) {
    encerrarAtendimento()
} else {
    console.log("opção selecionada inválida!!!!")
}



// funções dos serviços

function segundaVia(){
    alert("PDF da 2ª via enviado para seu e-mail.......")
}

function verLimite(){
    alert("Seu limite disponível é R$ 12.000,00")
}

function melhorDiaCompra(){
    alert("seu melhor dia para compras é dia 2 (dois)")
}

function encerrarAtendimento(){
    alert("Obrigado por usar nossos serviços!")
}

/*
 
Em casos que temos que escolher entre faixas, limites ou alguma operação relacional
 não cabe o swtich,ele só entra na comparação relacional de iqualdade

*/



//ternário

const CursoDev=true
 
// ao invéis de imprimir true ou false = sim ou não
console.log("Tem curso de DEV?",CursoDev?"Sim":"Não")



//laços para ações repetitivas

const produtos =[
    {
        descricao: "TV 50 pol Sansung mod kkhh",
        preco: 6000.00,
        estoque: 100
    },
    {
        descricao: "TV 40 pol Sansung mod tyu",
        preco: 3000.00,
        estoque: 17
    },
    {
        descricao: "Som marca Deixa Surdo",
        preco: 4000.00,
        estoque: 1400
    },
    {
        descricao: "Cama de Casal sono Bom",
        preco: 8000.00,
        estoque: 20
    }  
]


// quero imprimir a descrição o quantidade em estoque  

    // cria contador    condição para continuar      incremento do contador
for ( let contador = 0; contador < produtos.length ; contador ++) {

    console.log(`Descrição ${produtos[contador].descricao} disponível ${produtos[contador].estoque}`)
}


// um mesmo resultado com um for reduzido o ( for in )

for (let contador in produtos) {

    console.log(`Descrição ${produtos[contador].descricao} disponível ${produtos[contador].estoque}`)

}

