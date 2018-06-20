module.exports = {
	name: 'radiolink',
	description: 'Play any webradio!',
	execute(message, args) {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const dispatcher = connection.playStream(args[0]);
        });
    },
};