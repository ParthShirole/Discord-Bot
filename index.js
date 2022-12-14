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
    const channel = client.channels.cache.get(process.env.CHANNEL_ID_ANNOUNCEMENTS);
    channel.send(`Update time <@&${process.env.ROLE_ID_MENTEES}>! Provide your weekly updates to your respective mentors`);
});

client.login(process.env.DISCORD_TOKEN);
