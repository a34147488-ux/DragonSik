// =====================================
// BATTLE GAME TELEGRAM CONNECT
// Новый проект
// =====================================



let telegramUser = null;





function initTelegram(){



if(
!window.Telegram ||
!Telegram.WebApp
){


console.log(

"Telegram WebApp not found"

);


return;


}





const tg = Telegram.WebApp;



tg.ready();


tg.expand();





telegramUser =

tg.initDataUnsafe.user;






if(!telegramUser){



console.log(

"Telegram user not found"

);



return;


}







let player = Storage.get();





player.id =

String(

telegramUser.id

);





player.username =

telegramUser.username || "";





Storage.save(

player

);





console.log(

"Battle user:",

telegramUser

);







loadServerPlayer();



}









async function loadServerPlayer(){



let player = Storage.get();





if(!player.id)

return;







try{



let response =

await fetch(

CONFIG.API_URL +

"/player",

{


method:"POST",


headers:{


"Content-Type":

"application/json"


},


body:JSON.stringify({


id:String(player.id),


username:

player.username


})


}

);







let data =

await response.json();








if(data.player){



Storage.save(

data.player

);






if(window.updateGame)

window.updateGame();



}





}

catch(e){



console.log(

"Server connection error",

e

);



}





}









function getTelegramUser(){



return telegramUser;


}





window.initTelegram = initTelegram;


window.getTelegramUser = getTelegramUser;








document.addEventListener(

"DOMContentLoaded",

()=>{


initTelegram();


});
