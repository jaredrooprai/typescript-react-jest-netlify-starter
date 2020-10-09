const fs = require('fs');

const DEFAULT_API_URL = 'https://localhost:9000/';

fs.writeFileSync('./.env', `API_URL=${process.env.API_URL || DEFAULT_API_URL}\n`);
