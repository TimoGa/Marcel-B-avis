module.exports = {
	name: 'radio',
	description: 'Plays a hq webradio!',
	execute(message) {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('please join a voice channel first!');
        }

        voiceChannel.join().then(connection => {
            const dispatcher = connection.playStream('http://tophits.radiomonster.fm/320.mp3');  //http://bluford.torontocast.com:8482/live.opus
        });
    },
};