

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
    if(nombreDeux == 0){
        throw new Error ("Impossible de diviser par 0");
    }
    return nombreUn / nombreDeux;
}

let restart = false ;
do{

    do{
        var choix = Number(prompt("Choisissez une opération : " + "\n 1-addition"+ "\n 2-multiplication"+ 
            "\n 3-soustraction"+ "\n 4-division\n"));
    }while(choix != 1 && choix != 2 && choix != 3 & choix != 4)

    do{
        var premierNombre = Number(prompt("Ecrivez le premier chiffre : "));
        var deuxiemeNombre = Number(prompt("Ecrivez le deuxieme chiffre : "));
    }while( isNaN(premierNombre) || isNaN(deuxiemeNombre) )



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
                throw new Error ("Une erreur est survenue");
        }
        alert("le résultat de l'opération est " + resultat);
    
    } 
    catch (error) {
        alert(error);
    }
    restart = confirm('Souhaitez vous effecter un nouveau calcul?');

}while(restart)

