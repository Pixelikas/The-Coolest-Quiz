let elementoSelectUm = document.getElementById('selectPerguntaUm')
let elementoSelectDois = document.getElementById('selectPerguntaDois')
let elementoSelectTres = document.getElementById('selectPerguntaTres')
let elementoInputPontos = document.getElementById('inptPontos')

let pontosTotal

function FinalizaQuiz(){

    pontosTotal = 0

    if(elementoSelectUm.value == '2' || elementoSelectDois.value == '2' || elementoSelectTres.value == '2'){

        alert('Alguma resposta não foi selecionada!')

    }else{

        if(elementoSelectUm.value == '1'){

            pontosTotal++

        }

        if(elementoSelectDois.value == '1'){

            pontosTotal++

        }

        if(elementoSelectTres.value == '1'){

            pontosTotal++

        }

        elementoInputPontos.value = pontosTotal
        
        if(pontosTotal == 3){
    
            alert('Quiz finalizado! Parabéns, você fez a pontuação máxima :D')            
    
        }else{
    
            alert('Quiz finalizado! Confira sua pontuação :)')  
    
        }
        

    }

}

