import emojis from 'emojibase-data/en/data.json' assert { type: 'json' };
import shortcodes from 'emojibase-data/en/shortcodes/joypixels.json' assert { type: 'json' };
import fs from 'fs';

import { OUT_LOCATION } from './config';

const builder = () => {
    if (fs.existsSync(OUT_LOCATION)) {
        console.log('Removing previous build...');
        fs.rmSync(OUT_LOCATION, { recursive: true, force: true });
    }

    console.log('Building...');
    fs.mkdirSync(OUT_LOCATION);

    const dict = fs.openSync(`${OUT_LOCATION}/dict.txt`, 'w');
    emojis.forEach(emoji => {
        fs.writeFileSync(dict, `${shortcodes[emoji.hexcode]}\t${emoji.emoji}\n`);
    });
};

builder();
