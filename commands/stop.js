const ytdl = require('ytdl-core');

module.exports = {
	name: 'stop',
	description: 'Stops playin that shitty music and leaves vc!',
	execute(message) {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=ny0qSMVuU6k', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    },
};