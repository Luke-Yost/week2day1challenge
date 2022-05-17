let teams = {
  purple:{name:'home',score:0},
  green:{name:'away',score:0}
}


function drawScore(){
  let purpleScoreCard = document.getElementById('homeCard')
  let greenScoreCard = document.getElementById('awayCard')

  purpleScoreCard.innerText =teams.purple.score.toString()
  greenScoreCard.innerText =teams.green.score.toString()
}

function scoreLow(currentTeam){
let scoringTeam = teams[currentTeam]
scoringTeam.score ++

drawScore()
}

function scoreHigh(currentTeam){
  let bigScoringTeam = teams[currentTeam]
  bigScoringTeam.score += 5

  drawScore()
}

function newGame(){
  teams.green.score = 0
  teams.purple.score =0
  drawScore()
}

function cheat(currentTeam){
let cheatingTeam = teams[currentTeam]
if(cheatingTeam.name == 'home'){
  teams.purple.score += teams.green.score
  teams.green.score=0
  drawScore()
}
else{
  teams.green.score += teams.purple.score
  teams.purple.score = 0
  drawScore()
}

}