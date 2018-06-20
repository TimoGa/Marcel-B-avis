module.exports = {
	name: 'radio',
	description: 'Play jbradio\'s webradio!',
	execute(message) {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const dispatcher = connection.playStream('http://bluford.torontocast.com:8482/live.opus');
        });
    },
};