const ytdl = require('ytdl-core');

module.exports = {
	name: 'music',
	description: 'plays a mix of music',
	execute(message) {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=DV5prTkZMtc', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            //dispatcher.on('end', () => voiceChannel.leave());
        });
    },
};