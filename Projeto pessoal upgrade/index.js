const prompt = require("prompt-sync")()

// Calendário de estudos mensal (9 ANO) //
// ESTUDO VOLTADO Á PREPARAÇÃO PARA O ENSINO MÉDIO //
// ÁREA DAS EXATAS - Versão Final Ajustada //
// ==================================================== //


let dezembro1 = (prompt("Realizou a programção prevista do dia 1? (s/n): "))
let dezembro2 = (prompt("Realizou a programção prevista do dia 2? (s/n): "))
let dezembro3 = (prompt("Realizou a programção prevista do dia 3? (s/n): "))
let dezembro4 = (prompt("Realizou a programção prevista do dia 4? (s/n): "))
let dezembro5 = (prompt("Realizou a programção prevista do dia 5? (s/n): "))
let dezembro6 = (prompt("Realizou a programção prevista do dia 6? (s/n): "))
let dezembro7 = (prompt("Realizou a programção prevista do dia 7? (s/n): "))
let dezembro8 = (prompt("Realizou a programção prevista do dia 8? (s/n): "))
let dezembro9 = (prompt("Realizou a programção prevista do dia 9? (s/n): "))
let dezembro10 = (prompt("Realizou a programção prevista do dia 10? (s/n): "))
let dezembro11 = (prompt("Realizou a programção prevista do dia 11? (s/n): "))
let dezembro12 = (prompt("Realizou a programção prevista do dia 12? (s/n): "))
let dezembro13 = (prompt("Realizou a programção prevista do dia 13? (s/n): "))
let dezembro14 = (prompt("Realizou a programção prevista do dia 14? (s/n): "))
let dezembro15 = (prompt("Realizou a programção prevista do dia 15? (s/n): "))

// ================================================================================= //
// DEFINA O DIA EM QUE VOCÊ DESEJA CONSULTAR USANDO O PROMPT DO TERMINAL
let entradaDia = prompt("Digite o dia que deseja consultar (1 a 15): ")
let diaAtual = Number(entradaDia)
// ================================================================================= //

// 1.VERIFICAÇÃO GERAL DOS DIAS ANTERIORES,VERACIDADE
let contadorDias = 1
while (contadorDias <= diaAtual) {
    if (contadorDias === diaAtual) {
        console.log(`Chegou ao dia atual da consulta: ${contadorDias}`)
    }
    contadorDias++
}

// ================================================================================= //
// FUNÇÃO: ANÁLISE DE HORÁRIO DEDICADO AO DEVER
function analisarHorarioDedicado(horasMinimas) {
    let tempoDedicado = Number(prompt(`Quantas horas você dedicou a este estudo? (Mínimo exigido: ${horasMinimas}h - ex: 1.5 para 1h30): `))

    if (tempoDedicado >= horasMinimas) {
        let extra = tempoDedicado - horasMinimas
        if (extra > 0) {
            console.log(`Excelente! Você cumpriu a meta mínima de ${horasMinimas}h e ainda estudou ${extra}h a mais.`)
        } else {
            console.log(`Muito bem! Você cumpriu exatamente o tempo mínimo exigido de ${horasMinimas}h.`)
        }
    } else if (tempoDedicado > 0) {
        let faltante = horasMinimas - tempoDedicado
        console.log(`Atenção: Tempo dedicado insuficiente. Faltaram ${faltante}h para atingir o mínimo de ${horasMinimas}h.`)
    } else {
        console.log("Nenhum tempo válido registrado para análise.")
    }
}
// ================================================================================= //

// EXIBIÇÃO DA TAREFA DO DIA SELECIONADO 
// AS CONDICIONAIS APRESENTARÃO A SITUAÇÃO DOS ESTUDOS, SE REALIZADOS OU NÃO

