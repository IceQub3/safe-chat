const fs = require('fs/promises');
const path = require('path');


(async () => {
    // open and read configuration file
    const configRaw = await fs.readFile(
        process.env['SAFECHAT_CONFIG_PATH'] || path.resolve(__dirname, './config.json'),
        {
            encoding: 'utf-8',
            flag: 'r'
        }
    );

    // parse config file to an object
    const config = JSON.parse(configRaw);


    console.log('Server would start now on port', config.port);
})();