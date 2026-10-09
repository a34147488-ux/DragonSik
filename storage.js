// =====================================
// BATTLE GAME STORAGE
// Local Player Data
// =====================================



const Storage = {



save(player){


if(!player)

return;



localStorage.setItem(

"BATTLE_PLAYER",

JSON.stringify(player)

);



},






get(){


let data =

localStorage.getItem(

"BATTLE_PLAYER"

);





if(!data){



return {


id:null,


username:"",


nickname:"Dragon",


nickname_color:"#ffffff",



balance:0,


income:0,



eggs:{


SINNI:0,


BORLI:0,


BONI:0,


JOUNI:0,


SIXI_LEGA:0


},



friends:0,



api_key:"",



free_egg_time:0



};



}





try{


return JSON.parse(data);


}

catch(e){



console.log(

"Storage error",

e

);



return null;


}



},







update(data){



let player =

this.get();





Object.assign(

player,

data

);





this.save(

player

);



return player;



},







clear(){


localStorage.removeItem(

"BATTLE_PLAYER"

);


}



};





window.Storage = Storage;
