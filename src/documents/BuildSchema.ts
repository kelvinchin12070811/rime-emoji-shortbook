import YAML from 'yaml';
import fs from 'fs';

import * as config from '../config';

const schema = {
    schema_id: config.SCHEMA_ID,
    name: config.SCHEMA_NAME,
    version: config.SCHEMA_VERSION,
    author: config.SCHEMA_AUTHORS,
    description: config.SCHEMA_DESCRIPTION,
};

export const buildSchema = () => {
    console.log('Generating schema metadata...');

    const file = YAML.stringify({ schema });
    const hwndFile = fs.openSync(`${config.OUTPUT_LOCATION}/emoji_shortbook_schema.yaml`, 'w');
    fs.writeFileSync(hwndFile, `${config.SCHEMA_HEADER.trim()}\n${file}`);
    fs.closeSync(hwndFile);
};
