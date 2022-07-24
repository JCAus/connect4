let playBtn = document.querySelector('.playBtn');

playBtn.addEventListener('click', playGame);

function playGame(){

let yellowWins = 0;
let redWins = 0;

let count = 0;
//each letter corresponds to a column, if a column is played in, the letter's count goes up and this will be used to keep track of where coins can go
let a = 1;
let b = 1;
let c = 1;
let d = 1;
let ee = 1;
let f = 1;
let g = 1;



let yellowScore = document.querySelector('.yellowWins');
let redScore = document.querySelector('.redWins');
yellowScore.innerHTML = yellowWins;
redScore.innerHTML = redWins;

const columns = Array.from(document.querySelectorAll(".col"));
const topCoins = Array.from(document.querySelectorAll(".top"));
const playedCoins = Array.from(document.querySelectorAll(".row"));



//Assing an array for each row and column
let row1 = Array.from(document.querySelectorAll('.one'));
let row2 = Array.from(document.querySelectorAll('.two'));
let row3 = Array.from(document.querySelectorAll('.three'));
let row4 = Array.from(document.querySelectorAll('.four'));
let row5 = Array.from(document.querySelectorAll('.five'));
let row6 = Array.from(document.querySelectorAll('.six'));

let colA = Array.from(document.querySelectorAll('.cola'));
let colB = Array.from(document.querySelectorAll('.colb'));
let colC = Array.from(document.querySelectorAll('.colc'));
let colD = Array.from(document.querySelectorAll('.cold'));
let colE = Array.from(document.querySelectorAll('.cole'));
let colF = Array.from(document.querySelectorAll('.colf'));
let colG = Array.from(document.querySelectorAll('.colg'));

let rowArr = [row1, row2, row3, row4, row5, row6];
let columnArr = [colA, colB, colC, colD, colE, colF, colG];


//These functions will make the coin appear above the desired column
columns.forEach(column => {column.addEventListener("mouseover", function(e){
    switchColors();
    if(e.target){
        let coins = e.target.children;
        coins[0].style.backgroundColor = color;
            }
        });
    });

columns.forEach(column => {column.addEventListener("mouseout", function(e){
    switchColors();
    if(e.target){
        let coins = e.target.children;
        coins[0].style.backgroundColor = "white";
            }
        });
    });

topCoins.forEach(topCoin => {topCoin.addEventListener("mouseover", function(e){
    switchColors();
    if(e.target){
        let coins = e.target;
        coins.style.backgroundColor = color;
            }
        });
    });

topCoins.forEach(topCoin => {topCoin.addEventListener("mouseout", function(e){
    switchColors();
    if(e.target){
        let coins = e.target;
        coins.style.backgroundColor = "white";
            }
        });
    });

playedCoins.forEach(playedCoin => {playedCoin.addEventListener("mouseover", function(e){
    switchColors();
    if(e.target){
        let coins = e.target.parentNode.children;
        coins[0].style.backgroundColor = color;
            }
        });
    });
    
playedCoins.forEach(playedCoin => {playedCoin.addEventListener("mouseout", function(e){
    switchColors();
    if(e.target){
        let coins = e.target.parentNode.children;
        coins[0].style.backgroundColor = "white";
            }
        });
    });

//the event is on the parent el, the child el is being effected
columns.forEach(column => {column.addEventListener("click", dropCoinChild)});
//the event is on a sibling being effected
topCoins.forEach(topCoin => {topCoin.addEventListener("click", dropCoinSib)});
playedCoins.forEach(playedCoin => {playedCoin.addEventListener("click", dropCoinSib)});



function dropCoinChild(e){
    let coins = e.target.children;
    
    if(e.target.classList.contains('a')){
        let lastChildA = coins[coins.length - a];
        lastChildA.style.backgroundColor = color;
        a++;
    };
    if(e.target.classList.contains('b')){
        let lastChildB = coins[coins.length - b];
        lastChildB.style.backgroundColor = color;
        b++;
    };
    if(e.target.classList.contains('c')){
        let lastChildC = coins[coins.length - c];
        lastChildC.style.backgroundColor = color;
        c++;
    };
    if(e.target.classList.contains('d')){
        let lastChildD = coins[coins.length - d];
        lastChildD.style.backgroundColor = color;
        d++;
    };
    if(e.target.classList.contains('e')){
        let lastChildE = coins[coins.length - ee];
        lastChildE.style.backgroundColor = color;
        ee++;
    };
    if(e.target.classList.contains('f')){
        let lastChildF = coins[coins.length - f];
        lastChildF.style.backgroundColor = color;
        f++;
    };
    if(e.target.classList.contains('g')){
        let lastChildG = coins[coins.length - g];
        lastChildG.style.backgroundColor = color;
        g++;
    };
    count++;
    switchColors();
    checkHorizontalWin(rowArr);
    checkVerticalWin(columnArr);
    checkDownDiagWin(columns, 0, 4, 1);
    checkDownDiagWin(columns, 0, 4, 2);
    checkDownDiagWin(columns, 0, 4, 3);
    checkDownDiagWin(columns, 1, 5, 0);
    checkDownDiagWin(columns, 1, 5, 1);
    checkDownDiagWin(columns, 1, 5, 2);
    checkDownDiagWin(columns, 2, 6, -1);
    checkDownDiagWin(columns, 2, 6, 0);
    checkDownDiagWin(columns, 2, 6, 1);
    checkDownDiagWin(columns, 3, 7, -2);
    checkDownDiagWin(columns, 3, 7, -1);
    checkDownDiagWin(columns, 3, 7, 0);

    checkUpDiagWin(columns, 0, 4, 6);
    checkUpDiagWin(columns, 0, 4, 5);
    checkUpDiagWin(columns, 0, 4, 4);
    checkUpDiagWin(columns, 1, 5, 7);
    checkUpDiagWin(columns, 1, 5, 6);
    checkUpDiagWin(columns, 1, 5, 5);
    checkUpDiagWin(columns, 2, 6, 8);
    checkUpDiagWin(columns, 2, 6, 7);
    checkUpDiagWin(columns, 2, 6, 6);
    checkUpDiagWin(columns, 3, 7, 9);
    checkUpDiagWin(columns, 3, 7, 8);
    checkUpDiagWin(columns, 3, 7, 7);
    
    changeScore(playedCoins);
    checkForTie();
    isWin(playedCoins);
    
}

function dropCoinSib(e){
    let coins = e.target.parentNode.children;
    
    if(e.target.parentNode.classList.contains('a')){
        let lastChildA = coins[coins.length - a];
        lastChildA.style.backgroundColor = color;
        a++;
        
    };
    if(e.target.parentNode.classList.contains('b')){
        let lastChildB = coins[coins.length - b];
        lastChildB.style.backgroundColor = color;
        b++;
    };
    if(e.target.parentNode.classList.contains('c')){
        let lastChildC = coins[coins.length - c];
        lastChildC.style.backgroundColor = color;
        c++;
    };
    if(e.target.parentNode.classList.contains('d')){
        let lastChildD = coins[coins.length - d];
        lastChildD.style.backgroundColor = color;
        d++;
    };
    if(e.target.parentNode.classList.contains('e')){
        let lastChildE = coins[coins.length - ee];
        lastChildE.style.backgroundColor = color;
        ee++;
    };
    if(e.target.parentNode.classList.contains('f')){
        let lastChildF = coins[coins.length - f];
        lastChildF.style.backgroundColor = color;
        f++;
    };
    if(e.target.parentNode.classList.contains('g')){
        let lastChildG = coins[coins.length - g];
        lastChildG.style.backgroundColor = color;
        g++;
    };
    checkForTie();
    isWin(playedCoins);
}

//Keeps track of whose turn it is
function switchColors(){
    if(count % 2 === 0){
        color = "yellow";
    }
    else{color = "red"; }    
}




//The vert and horizontal check checks every 4 in-a-row/in-a-column spot to see if every coin in that spot is either red or yellow

function checkVerticalWin(arr){arr.forEach(col => {
    let colWin1 = [col[0], col[1], col[2], col[3]];
    let colWin2 = [col[1], col[2], col[3], col[4]];
    let colWin3 = [col[2], col[3], col[4], col[5]];

    if(checkSameColor(colWin1, 'yellow') === true){
        
        colWin1.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
        })
    }
    else if(checkSameColor(colWin1, 'red') === true){
        
        colWin1.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
        })
    }
    else if(checkSameColor(colWin2, 'yellow') === true){
        
        colWin2.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
        })
    }
    else if(checkSameColor(colWin2, 'red') === true){
        
        colWin2.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
        })
    }
    else if(checkSameColor(colWin3, 'yellow') === true){
        
        colWin3.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
        })
    }
    else if(checkSameColor(colWin3, 'red') === true){
        
        colWin3.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
        })
    }
    else{ return; }
})}
    
