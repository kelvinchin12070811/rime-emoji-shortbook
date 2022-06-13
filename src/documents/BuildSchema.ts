/***********************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************************************************************/
import YAML from 'yaml';
import fs from 'fs';

import * as config from '../config';

const schema = {
    schema: {
        schema_id: config.SCHEMA_ID,
        name: config.SCHEMA_NAME,
        version: config.SCHEMA_VERSION,
        author: config.SCHEMA_AUTHORS,
        description: config.SCHEMA_DESCRIPTION,
    },
    engine: {
        processors: [
            'key_binder',
            'speller',
            'punctuator',
            'selector',
            'navigator',
            'express_editor',
        ],
        segmentors: ['abc_segmentor', 'punct_segmentor', 'fallback_segmentor'],
        translators: ['echo_translator', 'table_translator'],
    },
    translator: {
        dictionary: config.SCHEMA_ID,
    },
    key_binder: {
        import_preset: 'default',
    },
};

export const buildSchema = () => {
    console.log('Generating schema metadata...');

    const file = YAML.stringify(schema);
    const hwndFile = fs.openSync(`${config.OUTPUT_LOCATION}/${config.SCHEMA_ID}.schema.yaml`, 'w');
    fs.writeFileSync(hwndFile, `${config.SCHEMA_HEADER}${file}`);
    fs.closeSync(hwndFile);
};
