# Bumblebee
A discord bot that talks about bees. It will listen for the following commands:

* `!joke` - Responds with a joke.
* `!fact` - Responds with a fact.
* `!poke` - Responds with a pun telling you to go away.
* `!seduce` - Tries to seduce you with a cringe-worthy pick-up line.
* `!dance` - Uploads a .gif of Futurama's Bender painted like a bee, dancing like a bee.
* `!bee` - Uploads an image of a bee meme.
* `!honey` - Uploads an graphic that helps you determine whether or not your honey is fake.

To add it to your server, use this [link](https://discordapp.com/oauth2/authorize?client_id=545813213057515522&scope=bot&permissions=0). 

If you'd like to customize and host it instead:

* Install [Node.js](https://nodejs.org/en/).
* Clone this repository.
* Run <code>npm install</code>
* Add the bot to your applications page [here](https://discordapp.com/developers/applications/).
* Store the bot's token found under the Bot tab of the above page in a file named <code>auth.json</code>, in the target directory in this format: `{"token": "your bot token"}`.
* Run <code>node bot.js</code>
* Add the bot to your server by replacing YOUR_CLIENT_ID with the Client ID from the above page and open the url: `https://discordapp.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=0`
