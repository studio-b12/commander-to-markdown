const program = require('commander');

program
  .arguments('<address>', 'Address for delivery')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Pick the type of cheese', 'marble')
  .parse(process.argv);
