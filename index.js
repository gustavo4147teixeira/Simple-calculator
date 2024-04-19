function addToDisplay(value){
    document.getElementById('display').value += value;
}
function clearDisplay(){
    document.getElementById('display').value = '';
}

function calculate(){
    var display = document.getElementById('display');
    try{
        var result = eval(display.value);
        display.value = result;
        } catch(error){
        display.value = "Error ao calcular";
        console.error("Erro ao Calcular", Error);
        }
}
function ligar() {
    var display = document.getElementById("display");
    
    display.style.display = "block";
    clearDisplay();
    addToDisplay('0');

    var button = document.getElementById("on");
    button.classList.add("blinking"); // Adiciona a classe 'blinking' ao botão "ligar"
    setTimeout(function() {
        button.classList.remove("blinking"); // Remove a classe 'blinking' após 1 segundo
    }, 1000);
}

function desligar() {
    var display = document.getElementById("display");
    display.setAttribute("readonly", "true");
    display.style.display = "none";
    clearDisplay();
}