// =====================================
// BATTLE GAME APP
// Main Logic
// =====================================


let player = null;





function loadGame(){


player = Storage.get();



if(!player)

return;



updateGame();



startIncome();



}





// =====================================
// UPDATE INTERFACE
// =====================================


function updateGame(){



player = Storage.get();





let balance =

document.getElementById(

"balance"

);





if(balance){


balance.innerText =

Math.floor(

player.balance

);



}





let income =

document.getElementById(

"income"

);






if(income){



income.innerText =

player.income.toFixed(3);



}







updateFreeEgg();



}









// =====================================
// INCOME SYSTEM
// =====================================


function startIncome(){



setInterval(()=>{



let player = Storage.get();





let total = 0;





for(let egg in player.eggs){



if(

CONFIG.EGGS[egg]

){



total +=

player.eggs[egg]

*

CONFIG.EGGS[egg].income;



}



}







player.income = total;







player.balance += total;







Storage.save(

player

);







updateGame();






},60000);



}









// =====================================
// NAVIGATION
// =====================================


function navigation(){



document

.querySelectorAll(".nav")

.forEach(button=>{



button.onclick=()=>{



let page =

button.dataset.page;






document

.querySelectorAll(".page")

.forEach(p=>{


p.classList.remove(

"active"

);


});






let target =

document.getElementById(

page

);





if(target){



target.classList.add(

"active"

);



}






document

.querySelectorAll(".nav")

.forEach(n=>{


n.classList.remove(

"active"

);



});






button.classList.add(

"active"

);




};




});



}









// =====================================
// FREE SINNI EGG
// =====================================


function updateFreeEgg(){



let player = Storage.get();






let timer =

document.getElementById(

"freeTimer"

);






let button =

document.getElementById(

"getFreeEgg"

);







if(!timer || !button)

return;








let now = Date.now();








if(

player.free_egg_time <= now

){



timer.innerText =

"Доступно сейчас";



button.disabled = false;



}

else{



let diff =

player.free_egg_time - now;






let hours =

Math.floor(

diff /

3600000

);






let minutes =

Math.floor(

(diff % 3600000)

/60000

);






timer.innerText =

"Осталось: "

+

hours

+

"ч "

+

minutes

+

"м";





button.disabled = true;



}



}









function getFreeEgg(){



let player = Storage.get();





let now = Date.now();







if(

player.free_egg_time > now

)

return;







player.eggs.SINNI +=1;







player.free_egg_time =

now +

CONFIG.FREE_EGG_TIME;







Storage.save(

player

);







alert(

"Получено яйцо SINNI"

);






updateGame();



}









// =====================================
// START
// =====================================


document.addEventListener(

"DOMContentLoaded",

()=>{



navigation();



loadGame();






let button =

document.getElementById(

"getFreeEgg"

);






if(button){



button.onclick =

getFreeEgg;



}




});







window.updateGame = updateGame;
