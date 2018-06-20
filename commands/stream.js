module.exports = {
	name: 'stream',
	description: 'Play jbradio2\'s webradio!',
	execute(message, args) {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const dispatcher = connection.playStream('http://bluford.torontocast.com:8482/live.opus');  //webradio: https://jbradio2.ca/player.php
        });
    },
};