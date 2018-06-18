
    module.exports = {
        name: 'faggot',
        description: 'Faggot!',
        execute(message) {
            if(message.author.username == "Zek"){
                message.reply("ist ein fähiger Programmierer!");
                return;
            }
            if(message.author.username != "Zek"){
                message.reply("ist ein Faggot!");
            }
        },
    };