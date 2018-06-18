const ytdl = require('ytdl-core');

module.exports = {
	name: 'spongebob',
	description: 'Play 10h of Spongebob!',
	execute(message) {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=51skM6WA-dg', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            //dispatcher.on('end', () => voiceChannel.leave());
        });
    },
};