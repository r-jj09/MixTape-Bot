const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const ytdl = require('ytdl-core');

let VOICE_CHANNEL = '955514326700142623'; // Set this to the voice channel of your choice.
let queueKey = `${context.params.event.guild_id}:musicQueue`;
let currentQueue = await lib.utils.kv['@0.1.16'].get({
  key: queueKey,
  defaultValue: []
});

let nextTrack;

if (currentQueue.length) {
  nextTrack = currentQueue[0];

  await lib.utils.kv['@0.1.16'].set({
    key: queueKey,
    value: currentQueue.slice(1)
  });
}

if (nextTrack) {
  try {
    let downloadInfo = await ytdl.getInfo(nextTrack);
    await lib.discord.voice['@0.0.1'].tracks.play({
      channel_id: `${VOICE_CHANNEL}`,
      guild_id: `${context.params.event.guild_id}`,
      download_info: downloadInfo
    });
    return lib.discord.channels['@0.3.0'].messages.create({
      channel_id: `959210408948940851`,
      content: `Most játszom: **${downloadInfo.videoDetails.title}** 🎶`,
    });
  } catch(e) {
    console.log(e);
  }
}