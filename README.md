# SUB-X

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
    - [Prerequisites](#pres)
    - [Setting Up Your Script App](#script_app)
    - [Environment Variables](#env_var)
- [Migrating to Heroku](#heroku)


## About <a name = "about"></a>

This bot will follow your subreddit and watch for specific post flairs.

It will see a post containing a specific post_flair_text and x-post to a list of related subreddits.


## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites <a name = "pres"></a>


### Setting Up Your Script App <a name = "script_app"></a>

You'll have to create a new account for your bot before you move any further.\
And you'll have to grant the account permissions on your subreddit.\
Once the account is created, log in, go to [reddit.com/prefs/apps](https://www.reddit.com/prefs/apps) to fill out the form to create a new script app.



<img src='https://i.imgur.com/yq8akJ7.png'>

## Environment Variables <a name = "env_var"></a>
Now that you've set up your bot account, granted it permissions on your subreddit, and created a script app, it's time to set up the bot on heroku!

Have open reddit.com/prefs/apps as you'll need to copy/paste the items you'll find there.


```
USER_AGENT='Node.jsv12.18.3:SUBX:v1 (by u/bwz3r)'
CLIENT_ID='***'
CLIENT_SECRET='***'
REDDIT_USER='???'
REDDIT_PASS='***'
MASTER_SUB='Bwz3rBot'
SUBREDDITS='Bwz3rBot, IntWatch, AnotherBotFarm'
DEBUG_NETWORK='false'
STARTUP_LIMIT='20'
SUBMISSION_LIMIT='50'
INTERVAL='10'
# FLAIRS

# Guitar
GUITAR_FLAIR='Guitar'
GUITAR_SUBS='Electric, Acoustic'

# Bass
BASS_FLAIR='Bass'
BASS_SUBS='Standing, Electric'

# Vochals
VOCHALS_FLAIR='Vochals'
VOCHALS_SUBS='Singing, Screaming, Rapping'

# Drums
DRUMS_FLAIR='Drums'
DRUMS_SUBS='Snare, Kick'

# Vochals
VOCHALS_FLAIR='Vochals'
VOCHALS_SUBS='Singing, Screaming, Rapping'

# Theory
THEORY_FLAIR='Theory'
THEORY_SUBS='Notes, Rhythm'

```

## Migrating to Heroku <a name = "heroku"></a>
1. Create new app in your dashboard.
<img src='https://imgur.com/P0lM0WN.png'>

2. Name it and add it to a pipeline
<img src='https://imgur.com/7yF5MJI.png'>

3. Connect it to GitHub in the `Deploy` tab.
<img src='https://imgur.com/sP2zgYV.png'>

4. Deploy from GitHub
<img src='https://imgur.com/kP3Bz3m.png'>

5. Update your Config Vars in `Settings` tab.
<img src='https://imgur.com/uuTp8MK.png'>

Update your config vars to the ones in the .envEXAMPLE file in this repo.