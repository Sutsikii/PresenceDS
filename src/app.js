const clientId ='1022418327697637407';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport : 'ipc'});

DiscordRPC.register(clientId);

async function setActivity()
{
    if(!RPC) return;
    RPC.setActivity({
        details: `Joue à Visual Studio Code`,
        // state: `En pleine concentration`,
        startTimestamp: Date.now(),
        // largeImageKey: 'discord-icon',
        largeImageTexte: `test1`,
        // smallImageKey: `discord-icon-2`,
        smallImageText: `test2`,
        instance: false,
        buttons: [
            {
                label: `Sutcorpindustry !`,
                url: `https://sutcorp-industry.com`
            },
            {
                label: `Potecast`,
                url: `https://www.youtube.com/channel/UCMuTuGltSr1AkwVB3OIjtCw`
            }
        ]
    });
}

RPC.on('ready', async () => 
{
   setActivity();
   
   setInterval(() =>
   {
    setActivity();
   }, 15 * 1000);
});

RPC.login({ clientId}).catch(err => console.error(err));