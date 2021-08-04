#!/usr/bin/env node

require('dotenv').config();
const argv = require('./config/cli');
const { tokenInformation } = require('./_services/TokenInfo/index');
const { twirlTimer } = require('./_utils/twirlTimer');
const dir = __dirname;

switch (argv.command) {
  case 'tokenInfo':
    let twirlTimerReference = twirlTimer();
    tokenInformation(dir, twirlTimerReference);
    break;
  default:
    console.error(`${cmd} is not a valid command`);
}
