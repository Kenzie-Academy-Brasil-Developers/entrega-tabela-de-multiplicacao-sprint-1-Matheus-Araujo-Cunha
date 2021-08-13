// Objetivo final : tabela de multiplicação


//   =>recebe um parametro 
//   => parametro tem que ser inteiro
//   => o parametro vai ditar o tamanho da tabela ( ex: 10x10, 15x15)

// Dentro da função
// Criar loops aninhados para montar um array multi
// com o array multi, utilizar o console.table para mostrar  a tabela


// Criar uma função
function tabela(dimensaoTabela){
    let arrayMulti = [];
    for (let i = 0; i <= dimensaoTabela; i++ ){
        let segundoArray = []
               
        for (let p = 0; p <= dimensaoTabela; p++ ){
            segundoArray.push(i*p)
              
        }

    arrayMulti.push(segundoArray)
    
    }    
    return arrayMulti
  
}
console.table(tabela(10))


