var unsortedTeams= document.getElementById ('unsortedTeams')

var americanLeague= document.getElementById ('americanLeague')

var nationalLeague= document.getElementById ('nationalLeague')


function sortTeams(){
  var teams = unsortedTeams.children
  while(teams.length > 0){
    var team= teams [0]
    switch (team.className){
      case 'American League':
        americanLeague.appendChild(team)
        break
      case ('National League'):
        nationalLeague.appendChild(team)
        break
    }
  }
}

function putThemBack(){
  putBackOneGroup(americanLeague.children)
  putBackOneGroup(nationalLeague.children)
}

function putBackOneGroup(teams){
  while (teams.length > 0) {
    var team=teams [0]
    unsortedTeams.appendChild(team)
  }
}
