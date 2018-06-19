module.exports = {
	name: 'hallo',
	description: 'Begrüßung',
	execute(message) {
			message.channel.send("Hallo, Marcel B'avis, 1&1&1").then(sentMessage => {
			sentMessage.react('📶').then(() => 
			sentMessage.react('☎')).then(() =>
			sentMessage.react('🌐'));
		});
	},
};