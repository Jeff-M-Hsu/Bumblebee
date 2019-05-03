//https://discordapp.com/oauth2/authorize?client_id=545813213057515522&scope=bot&permissions=0
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var fs = require('fs'), readline = require('readline');
var request = require('request');
var cheerio = require('cheerio');

var jokes = [];
var facts = [];
var pickups = [];
var exp = [];

// Read jokes from jokes.txt
var readJokes = readline.createInterface({
	input: fs.createReadStream('jokes.txt'),
});
readJokes.on('line', function(line){
	jokes.push(line);
});
// Read facts from facts.txt
var readFacts = readline.createInterface({
	input: fs.createReadStream('facts.txt'),
});
readFacts.on('line', function(line){
	facts.push(line);
});
// Read pickup lines from pickups.txt
var readPickups = readline.createInterface({
	input: fs.createReadStream('pickups.txt'),
});
readPickups.on('line', function(line){
	pickups.push(line);
});
// Read exp table from xpChart.txt
var readExp = readline.createInterface({
	input: fs.createReadStream('xpChart.txt'),
});
readExp.on('line', function(line){
	exp.push(line);
});
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
	bot.setPresence({game: {name:"!lookup || !joke || !fact || !seduce || !honey"}});
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	//console.log(user + ", " + userID + ", " + channelID + ", " + message + ", " + evt)
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
		
        switch(cmd) {
			// !joke
			case 'joke':
				console.log("joke request");
				var number = Math.floor((Math.random() * 1000) + 1)% jokes.length;
				console.log(number);
				var output = jokes[number];
				console.log(output);
				bot.sendMessage({
					to: channelID,
					message: "" + output
				});
			break;
			// !fact
			case 'fact':
				console.log("fact request");
				var number = Math.floor((Math.random() * 1000) + 1)% facts.length;
				console.log(number);
				var output = facts[number];
				console.log(output);
				bot.sendMessage({
					to: channelID,
					message: "" + output
				});
			break;
			// !poke
			case 'poke':
				bot.sendMessage({
					to: channelID,
					message: "Buzz off.. I'm Buzzy"
				});
			break;
			// !seduce
			case 'seduce':
				console.log("pickup line request");
				var number = Math.floor((Math.random() * 1000) + 1) % pickups.length;
				console.log(number);
				var output = pickups[number];
				console.log(output);
				bot.sendMessage({
					to: channelID,
					message: "" + output
				});
			break;
			// !dance
			case 'dance':
				console.log("dance request");
				bot.uploadFile({
					to: channelID,
					message: "*sigh..*",
					file: "./dance.gif"
				});
			break;
			// !bee
			case 'bee':
				console.log("bee request");
				bot.uploadFile({
					to: channelID,
					file: "./pollen.jpg"
				});
			break;
			// !honey
			case 'honey':
				console.log("honey request");
				bot.uploadFile({
					to: channelID,
					message: "How to check if your honey is fake: ",
					file: "./authenticity.png"
				});
			break;
			// !lookup
			/*case 'lookup':
				console.log("search request for " + args[0]);
				var name = args[0].toUpperCase();
				var encodedName = encodeURIComponent(name);
				var link = "http://maplestory.io/api/ranking/" + encodedName;
				console.log("searching for " + name + " at " + link);
				request(link, function(err, res, body){
					try{
						var $ = cheerio.load(body);
						var info = JSON.parse($.text());
						//Calculation for % exp of current level
						var nextLevel = parseFloat(exp[info.level-1].split(" ")[2]);
						var percent = parseFloat(info.exp)/nextLevel;
						//If level 275
						if(nextLevel == 0){
							percent = "0";
						}
						bot.sendMessage({
							to: channelID,
							message: "",
							embed: {
								author: {
									name: "Bumblebee"
								},
								description: "Rank info for " + info.name,
								thumbnail: {
									url: "http://maplestory.io/api/ranking/" + encodedName + "/avatar"
								},
								fields: [
									{
										name: "Job",
										value: info.job,
										inline: true
									},
									{
										name: "World",
										value: info.world,
										inline: true
									},
									{
										name: "Level",
										value: info.level,
										inline: true
									},
									{
										name: "Experience",
										value: info.exp + " (" + (percent*100).toFixed(2) + "%)",
										inline: true
									},
									{
										name: "Rank",
										value: info.ranking,
										inline: true
									},
									{
										name: "Rank Change",
										value: info.rankMovement + " , " + info.rankDirection,
										inline: true
									},
									{
										name: "Date updated",
										value: info.got.substring(0,10) + " at " + info.got.substring(11,19) + " UTC"
									},
								],
							}
						});	
					}
					catch(e){
						bot.sendMessage({
							to: channelID,
							message: "",
							embed: {
								author: {
									name: "Bumblebee",
								},
								description: "Could not find info for " + name,
							}
						});
					}
				});
			break;*/
            // Just add any case commands if you want to..
         }
     }
});