//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}


// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(num) {
  if(num.length==0){
    return null
  }else{
    var format =  {
      defender: num[0],
      midfield: num[1],
      forward: num[2]
  }
}
return format
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  return players.filter((players) => players.debut == year)
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  return players.filter((players)=> players.position == position )
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  return players.filter((player) => {
    return player.awards.some((item) => {
      return item.name===awardName})
  })
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  return players.filter((player) => {
    let count = player.awards.filter((item) => {
      return item.name === awardName;
    })
    return count.length === noOfTimes;
  })
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  var awardPlayers = players.filter((player)=>{
    return player.awards.some((item) => {
      return item.name === awardName
    })
  })
  return awardPlayers.filter ((player) =>{
    return player.country === country;
  })
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var teamPlayers= players.filter((player) => {
    return player.team == team; 
  })

  var agePlayers = teamPlayers.filter((team) => {
    return team.age < age;
  })

  return agePlayers.filter((item) => {
    return item.awards.length >= noOfAwards;
  })
}

//Progression 9 - Sort players in descending order of their age

function SortByAge(){
  return players.sort((player1,player2)=>{
    return player2.age-player1.age;
  })
}

//Progression 10 - sort players in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team) {
  var teamPlayers=players.filter((player)=> {
    return player.team == team;
  })
  return teamPlayers.sort((player1,player2)=>{
    return (player2.awards).length-(player1.awards).length; 
  })
}



//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var awardNamePlayers = players.filter((player)=>{
    return player.awards.some((item) => {
      return item.name === awardName;
    })
  })

  var countryPlayers = awardNamePlayers.filter((items)=>{
    return items.country===country;
  })

  return countryPlayers.filter((a)=>{
    return a.awards.length == noOfTimes;
  })
}


//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order


function SortByNamexOlderThan(age) {
  var aboveAgePlayers = players.filter((player)=>{
    return player.age > age;
  })

  var SortedAgePlayers = aboveAgePlayers.sort((player1,player2)=>{
    return player1.name.localeCompare(player2.name);
  })

  return SortedAgePlayers.map((b)=>{
    b.awards.sort((award1,award2)=>{
      return award1.year-award2.year;
    })
  })
}