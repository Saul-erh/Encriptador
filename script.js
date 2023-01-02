    function ObtenerTexto(){

    var input = document.querySelector("input");
    var resultado = VerificaRestriccion(input.value);
        if(resultado == false){
            input.value = "";
        }
        input.focus();

    return input;
    }

    function VerificaRestriccion(texto){
        
        var patron=/[a-z ]/g;
        var aceptar = false;
        res = texto.match(patron);
       
        if(res == null){
            var res = "";   
        }
        
        if(res.length == texto.length){
             aceptar = true;
        }
        else{
            alert("No es posible encriptar!!, este texto contiene mayusculas o caracteres especiales");
        }
       
        return aceptar;
    }

    function remplaza(cadena,codigo,indice,avance){

        var posicion = 0;
        var aux = "";
        while(posicion < cadena.length){
            if(posicion == indice){
                aux = aux + codigo;
                posicion = posicion + avance;
            }
            else{
                aux = aux + cadena[posicion];
            }
            
            posicion++;
        } 
        
        return aux;
    }

    function EncriptarTexto(){

    var input = ObtenerTexto();
    var longitud = parseInt(input.value.length);
    var indice = 0;

    while(indice < longitud ){

        if(input.value[indice] == "a"){
            input.value = remplaza(input.value,"ai",indice,0);
            indice = indice + 1;
            longitud = longitud + 1;
        }
        else if(input.value[indice] == "e"){
            input.value = remplaza(input.value,"enter",indice,0);
            indice = indice + 4;
            longitud = longitud + 4;
        }
        else if(input.value[indice] == "i"){
            input.value = remplaza(input.value,"imes",indice,0);
            indice = indice + 3;
            longitud = longitud + 3;
        }
        else if(input.value[indice] == "o"){
            input.value = remplaza(input.value,"ober",indice,0);
            indice = indice + 3;
            longitud = longitud + 3;
        }
        else if(input.value[indice] == "u"){
            input.value = remplaza(input.value,"ufat",indice,0);
            indice = indice + 3;
            longitud = longitud + 3;
        }
       
        indice++;
       
    }

    var salida = input.value;
    input.value = "";
    Display("Muestra-Resultado");
    var textarea = document.querySelector("textarea");
    textarea.value = salida;
    console.log(salida);

    }

    function DesencriptarTexto(){

        var input = ObtenerTexto();
        var longitud = parseInt(input.value.length);
        var indice = 0;

        while(indice < longitud ){

            if(input.value[indice] == "a"){
                input.value = remplaza(input.value,"a",indice,1);
                longitud = longitud - 1;
            }
            else if(input.value[indice] == "e"){
                input.value = remplaza(input.value,"e",indice,4);    
                longitud = longitud - 4;
            }
            else if(input.value[indice] == "i"){
                input.value = remplaza(input.value,"i",indice,3);
                longitud = longitud - 3;
            }
            else if(input.value[indice] == "o"){
                input.value = remplaza(input.value,"o",indice,3);
                longitud = longitud - 3;
            }
            else if(input.value[indice] == "u"){
                input.value = remplaza(input.value,"u",indice,3);
                longitud = longitud - 3;
            }
        
            indice++;
        
        }

        var salida = input.value;
        input.value = "";
        Display("Muestra-Resultado");
        var textarea = document.querySelector("textarea");
        textarea.value = salida;
        console.log(salida);

    }


function copiarAlPortapapeles(id_mensaje) {

  var aux = document.createElement("input");
  var textarea = document.querySelector("textarea");
  aux.value = textarea.value;
  aux.setAttribute("value", document.getElementById(id_mensaje).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

}

function Display(myDIV){

    var x = document.getElementById("Muestra-Resultado");
    var y = document.getElementById("Oculta");
    if(myDIV == "Muestra-Resultado"){
        var y = document.getElementById("Oculta");
        y.style.display = "none";
        x.style.display = "block";
    }
    
}



