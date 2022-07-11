let digitalElement = document.querySelector('.digital'); //Selecionando o relogio digial.
let sElement = document.querySelector('.p_s'); //Selecionando os ponteiros (Segundo)
let mElement = document.querySelector('.p_m'); //Selecionando os ponteiros (minuto)
let hElement = document.querySelector('.p_h'); //Selecionando os ponteiros (hora)

function updateClock() { //Função para atualizar o relogio
    let now = new Date(); //Pegar a hora atual (new Date())
    let hour = now.getHours(); // Hora
    let minute = now.getMinutes(); //Minuto
    let second = now.getSeconds(); //Segundos

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; //Exibir Relogio Digital na tela

    let sDeg = ((360 / 60) * second) - 90; //Variavel para rotacionar o ponteiro do segundo //Diminue por 90 por que o 0 começa nop centro
    let mDeg = ((360 / 60) * minute) - 90; //minuto
    let hDeg = ((360 / 12) * hour) - 90; //hora

    sElement.style.transform = `rotate(${sDeg}deg)`; //rotacionar o ponteiro de segundo
    mElement.style.transform = `rotate(${mDeg}deg)`; //rotacionar o ponteiro do minuto
    mElement.style.transform = `rotate(${hDeg}deg)`; //rotacionar o ponteiro da hora

}

function fixZero(time){ //Função para corrigir Bug do 1 ao invés de 01
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000); //Função de intervalo infinito //Rodar o updateClock a cada 1 segundo
updateClock(); //Assim que abrir a página ja atualizar imediatamente