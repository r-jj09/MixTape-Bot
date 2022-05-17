const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

let VOICE_CHANNEL = '955514326700142623'; // Set this to the voice channel of your choice.
let message = context.params.event.content;

let searchString = message.split(' ').slice(1).join(' ');

try {
  let youtubeLink;
  if (!searchString) {
    return lib.discord.channels['@0.3.0'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `Nem tudok keresni kulcsszó nélkül.`,
    });
  }
  if (!searchString.includes('youtube.com')) {
    let results = await ytSearch(searchString);
    if (!results?.all?.length) {
      return lib.discord.channels['@0.3.0'].messages.create({
        channel_id: `${context.params.event.channel_id}`,
        content: `Nincs találat. Kérlek próbálj egy másik zenét.`,
      });
    }
    youtubeLink = results.all[0].url;
  } else {
    youtubeLink = searchString;
  }
  let queueKey = `${context.params.event.guild_id}:musicQueue`;
  let currentQueue = await lib.utils.kv['@0.1.16'].get({
    key: queueKey,
    defaultValue: []
  });
  currentQueue.push(youtubeLink);
  await lib.utils.kv['@0.1.16'].set({
    key: queueKey,
    value: currentQueue
  });
  return lib.discord.channels['@0.3.0'].messages.create({
    channel_id: `959210408948940851`,
    content: `Vettem! 😉`,
  });
} catch (e) {
  // ... error message logic
}