module.exports = {
	name: 'cointoss',
	description: 'End an argument the honorable way.',
	guildOnly: true,
	execute(message, args) {
        //Timo ist gay      
        
		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};