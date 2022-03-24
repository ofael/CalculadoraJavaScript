function calculadora(){
    console.log("teste");
    const operacao = prompt("Escolha uma opção:\n 1- Soma(+)\n 2- Subtração(-)\n 3- Multiplicação(*)\n 4- Divisão inteira(/)\n 5- Divisão real(%)\n 6- Potenciação(**)")

    let n1 = Number(prompt("Escolha o primeiro valor"));
    let n2 = Number(prompt("Escolha o segundo valor"));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        prompt(`${n1} + ${n2} = ${resultado}`)
    }

    function subtracao(){
        resultado = n1 - n2;
        prompt(`${n1} - ${n2} = ${resultado}`)
    }

    function multiplicacao(){
        resultado = n1 * n2;
        prompt(`${n1} * ${n2} = ${resultado}`)
    }

    function divisaoInteira(){
        resultado = n1 / n2;
        prompt(`${n1} / ${n2} = ${resultado}`)
    }

    function divisaoReal(){
        resultado = n1 % n2;
        prompt(`o resto da divisão de ${n1} por ${n2} = ${resultado}`)
    }

    function potenciacao(){
        resultado = n1 ** n2;
        prompt(`a potência de ${n1} por ${n2} = ${resultado}`)
    }

    if(operacao == 1){
        soma();
    }else if(operacao == 2){
        subtracao();
    }else if(operacao == 3){
        multiplicacao();
    }else if(operacao == 4){
        divisaoInteira();
    }else if(operacao == 5){
        divisaoReal();
    }else if(operacao == 6){
        potenciacao();
    }
}

calculadora();