switch (diaAtual) {
    case 1:
        if (dezembro1 === "s" || dezembro1 === "sim" || dezembro1 === "true") {
            console.log("Estudo sobre números reais, destina-se 4 horas")
            analisarHorarioDedicado(4)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 2:
        if (dezembro2 === "s" || dezembro2 === "sim" || dezembro2 === "true") {
            console.log("Revisão sobre números reais, destina-se 4 horas")
            analisarHorarioDedicado(4)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 3:
        if (dezembro3 === "s" || dezembro3 === "sim" || dezembro3 === "true") {
            console.log("Estudo sobre potenciação e radiciação, destina-se 4 horas")
            analisarHorarioDedicado(4)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 4:
        if (dezembro4 === "s" || dezembro4 === "sim" || dezembro4 === "true") {
            console.log("Revisão sobre potenciação e radiciação, destina-se 2 horas")
            analisarHorarioDedicado(2)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 5:
        if (dezembro5 === "s" || dezembro5 === "sim" || dezembro5 === "true") {
            console.log("Estudo sobre álgebra, destina-se 2 horas")
            analisarHorarioDedicado(2)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 6:
        if (dezembro6 === "s" || dezembro6 === "sim" || dezembro6 === "true") {
            console.log("Revisão sobre álgebra, destina-se 1:30")
            analisarHorarioDedicado(1.5)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 7:
        if (dezembro7 === "s" || dezembro7 === "sim" || dezembro7 === "true") {
            console.log("Estudo sobre funções do segundo grau, destina-se 4 horas")
            analisarHorarioDedicado(4)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 8:
        if (dezembro8 === "s" || dezembro8 === "sim" || dezembro8 === "true") {
            console.log("Revisar funções do segundo grau, destina-se 3 horas")
            analisarHorarioDedicado(3)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 9:
        if (dezembro9 === "s" || dezembro9 === "sim" || dezembro9 === "true") {
            console.log("Estudar introdução das funções, destina-se 4 horas")
            analisarHorarioDedicado(4)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 10:
        if (dezembro10 === "s" || dezembro10 === "sim" || dezembro10 === "true") {
            console.log("Revisar introdução das funções, destina-se 3:30")
            analisarHorarioDedicado(3.5)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 11:
        if (dezembro11 === "s" || dezembro11 === "sim" || dezembro11 === "true") {
            console.log("Estudar trigonometria, destina-se 4 horas")
            analisarHorarioDedicado(4)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 12:
        if (dezembro12 === "s" || dezembro12 === "sim" || dezembro12 === "true") {
            console.log("Revisar trigonometria, destina-se 2 horas")
            analisarHorarioDedicado(2)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 13:
        if (dezembro13 === "s" || dezembro13 === "sim" || dezembro13 === "true") {
            console.log("Estudar estatística, destina-se 3 horas")
            analisarHorarioDedicado(3)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 14:
        if (dezembro14 === "s" || dezembro14 === "sim" || dezembro14 === "true") {
            console.log("Revisar estatística, destina-se 4 horas")
            analisarHorarioDedicado(4)
        } else {
            console.log("Atividade não realizada")
        }
        break
    case 15:
        if (dezembro15 === "s" || dezembro15 === "sim" || dezembro15 === "true") {
            console.log("Estudo geral de geometrias, destina-se 2:30")
            analisarHorarioDedicado(2.5)
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
// CONDICIONAIS AVISARAM SE O CONTÉUDO DESTINADO FOI DEVIDAMENTE CUMPRIDO

let desejaFechamento = prompt("Deseja ver o fechamento daquele conteúdo? (s/n): ")

if (desejaFechamento === "s" || desejaFechamento === "sim" || desejaFechamento === "true") {
    let fecharReais = ""
    let fecharPot = ""
    let fecharAlg = ""
    let fecharEq = ""
    let fecharFunc = ""
    let fecharTrig = ""
    let fecharEst = ""
    let fecharGeo = ""

    switch (diaAtual) {
        case 1:
        case 2:
            fecharReais = prompt("Deseja ver o fechamento e a revisão do tema Números Reais? (s/n): ")
            if (fecharReais === "s" || fecharReais === "sim" || fecharReais === "true") {
                if ((dezembro1 === "s" || dezembro1 === "sim" || dezembro1 === "true") && (dezembro2 === "s" || dezembro2 === "sim" || dezembro2 === "true")) {
                    console.log("Parabéns! conteúdo de números reais e revisão finalizados")
                } else {
                    console.log("Estudos de números reais ou revisão incompletos")
                }
            }
            break
        case 3:
        case 4:
            fecharPot = prompt("Deseja ver o fechamento e a revisão do tema Potenciação e Radiciação? (s/n): ")
            if (fecharPot === "s" || fecharPot === "sim" || fecharPot === "true") {
                if ((dezembro3 === "s" || dezembro3 === "sim" || dezembro3 === "true") && (dezembro4 === "s" || dezembro4 === "sim" || dezembro4 === "true")) {
                    console.log("Parabéns! conteúdo de radiciação e potenciação e revisão finalizados")
                } else {
                    console.log("Estudos de radiciação e potenciação ou revisão incompletos")
                }
            }
            break
        case 5:
        case 6:
            fecharAlg = prompt("Deseja ver o fechamento e a revisão do tema Álgebra? (s/n): ")
            if (fecharAlg === "s" || fecharAlg === "sim" || fecharAlg === "true") {
                if ((dezembro5 === "s" || dezembro5 === "sim" || dezembro5 === "true") && (dezembro6 === "s" || dezembro6 === "sim" || dezembro6 === "true")) {
                    console.log("Parabéns! conteúdo de álgebra e revisão finalizados")
                } else {
                    console.log("Estudos de álgebra ou revisão incompletos")
                }
            }
            break
        case 7:
        case 8:
            fecharEq = prompt("Deseja ver o fechamento e a revisão do tema Funções do Segundo Grau? (s/n): ")
            if (fecharEq === "s" || fecharEq === "sim" || fecharEq === "true") {
                if ((dezembro7 === "s" || dezembro7 === "sim" || dezembro7 === "true") && (dezembro8 === "s" || dezembro8 === "sim" || dezembro8 === "true")) {
                    console.log("Parabéns! conteúdo de equações do segundo grau e revisão finalizados")
                } else {
                    console.log("Estudos de equações do segundo grau ou revisão incompletos")
                }
            }
            break
        case 9:
        case 10:
            fecharFunc = prompt("Deseja ver o fechamento e a revisão do tema Introdução das Funções? (s/n): ")
            if (fecharFunc === "s" || fecharFunc === "sim" || fecharFunc === "true") {
                if ((dezembro9 === "s" || dezembro9 === "sim" || dezembro9 === "true") && (dezembro10 === "s" || dezembro10 === "sim" || dezembro10 === "true")) {
                    console.log("Parabéns! conteúdo de funções e revisão finalizados")
                } else {
                    console.log("Estudos de funções ou revisão incompletos")
                }
            }
            break
        case 11:
        case 12:
            fecharTrig = prompt("Deseja ver o fechamento e a revisão do tema Trigonometria? (s/n): ")
            if (fecharTrig === "s" || fecharTrig === "sim" || fecharTrig === "true") {
                if ((dezembro11 === "s" || dezembro11 === "sim" || dezembro11 === "true") && (dezembro12 === "s" || dezembro12 === "sim" || dezembro12 === "true")) {
                    console.log("Parabéns! conteúdo de trigonometria e revisão finalizados")
                } else {
                    console.log("Estudos de trigonometria ou revisão incompletos")
                }
            }
            break
        case 13:
        case 14:
            fecharEst = prompt("Deseja ver o fechamento e a revisão do tema Estatística? (s/n): ")
            if (fecharEst === "s" || fecharEst === "sim" || fecharEst === "true") {
                if ((dezembro13 === "s" || dezembro13 === "sim" || dezembro13 === "true") && (dezembro14 === "s" || dezembro14 === "sim" || dezembro14 === "true")) {
                    console.log("Parabéns! conteúdo de estatística e revisão finalizados")
                } else {
                    console.log("Estudos de estatística ou revisão incompletos")
                }
            }
            break
        case 15:
            fecharGeo = prompt("Deseja ver o fechamento do tema Geometrias? (s/n): ")
            if (fecharGeo === "s" || fecharGeo === "sim" || fecharGeo === "true") {
                if (dezembro15 === "s" || dezembro15 === "sim" || dezembro15 === "true") {
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

if (desejaResumo === "s" || desejaResumo === "sim" || desejaResumo === "true") {
    // ================================================================================= //
    // ARRAY E OBJETOS NO RESUMO FINAL
    let cronogramaDezembro = [
        { dia: 1, tema: "Números reais (Estudo)", realizado: dezembro1 },
        { dia: 2, tema: "Números reais (Revisão)", realizado: dezembro2 },
        { dia: 3, tema: "Potenciação e radiciação (Estudo)", realizado: dezembro3 },
        { dia: 4, tema: "Potenciação e radiciação (Revisão)", realizado: dezembro4 },
        { dia: 5, tema: "Álgebra (Estudo)", realizado: dezembro5 },
        { dia: 6, tema: "Álgebra (Revisão)", realizado: dezembro6 },
        { dia: 7, tema: "Funções do segundo grau (Estudo)", realizado: dezembro7 },
        { dia: 8, tema: "Funções do segundo grau (Revisão)", realizado: dezembro8 },
        { dia: 9, tema: "Introdução das funções (Estudo)", realizado: dezembro9 },
        { dia: 10, tema: "Introdução das funções (Revisão)", realizado: dezembro10 },
        { dia: 11, tema: "Trigonometria (Estudo)", realizado: dezembro11 },
        { dia: 12, tema: "Trigonometria (Revisão)", realizado: dezembro12 },
        { dia: 13, tema: "Estatística (Estudo)", realizado: dezembro13 },
        { dia: 14, tema: "Estatística (Revisão)", realizado: dezembro14 },
        { dia: 15, tema: "Geometrias (Estudo geral)", realizado: dezembro15 }
    ]

    let diasConcluidos = 0
    let diasPendentes = 0

    console.log("=== DETALHAMENTO DO CRONOGRAMA ===")
    for (let i = 0; i < 15; i++) {
        let item = cronogramaDezembro[i]
        if (item.realizado === "s" || item.realizado === "sim" || item.realizado === "true") {
            diasConcluidos++
            console.log(`Dia ${item.dia} (${item.tema}): Concluído`)
        } else {
            diasPendentes++
            console.log(`Dia ${item.dia} (${item.tema}): Pendente`)
        }
    }

    let relatorioFinal = {
        totalDias: 15,
        concluidos: diasConcluidos,
        pendentes: diasPendentes
    }

    console.log("=== RELATÓRIO FINAL CONSOLIDADO ===")
    console.log(`Total de dias: ${relatorioFinal.totalDias}`)
    console.log(`Concluídos: ${relatorioFinal.concluidos}`)
    console.log(`Pendentes: ${relatorioFinal.pendentes}`)
    // ================================================================================= //

    let statusValidacao = false
    let tentativas = 1

    do {
        if (relatorioFinal.concluidos === 15) {
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