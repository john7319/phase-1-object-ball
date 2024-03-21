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

function numPointsScored(playerName, teams) {
    // loops through the home and away teams
    for (const team of Object.values(teams)) {
      // Check each player within the team
      for (const player in team.players) {
        // Compare player names (case-sensitive)
        if (player === playerName) {
          // Return the points value if names match
          return team.players[player].points;
        }
      }
    }
    console.error("Invalid Input")
  }

function shoeSize(playerName, teams) {
// loops through the home and away teams
    for (const team of Object.values(teams)) {
        // Check each player within the team
        for (const player in team.players) {
        // Compare player names (case-sensitive)
            if (player === playerName) {
                // Return the points value if names match
                return team.players[player].shoe;
            }
        }
    }
    console.error("Invalid Input")
    }

function teamColors(teamName, teams) {
    // Access the home and away teams
    for (const team of Object.values(teams)) {
      // Check if team name matches (case-sensitive)
      if (team.teamName === teamName) {
        // Split the comma-separated colors string into an array and return
        return team.colors.split(', ');
      }
    }
  
    // If team not found, return an empty array
    console.error("Invalid Input")
}

function teamNames(teams) {
    // Get an array of the team objects (home and away)
    const teamsArray = Object.values(teams);
    return teamsArray.split(', ')

}

function teamNames(teams) {
    const teamNameList = [];
  
    // Access the home and away teams
    for (const team of Object.values(teams)) {
      // Push the team name to the array
      teamNameList.push(team.teamName);
    }
  
    return teamNameList;
}

function playerNumbers(teamName, teams) {
    // Initialize an empty array to store jersey numbers
    const jerseyNumbers = [];
  
    // Access the home and away teams
    for (const team of Object.values(teams)) {
      // Check if team name matches (case-sensitive)
      if (team.teamName === teamName) {
        // Iterate through players in the matching team
        for (const player in team.players) {
          // Access the jersey number and add it to the array
          jerseyNumbers.push(team.players[player].number);
        }
        // Exit the loop after finding the matching team (assuming unique team names)
        break;
      }
    }
  
    return jerseyNumbers;
}

function playerStats(playerName, teams) {
    // Access home and away teams
    for (const team of Object.values(teams)) {
      // Iterate through players in the team
      for (const playerNameKey in team.players) {
        // Case-insensitive player name comparison (optional)
        if (playerNameKey.toLowerCase() === playerName.toLowerCase()) {
          // Return an object containing the player's stats
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
  
    // If no player found, return an empty object
    console.error("Invalid Input");
  }
  
function bigShoeRebounds(teams) {
    // Initialize variables
    let maxShoeSize = -1;
    let maxRebounds = -1;

    // Access home and away teams
    for (const team of Object.values(teams)) {
    // Iterate through players in the team
    for (const playerName in team.players) {
        // Check if current shoe size is greater than max
        if (team.players[playerName].shoe > maxShoeSize) {
        maxShoeSize = team.players[playerName].shoe;
        maxRebounds = team.players[playerName].rebounds;
        }
    }
    }

    // Return max rebounds or -1 if no players found
    return maxRebounds;
}
  
function mostPointsScored(teams) {
    // Initialize variables
    let maxPoints = -1;
    let playerWithMaxPoints;

    // Access home and away teams
    for (const team of Object.values(teams)) {
    // Iterate through players in the team
    for (const playerName in team.players) {
        const playerPoints = team.players[playerName].points;
        // Check if current player has more points than the max
        if (playerPoints > maxPoints) {
        maxPoints = playerPoints;
        playerWithMaxPoints = playerName;
        }
    }
    }

    // Return player name (or undefined if no players found)
    return playerWithMaxPoints;
}
  
function winningTeam(teams) {
    // Initialize variables
    let maxTeamPoints = -1;
    let winningTeamName;

    // Iterate through home and away teams
    for (const teamName in teams) {
    let teamPoints = 0;
    // Sum points for all players in the team
    for (const playerName in teams[teamName].players) {
        teamPoints += teams[teamName].players[playerName].points;
    }
    // Check if current team has more points than the max
    if (teamPoints > maxTeamPoints) {
        maxTeamPoints = teamPoints;
        winningTeamName = teamName;
    }
    }

    // Return winning team name (or undefined if no teams found)
    return winningTeamName;
}
  
function playerWithLongestName(teams) {
    // Initialize variables
    let longestName = "";
    let playerWithLongestName;

    // Access home and away teams
    for (const team of Object.values(teams)) {
    // Iterate through players in the team
    for (const playerName in team.players) {
        // Check if current player name is longer than the longest found
        if (playerName.length > longestName.length) {
        longestName = playerName;
        playerWithLongestName = playerName;
        }
    }
    }

    // Return player name (or undefined if no players found)
    return playerWithLongestName;
}
  
function doesLongNameStealATon(teams) {
    // Initialize variables
    let longestName = "";
    let playerWithLongestName;
    let mostSteals = -1;
    let playerWithMostSteals;

    // Access home and away teams
    for (const team of Object.values(teams)) {
    // Iterate through players in the team
    for (const playerName in team.players) {
        // Check if current player name is longer than the longest found
        if (playerName.length > longestName.length) {
        longestName = playerName;
        playerWithLongestName = playerName;
        }
        // Track most steals and player
        if (team.players[playerName].steals > mostSteals) {
        mostSteals = team.players[playerName].steals;
        playerWithMostSteals = playerName;
        }
    }
    }

    // Check if they are the same player
    return playerWithLongestName === playerWithMostSteals;
}
  