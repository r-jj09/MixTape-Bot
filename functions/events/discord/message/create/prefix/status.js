// Using Node.js 14.x +
// use "lib" package from npm
const lib = require('lib')({token: 'tok_dev_wzfEgQuLqME6u9wySvNvK91b81nfxH5U98tTje7MrEWat6pUm647F5jU6na2qRbu'});

// make API request
let result = await lib.discord.users['@0.1.1'].me.status.update({
  activity_name: `music`,
  activity_type: 'LISTENING',
  status: 'ONLINE'
});