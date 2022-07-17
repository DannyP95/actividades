function ejercicio(){

let diaSemana;

diaSemana = prompt('Ingrese un dìa de la semana:')

switch (diaSemana) { 
    case "lunes" : 
    case "Lunes" : 
    case "LUNES" : alert("Hoy es lunes de GAP.");
    alert ("1- Frog pump \n 2- Sentadilla \n 3- Reverse nordic curl \n 4- Lunge o zancada \n 5- Kneeling get up");  
    break; 
    
    case "martes" :
    case "Martes" :
    case "MARTES" : alert("Hoy es martes de CORE."); 
    alert("1- Crunch modificado \n 2- Plancha frontal \n 3- Plancha lateral \n 4- Puente de glúteo \n 5- Bird dog"); 
    break; 
    
    case "miércoles" :
    case "Miércoles" :
    case "MIÉRCOLES" : 
    case "miercoles" :
    case "Miercoles" :
    case "MIERCOLES" : alert("Hoy es miércoles de GITT.");
    alert("1- Speed walkout \n 2- Predator jacks \n 3- Burpees \n 4- Scissorsumo \n 5- Strand \n 6- Sprint skipping")  
    break; 
    
    case "jueves" :
    case "Jueves" :
    case "JUEVES" : alert("Hoy es jueves de Movilidad y stretching (o estiramientos).");  
    alert('Rutina de "DESCANSO", hoy toca rutina de estiramiento y movilidad para hacer de pie, que comprende ejercicios para movilizar cuello, brazos, manos, piernas, caderas, tobillos y pies”.')
    break;         
    
    case "viernes" : 
    case "Viernes" : 
    case "VIERNES" : alert("Hoy es viernes de YOGA.");
    alert('Con unas cuantas posturas de yoga, hoy nos ayudará a poner la mente en blanco un rato, conectar con uno mismo y cuidar nuestro cuerpo y nuestra mente. Seguro que cada una tiene ya localizada a su instructora de yoga online favorita, pero dos muy populares por las que podemos empezar son "Xuan Lan" y la Estadounidense "Yoga with Adriene".');  
    break; 
    
    case "sábado" :
    case "Sábado" : 
    case "SÁBADO" : 
    case "sabado" :
    case "Sabado" : 
    case "SABADO" : alert("Hoy es sábado de CORE.");  
    alert('Hollow Rock \n  Plancha lateral Hoover \n El Paracaidista \n FRT \n Mountain Climber');
    break;
    
    case "domingo" :
    case "Domingo" :
    case "DOMINGO" : alert("Hoy es domingo de CROSS MET.");
    alert('1º AMRAP \n Little burpees (ideal 10 repeticiones) \n Sentadillas (ideal 20 repeticiones) \n Jumping jacks (ideal 30 repeticiones) \n \n 2º AMRAP \n     Quick seat (ideal 10 repeticiones) \n Flexiones (ideal 20 repeticiones) \n Scissor jacks (ideal 30 repeticiones) \n \n 3º AMRAP \n Speed walkout (ideal 10 repeticiones) \n Lunges (ideal 20 repeticiones) \n Lateral hops (ideal 30 repeticiones)');
    break; 

    default: alert("Escribe bien el día de la semana."); 
}

}

function bucle(){
    for(i=20; i<=70; i++){ 
        document.write("El número es: " + i + "<br>"); 
    }
}

function holamundo(){
    let number;
    var positivo = 0;
    number = prompt('Ingrese un número positivo:');
    
    while (positivo == 0){
        if (number > 0){
            positivo++;
        }else{
            number = prompt('Ingrese un número positivo:');
        } 
    }

    for(i=1; i<=number; i++){
        document.write("HOLA MUNDO (" + i + ")<br>");
    }

}
