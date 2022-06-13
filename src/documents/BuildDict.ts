/***********************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************************************************************/
import fs from 'fs';
import YAML from 'yaml';
import emojis from 'emojibase-data/en/data.json' assert { type: 'json' };

import * as config from '../config';

const schema = {};

export const buildDict = () => {
    console.log('Building...');

    const dict = fs.openSync(`${config.OUTPUT_LOCATION}/dict.txt`, 'w');
    emojis.forEach(emoji => {
        const line = `${emoji.emoji}\n`;
        fs.writeFileSync(dict, line);
    });
    fs.closeSync(dict);
};
