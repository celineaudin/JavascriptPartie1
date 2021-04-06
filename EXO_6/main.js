function displayAge(){
var age = document.getElementById("age").value;
//si age existe et age est supérieur ou égal à 18
if (age){
  //alors on affiche "vous êtes majeur"
  // sinon (dans tous les autres cas)
if(age > 0) {
 if (age >= 18){
    alert("Vous êtes majeur");
}else{
  //on affiche "vous etes mineur"
  alert("Vous êtes mineur !");
  }
}else {
  alert ("veuillez vérifier vos champs !");
  }
}
}
