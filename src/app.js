const DOTENV = require('dotenv').config();
require('colors');
console.log(DOTENV.parsed);


const GUITAR_SUBS = process.env.GUITAR_SUBS.split(/[ ,]+/);
const BASS_SUBS = process.env.BASS_SUBS.split(/[ ,]+/);
const VOCHALS_SUBS = process.env.VOCHALS_SUBS.split(/[ ,]+/);
const DRUMS_SUBS = process.env.DRUMS_SUBS.split(/[ ,]+/);
const THEORY_SUBS = process.env.THEORY_SUBS.split(/[ ,]+/);

console.log({
    GUITAR_SUBS,
    BASS_SUBS,
    VOCHALS_SUBS,
    DRUMS_SUBS,
    THEORY_SUBS
});

const Snoolicious = require('./lib/Snoolicious');
const snoolicious = new Snoolicious();

async function handleSubmission(task) {
    const FLAIRTEXT = task.item.link_flair_text;
    switch (FLAIRTEXT) {
        case (process.env.GUITAR_FLAIR):
            await xpost(task.item, GUITAR_SUBS);
            break;
        case (process.env.BASS_FLAIR):
            await xpost(task.item, BASS_SUBS);
            break;
        case (process.env.VOCHALS_FLAIR):
            await xpost(task.item, VOCHALS_SUBS);
            break;
        case (process.env.DRUMS_FLAIR):
            await xpost(task.item, DRUMS_SUBS);
            break;
        case (process.env.THEORY_FLAIR):
            await xpost(task.item, THEORY_SUBS);
            break;
    }

}

async function xpost(post, subs) {
    console.log('XPOSTING: ');
    console.log(post.title);
    for (const sub of subs) {
        console.log(`X-Posting to r/${sub}...`.grey);
        if (!await snoolicious.requester.getSubreddit(sub).user_is_subscriber) {
            console.log(`Was not already subscribed to r/${sub}. Subscribing now...`);
            await snoolicious.requester.getSubreddit(sub).subscribe();
        }
        await snoolicious.requester.
        _newObject('Submission', post, true).submitCrosspost({
            subredditName: sub,
            title: post.title,
            originalPost: this,
            resubmit: false,
            sendReplies: true
        });
        console.log(`X-Posting success!`.green);
    }
}

/* [Snoolicious Run Cycle] */
const INTERVAL = (process.env.INTERVAL * 1000);

const run =
    async () => {

        await snoolicious.getSubmissions();
        await snoolicious.queryTasks(null, handleSubmission);
        console.log(`Finished Quereying Tasks. Sleeping for ${INTERVAL/1000} seconds...`.rainbow);
        setTimeout(
            async () => {
                await run();
            }, (INTERVAL));
    }

(async () => {
    await run();
})();