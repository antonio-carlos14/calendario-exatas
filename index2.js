const prompt = require("prompt-sync")()

const cronograma = [
    { dia: 1, tema: "Números reais (Estudo)", horas: 4, bloco: "Números Reais", realizado: "" },
    { dia: 2, tema: "Números reais (Revisão)", horas: 4, bloco: "Números Reais", realizado: "" },
    { dia: 3, tema: "Potenciação e radiciação (Estudo)", horas: 4, bloco: "Potenciação e Radiciação", realizado: "" },
    { dia: 4, tema: "Potenciação e radiciação (Revisão)", horas: 2, bloco: "Potenciação e Radiciação", realizado: "" },
    { dia: 5, tema: "Álgebra (Estudo)", horas: 2, bloco: "Álgebra", realizado: "" },
    { dia: 6, tema: "Álgebra (Revisão)", horas: 1.5, bloco: "Álgebra", realizado: "" },
    { dia: 7, tema: "Funções do segundo grau (Estudo)", horas: 4, bloco: "Funções do Segundo Grau", realizado: "" },
    { dia: 8, tema: "Funções do segundo grau (Revisão)", horas: 3, bloco: "Funções do Segundo Grau", realizado: "" },
    { dia: 9, tema: "Introdução das funções (Estudo)", horas: 4, bloco: "Introdução das Funções", realizado: "" },
    { dia: 10, tema: "Introdução das funções (Revisão)", horas: 3.5, bloco: "Introdução das Funções", realizado: "" },
    { dia: 11, tema: "Trigonometria (Estudo)", horas: 4, bloco: "Trigonometria", realizado: "" },
    { dia: 12, tema: "Trigonometria (Revisão)", horas: 2, bloco: "Trigonometria", realizado: "" },
    { dia: 13, tema: "Estatística (Estudo)", horas: 3, bloco: "Estatística", realizado: "" },
    { dia: 14, tema: "Estatística (Revisão)", horas: 4, bloco: "Estatística", realizado: "" },
    { dia: 15, tema: "Geometrias (Estudo geral)", horas: 2.5, bloco: "Geometrias", realizado: "" }
]

function ehConfirmacao(resposta) {
    return resposta === "s" || resposta === "sim" || resposta === "true"
}

function coletarRealizacao(lista) {
    for (let i = 0; i < lista.length; i++) {
        lista[i].realizado = prompt(`Realizou a programção prevista do dia ${lista[i].dia}? (s/n): `)
    }
}

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

function consultarDia(lista, diaAtual) {
    let contadorDias = 1
    while (contadorDias <= diaAtual) {
        if (contadorDias === diaAtual) {
            console.log(`Chegou ao dia atual da consulta: ${contadorDias}`)
        }
        contadorDias++
    }

    const item = lista[diaAtual - 1]
    if (!item) {
        console.log("Dia inválido selecionado")
        return
    }

    if (ehConfirmacao(item.realizado)) {
        console.log(`${item.tema}, destina-se ${item.horas} horas`)
        analisarHorarioDedicado(item.horas)
    } else {
        console.log("Atividade não realizada")
    }
}

function verificarFechamentoBloco(lista, diaAtual) {
    const desejaFechamento = prompt("Deseja ver o fechamento daquele conteúdo? (s/n): ")
    if (!ehConfirmacao(desejaFechamento)) {
        return
    }

    const itemAtual = lista[diaAtual - 1]
    if (!itemAtual) {
        console.log("Nenhuma validação de fechamento para o dia selecionado")
        return
    }

    const confirmar = prompt(`Deseja ver o fechamento e a revisão do tema ${itemAtual.bloco}? (s/n): `)
    if (!ehConfirmacao(confirmar)) {
        return
    }

    const itensDoBloco = lista.filter(item => item.bloco === itemAtual.bloco)
    const concluidosNoBloco = itensDoBloco.every(item => ehConfirmacao(item.realizado))

    if (concluidosNoBloco) {
        console.log(`Parabéns! conteúdo de ${itemAtual.bloco.toLowerCase()} e revisão finalizados`)
    } else {
        console.log(`Estudos de ${itemAtual.bloco.toLowerCase()} ou revisão incompletos`)
    }
}

function exibirResumoFinal(lista) {
    const desejaResumo = prompt("Deseja ver o resumo final? (s/n): ")
    if (!ehConfirmacao(desejaResumo)) {
        return
    }

    let diasConcluidos = 0
    let diasPendentes = 0

    console.log("=== DETALHAMENTO DO CRONOGRAMA ===")
    for (let i = 0; i < lista.length; i++) {
        const item = lista[i]
        if (ehConfirmacao(item.realizado)) {
            diasConcluidos++
            console.log(`Dia ${item.dia} (${item.tema}): Concluído`)
        } else {
            diasPendentes++
            console.log(`Dia ${item.dia} (${item.tema}): Pendente`)
        }
    }

    const relatorioFinal = {
        totalDias: lista.length,
        concluidos: diasConcluidos,
        pendentes: diasPendentes
    }

    console.log("=== RELATÓRIO FINAL CONSOLIDADO ===")
    console.log(`Total de dias: ${relatorioFinal.totalDias}`)
    console.log(`Concluídos: ${relatorioFinal.concluidos}`)
    console.log(`Pendentes: ${relatorioFinal.pendentes}`)

    if (relatorioFinal.concluidos === lista.length) {
        console.log("Parabens! conteúdos de revisão do 9 ano concluídos com sucesso")
    } else {
        console.log("Estudos incompletos, mais atenção e responsabilidade nos próximos afazeres escolares!")
    }
}

coletarRealizacao(cronograma)
const diaAtual = Number(prompt("Digite o dia que deseja consultar (1 a 15): "))
consultarDia(cronograma, diaAtual)
verificarFechamentoBloco(cronograma, diaAtual)
exibirResumoFinal(cronograma)
