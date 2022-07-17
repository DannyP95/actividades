function frase1(){
    let nombre = "Programación" + " Fácil."; 
    let saludo = "Les doy la bienvenida a ";
    let fraseCompleta = saludo + nombre; 
    
    console.log(fraseCompleta);
}

function frase2(){
let frase = "JavaScript " + "es un lenguaje" + " esencial para crear" + " sitios web poderosos."; 

console.log(frase);
}

function numeros1(){

    let numeroString1 = "10"; 
    let numeroString2 = "20"; 
    let numeroString3 = "30"; 
    let concatenaNumeros = 'diez: ' + numeroString1 + ' || veinte: ' + numeroString2 + ' || treinta: ' + numeroString3; 
    
    console.log(concatenaNumeros);
}
    
function nombre(){

    var name = prompt('¿Cual es tu nombre:?');
    var age = prompt('¿Cual es tu edad:?');
    
    console.warn('Hola '+ name + ' de ' + age + ' años');
}
 
function sexo(){
    var whileEdad = 0;
    let sexo;
    sexo = prompt("¿Cual es tu Sexo? (M=Masculino F=Femenino)"); 

    while (whileEdad == 0){
        if ( sexo=='m' || sexo=='M' || sexo=='f' || sexo=='F'){
            whileEdad++;
            console.log(whileEdad);
        }else{
            sexo = prompt("¿Cual es tu Sexo? (M=Masculino F=Femenino)"); 
            console.log(whileEdad);
        }
    }
    
    let edad;
    edad = prompt("Introduce tu edad:"); 
    if (edad >= 18){
        if (sexo == 'm' || sexo == 'M'){
            alert("Puedes entrar, eres mayor de edad.");  
        }else{
            if (edad >= 20){
                alert("Puedes entrar, eres mayor de edad.");
            }else{
                alert("No puedes entrar, eres menor de edad."); 
            }
        }
    }else{
        alert("No puedes entrar, eres menor de edad."); 
    }

}