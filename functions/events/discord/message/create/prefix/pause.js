const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
await lib.discord.voice['@0.0.1'].tracks.pause({
  guild_id: `${context.params.event.guild_id}`
});
return lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Szüneteltetve ⏸`,
});