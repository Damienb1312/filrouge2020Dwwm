var addition = 1;
var multiplication = 2;
var soustraction = 3;
var division = 4;
var choix = [soustraction, multiplication, soustraction, division];
var premierNombre;
var deuxiemeNombre;
var operationAddition; //= (premierNombre + deuxiemeNombre);
var operationMultiplication; //= (premierNombre, deuxiemeNombre);
var operationSoustraction; //= (premierNombre, deuxiemeNombre);
var operationDivision; //= (premierNombre, deuxiemeNombre);

do{
    var choix = Number(prompt("Choisissez une opération : " + "\n 1-addition"+ "\n 2-multiplication"+ 
        "\n 3-soustraction"+ "\n 4-division"));
}while(choix != 1 && choix != 2 && choix != 3 & choix != 4)

do{
    premierNombre = Number(prompt("Ecrivez le premier chiffre : "));
    deuxiemeNombre = Number(prompt("Ecrivez le deuxieme chiffre : "));
}while( isNaN(premierNombre) || isNaN(deuxiemeNombre) )

function operationAddition (nombreUn, nombreDeux){
    return nombreUn + nombreDeux;
}

function operationMultiplication (nombreUn, nombreDeux){
    return nombreUn * nombreDeux;
}

function operationSoustraction (nombreUn, nombreDeux){
    return nombreUn - nombreDeux;
}

function operationDivision (nombreUn, nombreDeux){
    return nombreUn / nombreDeux;
}

try {
    switch (choix) {
        case 1:
            var resultat = (operationAddition(premierNombre, deuxiemeNombre));
            break;
        case 2:
            var resultat = (operationMultiplication(premierNombre, deuxiemeNombre));
            break;
        case 3:
            var resultat = (operationSoustraction(premierNombre, deuxiemeNombre));
            break;
        case 4:
            var resultat = (operationDivision(premierNombre, deuxiemeNombre));
            break;
        default:
            throw new error ("vous ne pouvez pas diviser par 0");
    }
    alert("le résultat de l'opération est " + resultat);
} 
catch (error) {
    alert(error);
}
finally{
    alert('fin du programme');
}