//File: random.js
//Creator: Lukas Simonson
//Website Version: 1.0.0
//Page Version: 1.0.0
//Last Updated: 7/15/18
//Usage: Runs a selector script

// Lists
var Gmod = ["TTT", "DarkRp", "Deathrun", "Murder", "Sandbox"]
var Overwatch = ["Torbjörn", "Doomfist", "Genji", "McCree", "Pharah", "Reaper", "Soldier: 76", "Sombra", "Tracer", "Bastion", "Hanzo", "Junkrat", "Mei", "Widowmaker", "D.Va", "Orisa", "Reinhardt", "Roadhog", "Winston", "Zarya", "Ana", "Brigitte", "Lücio", "Mercy", "Moira", "Symmetra", "Zenyatta"]
var All = ["Overwatch", "Town of Salem", "Siege", "Rocket League", "Fortnite", "Castle Crashers", "CS:GO", "Saints Row", "Stick Fight", "Tabletop Simulator", "Terraria", "Heroes Of the Storm", "Killing Floor", "Left 4 Dead", "Unturned", "TF2", "Smite"]
var Comp = ["Overwatch", "CS:GO", "Siege", "Rocket League", "Fortnite", "Heroes of the Storm", "Smite", "TF2"]
var Coop = ["Castle Crashers", "Saints Row", "Terraria"]
var button = [""]

// Random Selector Function
function myFunction() {
		var random;
		random = Math.floor((Math.random() * button.length) + 0);
	
      document.getElementById("changeme").innerHTML = button[random];
		}