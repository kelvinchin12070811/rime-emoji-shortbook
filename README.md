# rime-shorthand-emoji

rime-shorthand-emoji is a input method schema for [RIME Input Method](https://rime.im). It provides an input schema
for discord-like emoji input.

## Installation

Download the latest release from [GitHub Releases](https://is.gd/wTdPjr) and extract the archive. Then add the files to
the RIME User Data Directory and deploy RIME Refer the [RIME Help Manual](https://is.gd/L9p8UP) for details.

## Build

rime-shorthand-emoji needs to be builded before using. This is because it use an automated generation tool to generate
the list of emojis instead of populating the list manually. To build the schema, nodejs and yarn is required.

### i. Preparing the environment

Ensure that you have nodejs and yarn installed. You may skip this section if nodejs and yarn already installed. Or you
can get a copy of nodejs from [nodejs.org](https://nodejs.org/en/download/).

Next is enable [corepack](https://nodejs.org/api/corepack.html) which is shipped by nodejs since v14. Corepack is a
tool made by nodejs community to manage package managers including yarn.

```terminal
corepack enable
```

If you are using a version of nodejs older than v14, you need to install the corepack manually with the following
command.

```terminal
npm install -g corepack
```

### ii. Building the schema

Then we can install dependencies and build the project as bellow, the built schema will be placed under the `dist`
folder

```terminal
yarn install
yarn build
```

## License

[Mozilla Public License Version 2.0](https://www.mozilla.org/en-US/MPL/2.0/)
