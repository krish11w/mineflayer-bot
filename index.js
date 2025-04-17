const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Bot is running'));
app.listen(3000, () => console.log('Keep-alive server online'));

let bot = mineflayer.createBot({
  host: 'S5E4R3V2E1R.aternos.me',
  port: 17262,
  username: 'AFK_Bot',
  version: '1.21.1',
});

bot.on('spawn', () => {
  console.log('Bot spawned!');
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 1000);
  }, 30000);
});

bot.on('end', () => {
  console.log('Bot disconnected. Reconnecting...');
  setTimeout(() => {
    bot = mineflayer.createBot({
      host: 'S5E4R3V2E1R.aternos.me',
      port: 17262,
      username: 'AFK_Bot',
      version: '1.21.1',
    });
  }, 5000);
});
