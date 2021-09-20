const button = document.getElementById('button');


function imc() {
    const altura = document.getElementById('inputAltura').value;
    const peso = document.getElementById('inputPeso').value;
    const retorno = document.getElementById('retornoArea');

    if (altura === '' || peso === '') {
        retorno.textContent = 'Preencha todos os campos !';
    } else {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        

        let classificacao = '';
           
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!';
        }
        retorno.textContent = `Seu IMC é de ${valorIMC}, e você está ${classificacao}`;

    }
}
    button.addEventListener('click', imc);
