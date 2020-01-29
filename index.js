
// Colocar sempre nome de método no infinitivo
function validarRespostas() {
    let respostas = [];

    // Para cada form (Ou seja, cada pergunta)
    for (var i = 0; i < document.forms.length; i++) {
        let formulario = document.forms[i];

        // Busca todos os radio input
        let opcoes = formulario.querySelectorAll("input[type='radio']");
        // Filtra apenas os radios selecionados
        let opcaoSelecionada = [...opcoes].filter(x => x.checked);
        // Esse [...opcoes] serve pra transformar um ElementCollection em um Array e podermos usar o método 'filter', que tira do array todos os elementos que não condizerem com a condição passada

        // Se houver um radio selecionado, adiciona para a lista
        if (opcaoSelecionada[0]) 
            respostas.push(opcaoSelecionada[0].value);
        else 
            respostas.push("Não selecionado!");
    }

    console.log(respostas);

    // Agora vamos contar as ocorrências das letras
    let ocorrencias = {};// Definimos um objeto para guardar todas as ocorrencias

    // Para cada resposta
    respostas.forEach(x => {
        // Pegamos o valor da ocorrencia e acrescentamos 1
        // Caso não haja incidência, definimos como 0
        ocorrencias[x] = (ocorrencias[x] || 0) + 1;
    });

    console.log("%cOcorrências", "font-size: 18pt; color: #212121");
    console.table(ocorrencias);


    // Forma contracta de fazer o loop e o filtro
    // + Avançado, vale a pena olhar depois
    /* [...document.forms].map(form => {
        let opcoes = form.querySelectorAll("input[type='radio']");
        let opcaoSelecionada = [...opcoes].filter(x => x.checked);
        if (opcaoSelecionada[0]) return opcaoSelecionada[0].value;
    
        return "Ainda não selecionado";
    });*/
    
}
