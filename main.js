
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