/***********************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************************************************************/
import fs from 'fs';
import YAML from 'yaml';
import emojis from 'emojibase-data/en/data.json' assert { type: 'json' };
import shorthands from 'emojibase-data/en/shortcodes/joypixels.json' assert { type: 'json' };

import * as config from '../config';

const schema = {
    name: config.SCHEMA_ID,
    version: config.SCHEMA_VERSION,
    sort: 'original',
    //use_preset_vocabulary: false,
};

export const buildDict = () => {
    console.log('Building...');

    const dict = fs.openSync(`${config.OUTPUT_LOCATION}/${config.SCHEMA_ID}.dict.yaml`, 'w');
    fs.writeFileSync(dict, `${config.SCHEMA_HEADER}`);
    fs.writeFileSync(dict, `---\n${YAML.stringify(schema)}...\n`);
    emojis.forEach(emoji => {
        let codes: Set<string> = new Set();

        emoji.tags?.forEach(tag => codes.add(tag));
        emoji.label?.split(' ').forEach(slice => codes.add(slice.replace(/[\:, ]/g, '')));

        const emojiShorthands = shorthands[emoji.hexcode];
        if (emojiShorthands) {
            if (typeof emojiShorthands === typeof [])
                (emojiShorthands as string[]).forEach((shorthand: string) => {
                    codes.add(shorthand.replace(/_/g, ''));
                });
            else {
                const shorthand = emojiShorthands as string;
                codes.add(shorthand.replace(/_/g, ''));
            }
        }

        codes.forEach(code => {
            fs.writeFileSync(dict, `${emoji.emoji}\t${code}\n`);
            fs.writeFileSync(dict, `${emoji.emoji}\t${emoji.hexcode}\n`);
        });
        emoji.skins?.forEach(skin => {
            const skinTone = skin.label.match(/^.+\: (.+ skin\ tone)/)?.at(1);
            const tokens = skinTone?.split(/[\ -]/);

            codes.forEach(code => {
                fs.writeFileSync(dict, `${skin.emoji}\t${code}`);
                tokens?.forEach(token => fs.writeFileSync(dict, token[0]));
                fs.writeFileSync(dict, `\n${skin.emoji}\t${skin.hexcode}\n`);
            });
        });
    });
    fs.closeSync(dict);
};
