import fs from 'fs';

import * as config from './config';
import { buildSchema } from './documents/BuildSchema';
import { buildDict } from './documents/BuildDict';

const main = () => {
    if (fs.existsSync(config.OUTPUT_LOCATION)) {
        console.log('Removing previous build...');
        fs.rmSync(config.OUTPUT_LOCATION, { recursive: true, force: true });
    }

    fs.mkdirSync(config.OUTPUT_LOCATION);

    buildSchema();
    buildDict();
};

main();
