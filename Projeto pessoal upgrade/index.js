const prompt = require("prompt-sync")()

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
// DEFINA O DIA EM QUE VOCÊ DESEJA CONSULTAR USANDO O PROMPT DO TERMINAL
let entradaDia = prompt("Digite o dia que deseja consultar (1 a 15): ")
let diaAtual = Number(entradaDia)
// ================================================================================= //

// 1. UTILIZANDO WHILE PARA VERIFICAÇÃO GERAL DOS DIAS ANTERIORES
let contadorDias = 1
while (contadorDias <= diaAtual) {
    if (contadorDias === diaAtual) {
        console.log(`Chegou ao dia atual da consulta: ${contadorDias}`)
    }
    contadorDias++
}

// ================================================================================= //
// EXIBIÇÃO DA TAREFA DO DIA SELECIONADO 
// AS CONDICIONAIS APRESENTARÃO A SITUAÇÃO DOS ESTUDOS, SE REALIZADOS OU NÃO

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

let desejaFechamento = prompt("Deseja ver o fechamento daquele conteúdo? (s/n): ")

if (desejaFechamento === "s") {
    // ================================================================================= //
    // 2. CÁLCULO FINAL PROGRESSIVO DO DIA SELECIONADO (DO DIA 1 AO 15)
    // ================================================================================= //
    // AS CONDICIONAIS IRÃO MOSTRAR A CONCLUSÃO DOS ESTUDOS PERANTE DETERMINADAS ÁREAS
    // CONDICIONAIS AVISARAM SE O CONTÉUDO DESTINADO FOI DEVIDAMENTE CUMPRIDO

    switch (diaAtual) {
        case 1:
        case 2:
            let fecharReais = prompt("Deseja ver o fechamento e a revisão do tema Números Reais? (s/n): ")
            if (fecharReais === "s") {
                if (dezembro1 && dezembro2) {
                    console.log("Parabéns! conteúdo de números reais e revisão finalizados")
                } else {
                    console.log("Estudos de números reais ou revisão incompletos")
                }
            }
            break
        case 3:
        case 4:
            let fecharPot = prompt("Deseja ver o fechamento e a revisão do tema Potenciação e Radiciação? (s/n): ")
            if (fecharPot === "s") {
                if (dezembro3 && dezembro4) {
                    console.log("Parabéns! conteúdo de radiciação e potenciação e revisão finalizados")
                } else {
                    console.log("Estudos de radiciação e potenciação ou revisão incompletos")
                }
            }
            break
        case 5:
        case 6:
            let fecharAlg = prompt("Deseja ver o fechamento e a revisão do tema Álgebra? (s/n): ")
            if (fecharAlg === "s") {
                if (dezembro5 && dezembro6) {
                    console.log("Parabéns! conteúdo de álgebra e revisão finalizados")
                } else {
                    console.log("Estudos de álgebra ou revisão incompletos")
                }
            }
            break
        case 7:
        case 8:
            let fecharEq = prompt("Deseja ver o fechamento e a revisão do tema Funções do Segundo Grau? (s/n): ")
            if (fecharEq === "s") {
                if (dezembro7 && dezembro8) {
                    console.log("Parabéns! conteúdo de equações do segundo grau e revisão finalizados")
                } else {
                    console.log("Estudos de equações do segundo grau ou revisão incompletos")
                }
            }
            break
        case 9:
        case 10:
            let fecharFunc = prompt("Deseja ver o fechamento e a revisão do tema Introdução das Funções? (s/n): ")
            if (fecharFunc === "s") {
                if (dezembro9 && dezembro10) {
                    console.log("Parabéns! conteúdo de funções e revisão finalizados")
                } else {
                    console.log("Estudos de funções ou revisão incompletos")
                }
            }
            break
        case 11:
        case 12:
            let fecharTrig = prompt("Deseja ver o fechamento e a revisão do tema Trigonometria? (s/n): ")
            if (fecharTrig === "s") {
                if (dezembro11 && dezembro12) {
                    console.log("Parabéns! conteúdo de trigonometria e revisão finalizados")
                } else {
                    console.log("Estudos de trigonometria ou revisão incompletos")
                }
            }
            break
        case 13:
        case 14:
            let fecharEst = prompt("Deseja ver o fechamento e a revisão do tema Estatística? (s/n): ")
            if (fecharEst === "s") {
                if (dezembro13 && dezembro14) {
                    console.log("Parabéns! conteúdo de estatística e revisão finalizados")
                } else {
                    console.log("Estudos de estatística ou revisão incompletos")
                }
            }
            break
        case 15:
            let fecharGeo = prompt("Deseja ver o fechamento do tema Geometrias? (s/n): ")
            if (fecharGeo === "s") {
                if (dezembro15) {
                    console.log("Parabéns! conteúdo geral de geometrias finalizado")
                } else {
                    console.log("Estudos de geometrias incompleto")
                }
            }
            break
        default:
            console.log("Nenhuma validação de fechamento para o dia selecionado")
            break
    }
}

let desejaResumo = prompt("Deseja ver o resumo final? (s/n): ")

if (desejaResumo === "s") {
    let statusValidacao = false
    let tentativas = 1

    do {
        if (dezembro1 && dezembro2 && dezembro3 && dezembro4 && 
        dezembro5 && dezembro6 && dezembro7 && dezembro8 && 
        dezembro9 && dezembro10 && dezembro11 && dezembro12 && 
        dezembro13 && dezembro14 && dezembro15) {
            statusValidacao = true
        }
        tentativas++
    } while (tentativas <= 1)

    switch (statusValidacao) {
        case true:
            console.log("Parabens! conteúdos de revisão do 9 ano concluídos com sucesso")
            break 
        default:
            console.log("Estudos incompletos, mais atenção e responsabilidade nos próximos afazeres escolares!")
            break
    }
}
