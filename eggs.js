// =====================================
// BATTLE GAME EGGS SYSTEM
// Покупка / продажа / кража яиц
// =====================================



let selectedEgg = null;






function loadEggs(){


renderEggs();



}









// =====================================
// RENDER EGGS
// =====================================


function renderEggs(){



let box =

document.getElementById(

"eggList"

);





if(!box)

return;





box.innerHTML = "";







for(let key in CONFIG.EGGS){





let egg =

CONFIG.EGGS[key];





let player =

Storage.get();





let count =

player.eggs[key] || 0;








let card =

document.createElement(

"div"

);






card.className =

"egg-card";







card.innerHTML = `



<div class="egg" style="background:${egg.color}"></div>



<h2>${egg.name}</h2>



<p>

Цена:

${egg.price.toLocaleString()}

</p>



<p>

Доход:

+${egg.income}

 / мин

</p>



<p>

У вас:

${count}

</p>





<button onclick="buyEgg('${key}')">

КУПИТЬ

</button>





<button onclick="sellEgg('${key}')">

ПРОДАТЬ

</button>





<button onclick="stealEgg('${key}')">

СВОРОВАТЬ

</button>



`;







box.appendChild(card);




}



}









// =====================================
// BUY
// =====================================


function buyEgg(type){



let player =

Storage.get();





let egg =

CONFIG.EGGS[type];






if(

player.balance < egg.price

){



alert(

"Недостаточно средств"

);



return;


}







player.balance -=

egg.price;






player.eggs[type]+=1;







// рост цены x3

egg.price *=3;







Storage.save(

player

);






renderEggs();


if(window.updateGame)

window.updateGame();



}









// =====================================
// SELL
// =====================================


function sellEgg(type){



let player =

Storage.get();





if(

player.eggs[type] <=0

){



alert(

"Нет такого яйца"

);



return;


}







let egg =

CONFIG.EGGS[type];






player.eggs[type]-=1;







player.balance +=

Math.floor(

egg.price / 2

);







Storage.save(

player

);






renderEggs();



if(window.updateGame)

window.updateGame();



}









// =====================================
// STEAL
// =====================================


async function stealEgg(type){



let player =

Storage.get();







try{



let response =

await fetch(

CONFIG.API_URL +

"/steal",

{


method:"POST",


headers:{


"Content-Type":

"application/json"


},


body:JSON.stringify({



id:player.id,



egg:type



})


}

);







let data =

await response.json();







if(data.success){



player.eggs[type]+=1;



Storage.save(

player

);



alert(

"Яйцо украдено"

);



}

else{



alert(

data.message ||

"Не удалось"

);



}







renderEggs();



updateGame();



}



catch(e){



alert(

"Ошибка соединения"

);



}



}









document.addEventListener(

"DOMContentLoaded",

()=>{



loadEggs();



});








window.buyEgg = buyEgg;

window.sellEgg = sellEgg;

window.stealEgg = stealEgg;
