let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let count=0
let countG=0
function add1Point(){
    count+=1
    homeScore.textContent=count
}

function add2Point(){
    count+=2
    homeScore.textContent=count
}

function add3Point(){
    count+=3
    homeScore.textContent=count
}

function add1PointG(){
    countG+=1
    guestScore.textContent=countG
}

function add2PointG(){
    countG+=2
    guestScore.textContent=countG
}

function add3PointG(){
    countG+=3
    guestScore.textContent=countG
}
function resetGmae(){
    count=0
    homeScore.textContent=count
    countG=0
    guestScore.textContent=countG
}