//Checking if played coins in rows have 4 of the same color in a row
function checkHorizontalWin(arr){arr.forEach(row => {
    let rowWin1 = [row[0], row[1], row[2], row[3]];
    let rowWin2 = [row[1], row[2], row[3], row[4]];
    let rowWin3 = [row[2], row[3], row[4], row[5]];
    let rowWin4 = [row[3], row[4], row[5], row[6]];

    if(checkSameColor(rowWin1, 'yellow') === true){
        
        rowWin1.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
    })}
    else if(checkSameColor(rowWin1, 'red') === true){
        
        rowWin1.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
    })
    }
    else if(checkSameColor(rowWin2, 'yellow') === true){
        
        rowWin2.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
    })
    }
    else if(checkSameColor(rowWin2, 'red') === true){
        
        rowWin2.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
    })
    }
    else if(checkSameColor(rowWin3, 'yellow') === true){
        
        rowWin3.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
    })
    }
    else if(checkSameColor(rowWin3, 'red') === true){
        
        rowWin3.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
    })
    }
    else if(checkSameColor(rowWin4, 'yellow') === true){
        
        rowWin4.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
    })
    }
    else if(checkSameColor(rowWin4, 'red') === true){
        
        rowWin4.forEach(val =>{
            val.classList.add('win');
            val.innerText = 'WINNER';
    })
    }
    else{ return; }
})}
     
