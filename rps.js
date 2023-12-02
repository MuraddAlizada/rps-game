const gameCard = document.querySelector("#gameCards");

//? usr _______________________________ 
let usrScore = document.querySelector("#usrScore"); 
let usrImg = document.querySelector("#usrImg");
let usrName = document.querySelector("#usrName");
let usrResult = document.querySelector("#usrResult"); 
let usrPoint = document.querySelector("#usrPoint");
//? ________________________________________


//! comp_____________________________________   
let compScore = document.querySelector("#compScore"); 
let compImg = document.querySelector("#compImg"); 
let compPoint = document.querySelector("#compPoint"); 
let compResult = document.querySelector("#compResult"); 
//! __________________________________________


const playGame = ["r", "p", "s"];
let playerUser = 0;
let playerComp = 0;

function randomElement (){  
    const randomIndex =  Math.floor(Math.random() * playGame.length);   
    // console.log(randomIndex); 
    return playGame[randomIndex];
}

function gameRules (user,comp) {    
    usrImg.src = `./img/${user}.png`;    
    compImg.src = `./img/${comp}.png`;
    if (user == "r" && comp == "s") {
        usrResult.innerHTML = "Win";
        compResult .innerHTML = "Lose";
        usrResult.style.color = "green";
        compResult.style.color = "red";
        playerUser += 1;
        usrPoint.innerHTML = playerUser;
        usrScore.innerHTML = playerUser;
        compPoint.innerHTML = playerComp;
        compScore.innerHTML = playerComp;
    } else if (user == "p" && comp == "r") {
        usrResult.innerHTML = "Win";
        compResult .innerHTML = "Lose";
        usrResult.style.color = "green";
        compResult.style.color = "red";
        playerUser += 1;
        usrPoint.innerHTML = playerUser;
        usrScore.innerHTML = playerUser;
        compPoint.innerHTML = playerComp;
        compScore.innerHTML = playerComp;
    }else if (user == "s" && comp == "p") {
        usrResult.innerHTML = "Win";
        compResult.innerHTML = "Lose";
        usrResult.style.color = "green";
        compResult.style.color = "red";
        playerUser += 1;
        usrPoint.innerHTML = playerUser;
        usrScore.innerHTML = playerUser;
        compPoint.innerHTML = playerComp;
        compScore.innerHTML = playerComp;
    }else if (user == comp) {
        // console.log("Draw");
        usrResult.innerHTML = "Draw";
        compResult.innerHTML = "Draw";
        usrResult.style.color = "black";
        compResult.style.color = "black";}  
        else {
            console.log("Comp wins");
            playerComp += 1;
            usrResult.innerText = "Lose";
            compResult.innerText = "Win";
            usrResult.style.color = "red";
            compResult.style.color = "green";
            usrPoint.innerText = playerUser;
            usrScore.innerText = playerUser;
            compScore.innerText = playerComp;
            compPoint.innerText = playerComp;
          }
        
}

window.addEventListener("keypress", function (e) {
    let userChoose = e.key;
    if (playGame.includes(e.key) === false) {
      alert("Zehmet olmasa dogru herf secin > r,p,s");
    } else {
      let compChoose = randomElement();
      gameRules(userChoose, compChoose);
    }
  });