const ytdl = require('ytdl-core');

module.exports = {
	name: 'hallo',
	description: 'Begrüßung',
	execute(message) {
		/*if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=X8ti37Bl4qE', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            //dispatcher.on('end', () => voiceChannel.leave());
        });*/

		message.channel.send("Hallo, Marcel B'avis, 1&1&1").then(sentMessage => {
		sentMessage.react('📶').then(() => 
		sentMessage.react('☎')).then(() =>
		sentMessage.react('🌐'));
		});
	},
};