// checks if every color is the same in a potential winning array of 4
function checkSameColor(arr, colors){
    return arr.every(val => {
        return val.style.backgroundColor === colors;
    });
}



//This function uses a forLoop to add downward diagonal played spaces to an array, then the array items are checked to see if each item has the same bg color
//arr would be the columns array, the start is the starting column, and the x is how far down the column the beginning diagonal space is
function checkDownDiagWin(arr, start, y, x){
    let downDiagWin = [];
    for(let i=start; i<y; i++){
        let val = arr[i].children[i + x];
        downDiagWin.push(val);
        
    }
    if(downDiagWin.every(val => {return val.style.backgroundColor === 'yellow';})){
        downDiagWin.forEach(val => {
            val.classList.add('win');
            val.innerText = 'WINNER';
        })
    }
    else if(downDiagWin.every(val => {return val.style.backgroundColor === 'red';})){
        downDiagWin.forEach(val => {
            val.classList.add('win');
            val.innerText = 'WINNER';
        })
    }
    else{ downDiagWin = [];
        return;}  
    }
        
//similar to how the down diagonal check works   
function checkUpDiagWin(arr, start, y, x){
    let upDiagWin = [];
    for(let i=start; i<y; i++){
        let val = arr[i].children[x - i];
        upDiagWin.push(val);
        
    }
    if(upDiagWin.every(val => {return val.style.backgroundColor === 'yellow';})){
        upDiagWin.forEach(val => {
            val.classList.add('win');
            val.innerText = 'WINNER';
        })
    }
    else if(upDiagWin.every(val => {return val.style.backgroundColor === 'red';})){
        upDiagWin.forEach(val => {
            val.classList.add('win');
            val.innerText = 'WINNER';
        })
    }
    else{ upDiagWin = [];
        return;}  
    } 

//This function is meant to stop the game after a win and let the player restart if they want
function isWin(arr){
    if(arr.some(val => {
        return val.classList.contains('win');
    })){
        
        columns.forEach(column => {column.removeEventListener("click", dropCoinChild)});
        topCoins.forEach(topCoin => {topCoin.removeEventListener("click", dropCoinSib)});
        playedCoins.forEach(playedCoin => {playedCoin.removeEventListener("click", dropCoinSib)});
        playBtn.removeEventListener('click', playGame)

        
        
        
            }
            
            else{ return;} 
        }


function checkForTie(){
    if(playedCoins.every(coin =>{
        return coin.style.backgroundColor === 'red' || coin.style.backgroundColor === 'yellow';
        
    })){
        alert("The game ends in a tie! Click 'REPLAY' to play again");
        location.reload();
            }
    else{return;}
    
}

const field = document.querySelector('#field');
        let replayBtn = document.createElement('button');
        replayBtn.setAttribute('class', 'replayBtn');
        replayBtn.classList.add('replayBtn:hover');
        replayBtn.innerText = 'REPLAY?';
        field.appendChild(replayBtn);

replayBtn.addEventListener('click', restart)

//This function allows the play
function restart(e){
    if(e.target.classList.contains('replayBtn')){
    columns.forEach(column => {column.addEventListener("click", dropCoinChild)});
    topCoins.forEach(topCoin => {topCoin.addEventListener("click", dropCoinSib)});
    playedCoins.forEach(playedCoin => {playedCoin.addEventListener("click", dropCoinSib)});
    
    
    
    let spots = Array.from(document.querySelectorAll('.row'));
    spots.forEach(spot => {
        spot.style.backgroundColor = "rgb(255,255,255,.4)";
        spot.classList.remove('win');
        spot.innerText = '';
    });
    count = 0;
    a = 1;
    b = 1;
    c = 1;
    d = 1;
    ee = 1;
    f = 1;
    g = 1;
    }
}
//score keeper
function changeScore(arr){
    arr.forEach(val=>{if(val.classList.contains('win')){
        if(val.style.backgroundColor === 'yellow'){
            yellowWins++;
            yellowScore.innerText = yellowWins/4;
            
        }
        else if(val.style.backgroundColor === 'red'){
            redWins++;
            redScore.innerText = redWins/4;
            
        }
    }})}}