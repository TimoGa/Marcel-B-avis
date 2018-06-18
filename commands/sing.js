const ytdl = require('ytdl-core');

module.exports = {
	name: 'sing',
	description: 'Sing a song!',
	execute(message) {
        client.on('message', message => {
                if (message.channel.type !== 'text') return;

                const { voiceChannel } = message.member;

                if (!voiceChannel) {
                    return message.reply('please join a voice channel first!');
                }

                voiceChannel.join().then(connection => {
			        const stream = ytdl('https://www.youtube.com/watch?v=D9LxMut3TMM', { filter: 'audioonly' });
                    const dispatcher = connection.playStream(stream);

                    dispatcher.on('end', () => voiceChannel.leave());
                });
        });
    },
};