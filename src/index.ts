/***********************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************************************************************/
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
