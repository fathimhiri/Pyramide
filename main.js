
myFunction() ;


function myFunction() {
  
  
var num = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  if (num < 26 && num > 0) {
    document.getElementById("pyr").innerHTML =
    "veuillez ouvrir la console pour voir votre pyramide!";
    pyramide(num);
  }
}



function pyramide(n){
	console.log("Voici la pyramide :");
	
	
for (var j = 1; j <= n; j++) {
  var space ="";
  var output= "";
		for (var i = 1; i <= n-j; i++) {
         space+= " ";
		}

		for (var k = 1; k <= 2*j-1; k++) {
			output +="#";
		}	

 console.log(space+output);

}
}