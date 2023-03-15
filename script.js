//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

function calcularGrau(){
    let grauInicio = Number(document.querySelector("#grauInicio").value);
    let unidade = document.querySelector("#trocaUnidade").value;
    let unidade1 = document.querySelector("#trocaUnidade1").value;
    let calculoCelsius = Number(grauInicio * 9/5 + 32)
    let calculoFahranheit = Number((grauInicio - 32) * 5/9);
    
    // caminho de celsius para fahrenheit
    if(unidade === "C" && unidade1 === "F") {
        // let calculoCelsius = Number(grauInicio * 9/5 + 32)
        function escreve(mensagem){
            let tela = document.querySelector('.resultados').innerHTML = mensagem;
        }
        escreve(grauInicio + unidade + " é igual a " + calculoCelsius.toFixed(1) + "F")
        
    } else if (unidade === "C" && unidade1 === "C"){
        
        function escreve(mensagem){
            let tela = document.querySelector('.resultados').innerHTML = mensagem;
        }
        escreve("É igual a " + grauInicio + "C")
        
   //caminho de fahrenheit para celsius     
    } else if(unidade === "F" && unidade1 === "C" ) {
        // let calculoFahranheit = Number((grauInicio - 32) * 5/9);
        function escreve(mensagem){
            let tela = document.querySelector('.resultados').innerHTML = mensagem;
        }
        escreve(grauInicio + unidade + " é igual a " + calculoFahranheit.toFixed(1) + "C")
        
    } else if (unidade === "F" && unidade1 === "F"){
        
        function escreve(mensagem){
            let tela = document.querySelector('.resultados').innerHTML = mensagem;
        }
        escreve("É igual a " + grauInicio + "F")  
    } 
    //Validação para troca de imagens;
        if (grauInicio <= -1){
            var img = document.querySelector("#img1");
            img.setAttribute('src', 'pinguinFrio.jpg');
        } else {
            var imgReturn = document.querySelector("#img1");
            imgReturn.setAttribute('src', 'pinguin1.jpg');
        }
        
        if (calculoCelsius <= -1 || (unidade1 === "C" && calculoFahranheit <= -1)){
            var img1 = document.querySelector("#img2");
            img1.setAttribute('src', 'pinguinFrio.jpg');
        } else {
            var imgReturn1 = document.querySelector("#img2");
            imgReturn1.setAttribute('src', 'pinguin1.jpg');
        }
}
//function para trocar a unidade;
function trocarUnidade() {
    let unidade = document.querySelector("#trocaUnidade").value;
    let unidade1 = document.querySelector("#trocaUnidade1").value;
    
    if (unidade === "C" && unidade1 === "F"){
        const Elemento = document.querySelector("#trocaUnidade");
        
        Elemento.value = "F";
        
        const Elemento1 = document.querySelector("#trocaUnidade1");
        
        Elemento1.value = "C";
    }
    
    if (unidade === "F" && unidade1 === "C"){
        const Elemento = document.querySelector("#trocaUnidade");

        Elemento.value = "C";

        const Elemento1 = document.querySelector("#trocaUnidade1");

        Elemento1.value = "F";
    }
    
    if (unidade === "C" && unidade1 === "C" || unidade === "F" && unidade1 === "F" ){
        const Elemento = document.querySelector("#trocaUnidade");

        Elemento.value = "C";

        const Elemento1 = document.querySelector("#trocaUnidade1");

        Elemento1.value = "F";
    }
}

// função botao de enter calcular grau
document.addEventListener('keypress', function(e) { 
    if(e.which == 13){
       calcularGrau();
    }
 },false);

//função balão de fala aparecer
 function carregar() {
    document.getElementById("teste").style.display="block"}