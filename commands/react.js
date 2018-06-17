module.exports = {
	name: 'react',
	description: 'Reaktion!',
	execute(message) {
        var chance = Math.floor(Math.random() * 10) + 1;

        switch(chance) {
            case 1: message.react('🤔'); break;
            case 2: message.react('🤗'); break;
            case 3: message.react('😱'); break;
            case 4: message.react('😉'); break;
            case 5: message.react('🤤'); break;
            case 6: message.react('😰'); break;
            case 7: message.react('😡'); break;
            case 8: message.react('😏'); break;
            case 9: message.react('😒'); break;
            case 10: message.react('😩'); break;
            default: break;
        }
	},
};