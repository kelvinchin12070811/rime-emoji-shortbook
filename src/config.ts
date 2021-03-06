/***********************************************************************************************************************
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 **********************************************************************************************************************/
export const OUTPUT_LOCATION = './dist';
export const SCHEMA_HEADER =
    `
# This file is generated by the emoji shortbook schema generator.
# Do not edit this file directly.
# Instead, edit the source files and run the generator again.
# Licensed under the MPL-2.0 license.
#
# Project repository:
# https://github.com/kelvinchin12070811/rime-shorthand-emoji
`.trim() + '\n';

export const SCHEMA_AUTHORS = ['Kelvin Chin <kelvinchin12070811.gitlab.io>'];
export const SCHEMA_DESCRIPTION =
    '一個簡單的表情輸入方案，以 Discord 式短語輸入為主。\n' +
    "A simple schema for emoji input, using Discord's short phrases as the main input method.";
export const SCHEMA_ID = 'emoji_shortbook';
export const SCHEMA_NAME = 'Emoji Shortbook';
export const SCHEMA_VERSION = '1.0.0';
