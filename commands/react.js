module.exports = {
	name: 'react',
	description: 'Reaktion!',
	execute(message) {
        var chance = Math.floor(Math.random() * 10) + 1;

        switch(chance) {
            case 1: message.react('🤔');
            case 2: message.react('🤗');
            case 3: message.react('😱');
            case 4: message.react('😉');
            case 5: message.react('🤤');
            case 6: message.react('😰');
            case 7: message.react('😡');
            case 8: message.react('😏');
            case 9: message.react('😒');
            case 10: message.react('😩');
            default: break;
        }
	},
};