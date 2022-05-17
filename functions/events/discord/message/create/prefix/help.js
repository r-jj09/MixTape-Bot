const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": `Üdv PletykaKommandó! 😊 A zökkenőmentes zenehallgatás érdekében itt egy rövid leírás a parancsokról és azok használatáról. Laci figyelmébe különösen ajánljuk.`,
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Használati útmutató a zene bothoz`,
      "description": "",
      "color": 0x006eff,
      "fields": [
        {
          "name": `!play `,
          "value": `A zene címének vagy linkjének megadásával a Társalgó szobába lejátsza az adott zenét`
        },
        {
          "name": `!next`,
          "value": `A zene címének vagy linkjének megadásával belistázza a következő lejátszásra váró zenét`
        },
        {
          "name": `!pause`,
          "value": `Megállitja a zene lejátszását`
        },
        {
          "name": `!resume`,
          "value": `Folytatja a zene lejátszását`
        },
        {
          "name": `!stop`,
          "value": `A bot elhagyja a Társalgót`
        }
      ]
    }
  ]
});