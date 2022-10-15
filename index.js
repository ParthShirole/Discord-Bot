import dotenv from "dotenv";
import cron from "node-cron";

dotenv.config();

import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
})

/*  00 -> Minute
    12 -> Hour
    * -> Day of month (Any is fine)
    * -> Month (Any is fine)
    7 -> Day of week (Sunday)
*/
cron.schedule('00 12 * * 7', function() {
    const CHANNEL_ID = '1030842629421805712';
    const channel = client.channels.cache.get(CHANNEL_ID);
    channel.send('Update time! Provide your weekly updates to your respective mentors');
});

client.login(process.env.DISCORD_TOKEN);
