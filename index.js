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
}

function desligar() {
    var display = document.getElementById("display");
    display.setAttribute("readonly", "true");
    display.style.display = "none";
    clearDisplay();
}