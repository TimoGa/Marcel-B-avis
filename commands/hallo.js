module.exports = {
	name: 'hallo',
	description: 'Hallo!',
	execute(message) {
		message.channel.send("Hallo, Marvel B'avis, 1&1&1").then(sentMessage => {
			sentMessage.react('☎');
			sentMessage.react('🌐');
		});
	},
};