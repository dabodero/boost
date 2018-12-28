/**
 * Packages
 */
const Discord = require('discord.js')
const bot = new Discord.Client()
const schedule = require('node-schedule')
port = process.env.PORT || 80


/**
 * Quand le bot est prêt
 */
bot.on('ready', () => {
  console.log('BOT connecté')
})

/**
  Format à suivre:

  *    *    *    *    *    *
  ┬    ┬    ┬    ┬    ┬    ┬
  │    │    │    │    │    │
  │    │    │    │    │    └ Jour de la semaine (0 - 7) (0 ou 7 = Dimanche)
  │    │    │    │    └───── Mois (1 - 12)
  │    │    │    └────────── Jour du mois (1 - 31)
  │    │    └─────────────── Heure (0 - 23)
  │    └──────────────────── Minutes (0 - 59)
  └───────────────────────── Secondes (0 - 59, -Optionnel)
*/

/**
 * 1 22 1 * * :
 * - 1  -> A la minute 1
 * - 22 -> A l'heure 22
 * - 1  -> Le premier jour du mois
 * - *  -> Tous les mois
 * - *  -> Tous les jours de la semaine (Mais on s'en fout puisque tu dis que c'est le premier jour du mois)
*/



/////////////////////////////////////// 29 ///////////////////////////////

schedule.scheduleJob('1 55 13 28 11 4', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 19 28 11 4', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})

/////////////////////////////////////// 30 ///////////////////////////////
schedule.scheduleJob('1 55 22 29 11 4', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 7 30 11 5', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 10 30 11 5', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 16 30 11 5', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})

/////////////////////////////////////// 1 ///////////////////////////////
schedule.scheduleJob('1 55 23 30 11 5', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 4 1 12 6', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 11 1 12 6', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 17 1 12 6', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})

/////////////////////////////////////// 2 ///////////////////////////////
schedule.scheduleJob('1 55 0 2 12 7', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 5 2 12 7', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 12 2 12 7', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 18 2 12 7', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})

/////////////////////////////////////// 3 ///////////////////////////////
schedule.scheduleJob('1 55 1 3 12 1', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 5 3 12 1', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 11 3 12 1', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 19 3 12 1', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})

/////////////////////////////////////// 4 ///////////////////////////////
/////////////////////////////////////// 3 ///////////////////////////////
schedule.scheduleJob('1 55 22 3 12 1', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 6 4 12 2', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 12 4 12 2', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 16 4 12 2', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})

/////////////////////////////////////// 5 ///////////////////////////////
/////////////////////////////////////// 3 ///////////////////////////////
schedule.scheduleJob('1 55 23 6 12 2', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 7 5 12 3', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 13 5 12 3', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 17 5 12 3', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})

/////////////////////////////////////// 6 ///////////////////////////////
/////////////////////////////////////// 3 ///////////////////////////////
schedule.scheduleJob('1 55 1 6 12 4', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 4 6 12 4', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 11 6 12 4', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})
schedule.scheduleJob('1 55 18 6 12 4', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
})

/////////////////////////////////////// 7 ///////////////////////////////
schedule.scheduleJob('1 55 1 7 12 5', function(){
  bot.channels.get('480747263090753537').send('<@254666194345263104>,<@244575459646504960>,<@260521797726765056>,<@433205144969281536>,<@179312050764382208>,<@121992023740907520>,<@418137100098076675>,<@451068878920089623>,<@267004225165328394>,<@277017679905423361>,\n<@388050203707572226>,<@310489541716738058>,<@484258416584556575>,<@288836002947006464>,<@315929942900867104>,<@107934171917209600>,<@303235365886623745>,<@423909931226497035>,<@381266557940006914>,<@329710413468139522>,\n<@207755671402184704>,<@280514098599428097>,<@401802011265335301>,<@292424935396081665>,<@165573009602510849>,<@396034843114209290>,<@221374507301076992>,<@450345222329729027>,<@151790569050341376>,<@266297113850150913>,\n <@251857735052820484>,<@149425614657421312>');


  bot.channels.get("480747263090753537").send(
    {
    embed: {
      color: 3447003,
      title: 'BOOST',
      description: 'Zeubi, dépêche-toi, il y a le boost dans 5 min'
      
    }
  })
}) 




bot.login(process.env.TOKEN)
