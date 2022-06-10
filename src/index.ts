import emojis from 'emojibase-data/en/data.json' assert { type: 'json' };
import shortcodes from 'emojibase-data/en/shortcodes/joypixels.json' assert { type: 'json' };
import fs from 'fs';
import YAML from 'yaml';

import * as config from './config';

const buildSchema = () => {
    const schema = {
        schema_id: config.SCHEMA_ID,
        name: config.SCHEMA_NAME,
        version: config.SCHEMA_VERSION,
        author: config.SCHEMA_AUTHORS,
        description: config.SCHEMA_DESCRIPTION,
    };

    const file = YAML.stringify({ schema });
    const hwndFile = fs.openSync(`${config.OUTPUT_LOCATION}/emoji_shortbook_schema.yaml`, 'w');
    fs.writeFileSync(hwndFile, `${config.SCHEMA_HEADER.trim()}\n${file}`);
    fs.closeSync(hwndFile);
};

const builder = () => {
    if (fs.existsSync(config.OUTPUT_LOCATION)) {
        console.log('Removing previous build...');
        fs.rmSync(config.OUTPUT_LOCATION, { recursive: true, force: true });
    }

    fs.mkdirSync(config.OUTPUT_LOCATION);

    console.log('Generating schema metadata...');
    buildSchema();

    console.log('Building...');
    const dict = fs.openSync(`${config.OUTPUT_LOCATION}/dict.txt`, 'w');
    emojis.forEach(emoji => {
        fs.writeFileSync(dict, `${shortcodes[emoji.hexcode]}\t${emoji.emoji}\n`);
    });
    fs.closeSync(dict);
};

builder();
