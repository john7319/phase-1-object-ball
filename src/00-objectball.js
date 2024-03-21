function gameObject(){
    let teams = {
        home: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
            players: {
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds:12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds:12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds:19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds:12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds:2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
                
            }
        },
        Away: {
            teamName: "Charlotte Hornets",
            colors: "Turquoise, Purple",
            players: {
                "Jeff Adrien":{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds:1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds:4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds:12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon":{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds:3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood":{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds:12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
            
        }
    }
    return teams;
}

const teams = gameObject();

// Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(playerName, teams) {
    for (const team of Object.values(teams)) {
      for (const player in team.players) {
        if (player === playerName) {
          return team.players[player].points;
        }
      }
    }
    console.error("Invalid Input")
  }

//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName, teams) {
    for (const team of Object.values(teams)) {
        for (const player in team.players) {
            if (player === playerName) {
                return team.players[player].shoe;
            }
        }
    }
    console.error("Invalid Input")
}

//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.

function teamColors(teamName, teams) {
    for (const team of Object.values(teams)) {
      if (team.teamName === teamName) {
        return team.colors.split(', ');
      }
    }
    console.error("Invalid Input")
}

//Build a function, teamNames, that operates on the game object to return an array of the team names.

    function teamNames(teams) {
        const teamNameList = [];
        for (const team of Object.values(teams)) {
            teamNameList.push(team.teamName);
        }

        return teamNameList;
    }

//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.

function playerNumbers(teamName, teams) {
    const jerseyNumbers = [];
  
    for (const team of Object.values(teams)) {
      if (team.teamName === teamName) {
        for (const player in team.players) {
          jerseyNumbers.push(team.players[player].number);
        }
        break;
      }
    }
  
    return jerseyNumbers;
}

//Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats.

function playerStats(playerName, teams) {
    for (const team of Object.values(teams)) {
      for (const playerNameKey in team.players) {
        if (playerNameKey.toLowerCase() === playerName.toLowerCase()) {
          return {
            number: team.players[playerNameKey].number,
            shoe: team.players[playerNameKey].shoe,
            points: team.players[playerNameKey].points,
            rebounds: team.players[playerNameKey].rebounds,
            assists: team.players[playerNameKey].assists,
            steals: team.players[playerNameKey].steals,
            blocks: team.players[playerNameKey].blocks,
            slamDunks: team.players[playerNameKey].slamDunks,
          };
        }
      }
    }
    console.error("Invalid Input");
}

//Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. 
  
function bigShoeRebounds(teams) {
    let maxShoeSize = -1;
    let maxRebounds = -1;
    for (const team of Object.values(teams)) {
    for (const playerName in team.players) {
        if (team.players[playerName].shoe > maxShoeSize) {
        maxShoeSize = team.players[playerName].shoe;
        maxRebounds = team.players[playerName].rebounds;
        }
    }
    }
    return maxRebounds;
}
  
//Which player has the most points? Call the function mostPointsScored.

function mostPointsScored(teams) {
    let maxPoints = -1;
    let playerWithMaxPoints;
    for (const team of Object.values(teams)) {
    for (const playerName in team.players) {
        const playerPoints = team.players[playerName].points;
        if (playerPoints > maxPoints) {
        maxPoints = playerPoints;
        playerWithMaxPoints = playerName;
        }
    }
    }
    return playerWithMaxPoints;
}
  
//Which team has the most points? Call the function winningTeam.

function winningTeam(teams) {
    let maxTeamPoints = -1;
    let winningTeamName;
    for (const teamName in teams) {
    let teamPoints = 0;
        for (const playerName in teams[teamName].players) {
            teamPoints += teams[teamName].players[playerName].points;
        }
        if (teamPoints > maxTeamPoints) {
            maxTeamPoints = teamPoints;
            winningTeamName = teamName;
        }
    }

    return winningTeamName;
}
  
//Which player has the longest name? Call the function playerWithLongestName.


function playerWithLongestName(teams) {
    let longestName = "";
    let playerWithLongestName;
    for (const team of Object.values(teams)) {
    for (const playerName in team.players) {
        if (playerName.length > longestName.length) {
        longestName = playerName;
        playerWithLongestName = playerName;
        }
    }
    }

    return playerWithLongestName;
}
  
//Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.

function doesLongNameStealATon(teams) {
    let longestName = "";
    let playerWithLongestName;
    let mostSteals = -1;
    let playerWithMostSteals;
    for (const team of Object.values(teams)) {
        for (const playerName in team.players) {
            if (playerName.length > longestName.length) {
            longestName = playerName;
            playerWithLongestName = playerName;
            }
            if (team.players[playerName].steals > mostSteals) {
            mostSteals = team.players[playerName].steals;
            playerWithMostSteals = playerName;
            }
        }
    }
    return playerWithLongestName === playerWithMostSteals;
}
  