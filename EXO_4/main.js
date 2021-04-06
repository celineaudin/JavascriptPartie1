function formFunction(){
  var inputLastName = document.getElementById("lastName").value;
  var inputFirstName = document.getElementById("firstName").value;
  var inputCity = document.getElementById("city").value;
  if (isNaN(inputLastName) && isNaN(inputLastName) && isNaN(inputCity)){
    alert('Votre Nom est : ' + inputLastName + '\n' + 'Votre prénom est : ' + inputFirstName + '\n' + 'Votre ville est : ' + inputCity + '\n')
  } else{
    alert ('Veuillez remplir les champs');
  }
}


//var name = prompt ('Entrez votre nom:');
//var lastname = prompt ('Entrez votre prénom:');
//var city = prompt ('Entrez votre prénom:');
//if (name == '' || lastname == '' || city == '')) {
  //alert('Veuillez remplir tous les champs, s\il vous plait');
//} else {
//  alert('Nom: ' + name + '\n' + 'Prénom: ' + lastname + '\n' + 'Ville: ' + city + '\n')
//}
