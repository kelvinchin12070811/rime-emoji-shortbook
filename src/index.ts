import emojis from 'emojibase-data/en/data.json' assert { type: 'json' };

emojis.forEach(emoji => {
    console.log({ label: emoji.label, emoji: emoji.emoji });
});
