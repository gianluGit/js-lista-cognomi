// creo un'array con una lista di cognomi
var cognomi = ["Bianchi", "Rossi", "Pirlo", "Gattuso"];

var btn = document.getElementById('button');


console.log(cognomi);

btn.addEventListener("click", function(){
  var cognomeUtente = document.getElementById('InputCognome').value;
  console.log(cognomi);

  if (isNaN(cognomeUtente) && cognomeUtente != "") {
    cognomi.push(cognomeUtente);
    cognomi.sort();
    document.getElementById('indice').innerHTML = "Ti trovi in posizione " + (cognomi.indexOf(cognomeUtente) + 1);
    console.log(cognomi);
  } else {
    alert("Errore");
    document.getElementById('indice').innerHTML = "Inserisci un valore diverso";
  }
});
