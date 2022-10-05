


var membre={

    id:01,
    name:'user1',
    grade:'g1',

    f1:function(){
        return(membre.id,membre.name,membre.grade);
    }
  
  }

  console.log(f1())

 var y=new membre;
var team ={};

for( let i in team){
    team[i]=y;
}

console.log(team);