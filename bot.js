var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var jokes = ["Why do bees get married? Because they found their honey!", 
"The worst part about getting stung by bees is that the following day you are going to have to take care of those hives.", 
"What did one bee say to the other when they landed on the same flower? Buzz off.", 
"I know that I have never seen a humming bird but I certainly did see a spelling bee.", 
"We always buy our natural honey from the same bees because they always give us their swarm wishes.", 
"Bees can fly in the rain if they are wearing their little yellow jackets.", 
"When a bee is in your hand, what’s in your eye? Beauty. Because beauty is in the eye of the bee-holder.", 
"The younger generation of bees love the musician Sting.", 
"Speaking of music, all bees can relate to the pop band the Bee Gees.", 
"All bees love the honey-moon part of their relationships more than anything else.", 
"The only one who can protect the Queen Bee is her hub-bee.", 
"What’s a bee’s favorite Spice Girls song? Wanna-bee!", 
"The bee was fired from the barber shop because the only thing he could do was give a buzz-cut.", 
"A bee who is good in math knows exactly what a rhom-buzz is.", 
"A bee that will not stop eating will eventually become a little chub-bee.", 
"A bee styles their hair with a honeycomb.", 
"What do bees like with their sushi? Wasa-bee!", 
"Bee puns really sting.", 
"They asked the beekeeper to move his business out of town because he was creating quite a buzz around town.", 
"The swarm of teenage bees all loved The Beatles and their “Let it Bee” album.", 
"What’s a happy bumblebee’s blood type? Bee positive!", 
"Only bees who are on their best bee-havior get to go to the hive and make honey.", 
"Who’s a bee’s favorite singer? Bee-yoncé.", 
"As soon as the bees were finished making their hive they threw a big house swarming party for the rest of the group.", 
"That bee certainly deserved the promotion at work, he was always so buzzy on the job.", 
"That bee is talking too quietly, it must be a mumble-bee!", 
"The bee who loved to fly backwards would often be heard going zzub zzub zzub.", 
"That pretentious wasp is just plain snob-bee!", 
"When you cross a doorbell and a bee you wind up with a hum-dinger.", 
"That single bee finally got married because he found his honey.", 
"The worker bee decided to take a vacation to Stingapore last year.", 
"The bee that resides in America is also known as a USB.", 
"Remember, bee puns are good for your health, they give you a dose of Vitamin Bee!", 
"Quit pollen my leg.", 
"Bee children take the school buzz to get to school.", 
"What kind of bees drop things? Fumble bees!", 
"To bee or not to bee, that is the question!", 
"Just bee yourself. You’ll think of something to come up with.", 
"A bee’s favorite sport is rug-bee.", 
"What is the last thing to go through a bee’s mind when it hits a windshield? Its stinger.", 
"Who’s a bee’s favorite painter? Pablo Bee-casso!", 
"What happens when a bee burps near the queen? It gets a royal pardon.", 
"The bees favorite guns?  BeeBee guns, I suppose.", 
"On the first day of class, bee students are given a sylla-buzz.", 
"What is a swarm of really small queen bees called? The royal wee.", 
"These bee puns are just winging it.", 
"What’s black and yellow and flies at 30,0", 
"The one item the bees never forget to bring to the beach are their frisbees.", 
"Bee puns aren’t that great. I don’t get what all the buzz is about.", 
"The bee bank robber would always tell the bank tellers “Your honey or your life.”", 
"A combination of a bumble bee and a race dog will give you a Greyhound Buzz.", 
"Why did the bee want to use the phone? To say hi to their honey.", 
"Bees love the summer because it is very swarm outside.", 
"The only thing more dangerous that being with a fool is fooling with a bee.", 
"Wasp are you talking about?", 
"A Queen Bee will only eat hum-burgers at Burger King.", 
"The baby bee was affectionately known as a little hum-bug.", 
"The talkative bee earned a reputation as being blab-bee.", 
"The little bees are always humming because they forgot the words to the song.", 
"When a bee writes a sonnet, they’re waxing poetic.", 
"The little bees favorite type of candy is of course bumble gum.", 
"Female bees have a particular affection for ru-bee rings.", 
"A bee’s favorite haircut is a buzz cut!", 
"The killer bee was so effective because he used a large buzz-ooka.", 
"The teacher kept telling the naughty bee to bee-hive himself or she would call in his parents.", 
"A bee’s favorite novel is the Great Gats-bee.", 
"Bees that are born in the month of May are considered to be May-Bees.", 
"A wasp is nothing more than a wanna-bee.", 
"What do you call a bee that’s a sore loser? A cry bay-bee!", 
"Did you know that bears without ears are commonly referred to as B’s.", 
"The father bee was in such great shape for his age because he always took his vitamin-bee.", 
"Hey! Hey! You! You! I don’t like your bee-friend.", 
"When the bee went to the blood bank, he asked if they were in need of any bee positive blood.", 
"The male bee was such a romantic, he kept pollen in love with all the female bees", 
"A bee that’s been put under a spell has been bee-witched!", 
"After the bee scored the winning basketball shot, the entire team wanted to give him a hive-five.", 
"Never play hide and seek with the swarm because they will always wind up bee-hind you.", 
"Roses are red, violets are blue, killer bees are all over you.", 
"Mind your own beeswax.", 
"Naughty bee children really need to beehive.", 
"I can’t help pollen in love with you.", 
"Hive never felt this way bee-fore.", 
"The bees went on strike because they wanted more honey and less working flowers.", 
"What’s a bee’s favorite flower? Bee-gonias!", 
"Say, these bee puns aren’t too shab-bee. ", 
]
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
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       		console.log(args);

        args = args.splice(1);
		console.log(args);
        switch(cmd) {
            // !joke
            case 'joke':
				console.log("joke request")
				var number = Math.floor((Math.random() * 100) + 1)% 85;
				console.log(number);
				var output = jokes[number];
				console.log(output);
                bot.sendMessage({
                    to: channelID,
                    message: "" + output
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
