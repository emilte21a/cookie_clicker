
var formatter = new Intl.NumberFormat()

let gold = 0;
let goldamt = document.querySelector(".goldamt");
let button = document.querySelector(".klickknapp");
let inventory = [];
let inventoryList = document.querySelector(".inventory-list");
let inventoryList2 = document.querySelector(".inventory2-list")
let upgrade1button = document.querySelector(".upgrade1");
let upgrade2button = document.querySelector(".upgrade2");
let autoclickerbutton = document.querySelector(".autoclick");
let autoclickerbutton2 = document.querySelector(".autoclick2")

let goldpersec = 0;
let scoreMultiplier = 1;

button.addEventListener("click", addgold);

upgrade1button.addEventListener("click", buyUpgrade);

upgrade2button.addEventListener("click", buyUpgrade2);

autoclickerbutton.addEventListener("click", buyAutoclick);

autoclickerbutton2.addEventListener("click", buyAutoclick2);

function buyUpgrade(){
    if (gold >= 50) {
        gold -= 50;
        
        scoreMultiplier++;
        update();
    }

}

function buyUpgrade2(){
    if (gold >= 5000){
        gold -= 5000;
        
        scoreMultiplier = scoreMultiplier+100;
        update();
    }
}

function buyAutoclick(){
    if (gold >= 1000) {
        gold -= 1000;
        goldpersec=goldpersec+1;
    }
    update();
}

function buyAutoclick2(){
    if (gold >=100000) {
        gold -= 100000;
        goldpersec=goldpersec+100;
    }
    update();
}

function autoclicker(){
    gold += goldpersec;
    update();
}

function update(){
    updateInventory();
    goldamt.innerHTML = formatter.format(gold);
}

function updateInventory(){
    inventoryList.innerHTML = formatter.format(scoreMultiplier) + " gold per click";
    inventoryList2.innerHTML = formatter.format(goldpersec) + " gold per second";
}



function addgold(){
    gold += scoreMultiplier;
    goldamt.innerHTML = formatter.format(gold);
    update();
}

update();
setInterval(autoclicker, 1000);