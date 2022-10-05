



 var x= math.trunc(Math.random()*100);

alert(x)



var coups=0;
do {

    y= prompt('sasir un entier y')

    if(x>y){
        alert('pus grand')
        coups++
    }else{
        alert('plus petit')
        coups++
    }
    
} while (x=y);

alert("le nombre est trouve dans ",+coups+ "fois");

