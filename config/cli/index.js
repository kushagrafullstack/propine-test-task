const yargs = require('yargs');
const { dateToEpochTime } = require('../../_utils/dateToEpochTime');
const { isDateValid } = require('../../_utils/isDateValid');

const commandList = ['tokenInfo'];

const argv = yargs
  .usage('node $0 [cmd] <options>')
  .command('tokenInfo', 'List the information of the token', yargs => {
    return yargs
      .option({
        token: {
          alias: 't',
          description: 'Enter token name',
          type: 'string',
        },
        date: {
          alias: 'd',
          description: 'Enter date in YYYY-MM-DD format',
          type: 'string',
        },
      })
      .strictOptions()
      .check((arg, options) => {
        arg.command = arg._[0];
        if (arg.hasOwnProperty('token')) {
          if (!arg.token) {
            throw new Error('Enter token name');
          }
        }
        if (arg.hasOwnProperty('date')) {
          if (arg.date) {
            if (isDateValid(arg.date)) {
              let [startTimestamp, endTimestamp] = dateToEpochTime(arg.date);
              arg.startTimestamp = startTimestamp;
              arg.endTimestamp = endTimestamp;
            } else {
              throw new Error('Please enter valid date in YYYY-MM-DD format');
            }
          } else {
            throw new Error('Please enter date');
          }
        }
        return true;
      });
  })
  .strictCommands()
  .check((arg, options) => {
    if (!commandList.includes(arg._[0])) {
      throw new Error('Please enter valid command');
    }
    return true;
  })
  .help()
  .alias('help', 'h').argv;

module.exports = argv;
