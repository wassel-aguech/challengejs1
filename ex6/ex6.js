


console.log('hello');
 var x= Math.floor(Math.random()*101);




var coups=0;
do {

    y= Number(prompt('sasir un entier y'))

    coups++;
    if(x>y){
        alert('plus grand');
    }
    if(x<y){
        alert('plus petit');
    }
    
} while (x!=y );

alert(`le nombre est trouve dans ${coups} fois`)

