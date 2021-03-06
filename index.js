const moment = require('moment');
exports.handler = async (event) => {
  const min = 1;
  const max = 6;
  
  const randomNumber = Math.floor(
    Math.random() * (max - min + 1)
  ) + min;
  const now = moment().format();
  
  const message = 'The dice throw resulted in ' + 
    randomNumber + ' and was issued at ' + now;
  
  return message;
};
