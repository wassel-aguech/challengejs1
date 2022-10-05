


function somme(){

  var tab=[]
var som=0;

    for (let i = 0; i < 5; i++) {

        tab[i]= Number(prompt('donner un entier '));

          som=som+tab[i];
        
    }
      alert(som);
}
somme();