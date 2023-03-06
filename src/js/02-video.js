//Import

import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

// Data

const time1 = 1000;
const keyVideoplayerCurrentTime = "videoplayer-current-time";
const iframe = document.querySelector('iframe#vimeo-player');

// Functions

function onTimeUpdate(event) {
    localStorage.setItem(keyVideoplayerCurrentTime, `${event.seconds}`);
    console.log('Current time = ' + localStorage.getItem(keyVideoplayerCurrentTime));
};

// Main

if (!localStorage.getItem(keyVideoplayerCurrentTime)) {
    localStorage.setItem(keyVideoplayerCurrentTime, '0')
}

const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem(keyVideoplayerCurrentTime));

player.on('timeupdate', throttle(onTimeUpdate, time1));