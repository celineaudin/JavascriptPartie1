function displayResult() {
  var errorMessage="Veuillez remplir tous les champs";
  //on stocke la valeur de nos inputs dans une variable
  var firstNumber = document.getElementById('first').value;
  var secondNumber = document.getElementById('second').value;
  //cette variable contient le resultat de la multiplication des 2 autres variables
  var result = firstNumber * secondNumber;
  //on vérifie l'existence de nos variables. Si elles existent on l'affiche das une modale.
  if (firstNumber && secondNumber) {
  //les variables existent, leur contenu apparait dans une modale.
    alert(result);
    //sinon, on affiche un message d'erreur
  }else {
    alert(errorMessage);
  }
}
