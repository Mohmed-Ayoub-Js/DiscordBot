const { Client, GatewayIntentBits, Partials, EmbedBuilder } = require('discord.js');
const token ='MTE2MzE1MTgzNTI1NTgxNjM1NA.GMSTjF.2_3cTKWW4DF5t1LV-1mZI2BKGZ9WRogVno3ZFE';
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
});
const icon = "https://images-ext-1.discordapp.net/external/oF5ZWTXfHxg-nPUXi08dFgA0sDB9aCNCZNpIDJepaRo/https/cdn.discordapp.com/icons/1010254947499118633/a_5ce69968ee3c05dd4445168b2f24a365.gif";
client.on('ready', () => {
    console.log("The Bot Is Ready !!!!")
});

client.on('messageCreate', (message) => {
    if (message.content == '!تقديم') {
        const embed = new EmbedBuilder()
        .setTitle('شروط تقديم الإدارة')
        .setColor('Red')
        .addFields({ name: 'اول شرط', value: 'يجب ان لا تكون اداري بأي سيرفر اخر غير سيرفرنا' },
        { name: 'ثاني شرط', value: 'يجب ان تكون شخص محترم ومهذب في المعاملة' },
        { name: 'ثالث شرط', value: 'يجب ان تكون لديك خبرة مسبقة بالادارة' },
        { name: 'رابع شرط', value: 'يجب ان تكون قد مسئولية ان تكون من الادارة' },
        { name: 'الشرط الاخير', value: 'ما تقدم وانت حاطط اسم غريب في حسابك ممنوع' }
    )
    .setAuthor({ name: 'Magwiz Server', iconURL: `${icon}`, url: 'https://discord.gg/bKkbmSTV' })
        message.reply({ embeds: [embed] });
    }
});

client.login(token);
