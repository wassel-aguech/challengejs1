


function somme(...tab){

var som=0;

    for (let i = 0; i < tab.length; i++) {

        tab[i]= Number(prompt('donner un entier '));

          som=som+tab[i];
        
    }
      alert(som);
}
somme()