
    module.exports = {
        name: 'faggot',
        description: 'Faggot!',
        execute(message) {
            if(message.author.username != "Timo"){
                message.reply("ist ein Faggot!");
            }
            if(message.author.username == "Timo"){
                message.reply("ist ein fähiger Programmierer!");
            }
        },
    };