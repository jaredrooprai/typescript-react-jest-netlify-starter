const fs = require('fs');

const DEFAULT_API_URL = 'https://local.showpass.com:9000/';

fs.writeFileSync('./.env', `API_URL=${process.env.API_URL || DEFAULT_API_URL}\n`);
