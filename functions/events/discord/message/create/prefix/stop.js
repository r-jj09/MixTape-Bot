const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

let message = context.params.event.content;

await lib.discord.voice['@0.0.1'].channels.disconnect({
  guild_id: `${context.params.event.guild_id}`
});
await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Mára ennyi! Találkozunk legközelebb! 😘`,
});
let result = await lib.discord.users['@0.1.1'].me.status.update({
  activity_name: ``,
  status: 'INVISIBLE'
});