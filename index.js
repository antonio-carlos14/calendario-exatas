      // Calendário de estudos mensal (9 ANO) //
    // ESTUDO VOLTADO Á PREPARAÇÃO PARA O ENSINO MÉDIO //
  // ÁREA DAS EXATAS - Versão Final Ajustada //

let dezembro1 = true
let dezembro2 = true
let dezembro3 = true
let dezembro4 = true
let dezembro5 = true
let dezembro6 = true
let dezembro7 = true
let dezembro8 = true
let dezembro9 = true
let dezembro10 = true
let dezembro11 = true
let dezembro12 = true
let dezembro13 = true
let dezembro14 = true
let dezembro15 = true

// ================================================================================= //
// DEFINA O DIA EM QUE VOCÊ DESEJA CONSULTAR 
let diaAtual = 15
// ================================================================================= //
// EXIBIÇÃO DA TAREFA DO DIA SELECIONADO 
// AS CONDICIONAIS APRESENTARÃO A SITUAÇÃO DOS ESTUDOS,SE REALIZADOS OU NÃO

switch (diaAtual) {
    case 1:
        if (dezembro1) {
            console.log("Estudo sobre números reais, destina-se 4 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 2:
        if (dezembro2) {
            console.log("Revisão sobre números reais, destina-se 4 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 3:
        if (dezembro3) {
            console.log("Estudo sobre potenciação e radiciação, destina-se 4 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 4:
        if (dezembro4) {
            console.log("Revisão sobre potenciação e radiciação, destina-se 2 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 5:
        if (dezembro5) {
            console.log("Estudo sobre álgebra, destina-se 2 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 6:
        if (dezembro6) {
            console.log("Revisão sobre álgebra, destina-se 1:30")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 7:
        if (dezembro7) {
            console.log("Estudo sobre funções do segundo grau, destina-se 4 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 8:
        if (dezembro8) {
            console.log("Revisar funções do segundo grau, destina-se 3 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 9:
        if (dezembro9) {
            console.log("Estudar introdução das funções, destina-se 4 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 10:
        if (dezembro10) {
            console.log("Revisar introdução das funções, destina-se 3:30")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 11:
        if (dezembro11) {
            console.log("Estudar trigonometria, destina-se 4 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 12:
        if (dezembro12) {
            console.log("Revisar trigonometria, destina-se 2 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 13:
        if (dezembro13) {
            console.log("Estudar estatística, destina-se 3 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 14:
        if (dezembro14) {
            console.log("Revisar estatística, destina-se 4 horas")
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 15:
        if (dezembro15) {
            console.log("Estudo geral de geometrias, destina-se 2:30")
        } else {
            console.log("Atividade não realizada")
        }
        break
    default:
        console.log("Dia inválido selecionado")
        break
}

// ================================================================================= //
// 2. CÁLCULO FINAL PROGRESSIVO DO DIA SELECIONADO (DO DIA 1 AO 15)
// ================================================================================= //
// AS CONDICIONAIS IRÃO MOSTRAR A CONCLUSÃO DOS ESTUDOS PERANTE DETERMINADAS ÁREAS
// CONDICIONAIS AVALIAM SOMENTE NÚMEROS IMPARES,SENDO VÁLIDO PRIMORDIALMENTE O CONTEÚDO AO INVÉS DA REVISÃO

switch (diaAtual) {
    case 1:
        if (dezembro1 && dezembro2) {
            console.log("Parabéns! conteúdo de números reais finalizado")
        } else {
            console.log("Estudos de números reais incompleto")
        }
        break
    case 3:
        if (dezembro3 && dezembro4) {
            console.log("Parabéns! conteúdo de radiciação e potenciação finalizado")
        } else {
            console.log("Estudos de radiciação e potenciação incompleto")
        }
        break
    case 5:
        if (dezembro5 && dezembro6) {
            console.log("Parabéns! conteúdo de álgebra finalizado")
        } else {
            console.log("Estudos de álgebra incompleto")
        }
        break
    case 7:
        if (dezembro7 && dezembro8) {
            console.log("Parabéns! conteúdo de equações do segundo grau finalizado")
        } else {
            console.log("Estudos de equações do segundo grau incompleto")
        }
        break
    case 9:
        if (dezembro9 && dezembro10) {
            console.log("Parabéns! conteúdo de funções finalizado")
        } else {
            console.log("Estudos de funções incompleto")
        }
        break
    case 11:
        if (dezembro11 && dezembro12) {
            console.log("Parabéns! conteúdo de trigonometria finalizado")
        } else {
            console.log("Estudos de trigonometria incompleto")
        }
        break
    case 13:
        if (dezembro13 && dezembro14) {
            console.log("Parabéns! conteúdo de estatística finalizado")
        } else {
            console.log("Estudos de estatística incompleto")
        }
        break
    case 15:
        if (dezembro15) {
            console.log("Parabéns! conteúdo geral de geometrias finalizado")
        } else {
            console.log("Estudos de geometrias incompleto")
        }
        break
    default:
        console.log("Nenhuma validação de fechamento para o dia selecionado")
        break
}

switch (dezembro1 && dezembro2 && dezembro3 && dezembro4 && 
dezembro5 && dezembro6 && dezembro7 && dezembro8 && 
dezembro9 && dezembro10 && dezembro11 && dezembro12 && 
dezembro13 && dezembro14 && dezembro15) {
    case true:
console.log("Parabens! conteúdos de revisão do 9 ano concluídos com sucesso")
        break 
    default:
console.log("Estudos incompletos, mais atenção e responsabilidade nos próximos afazeres escolares!")
        break
}
            
