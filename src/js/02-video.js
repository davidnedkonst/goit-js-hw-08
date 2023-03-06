//Import

import Player from "@vimeo/player";
import throttle from 'lodash.throttle';
import resetStorage from "./common";

// Data

refs = {
    time1: 1000,
    key1: "videoplayer-current-time",
    iframe: document.querySelector('iframe#vimeo-player')
}

// Functions

function onTimeUpdate(event) {
    resetStorage(refs.key1, event.seconds);
};

// Main

if (!localStorage.getItem(refs.key1)) resetStorage(refs.key1, 0);

const player = new Player(refs.iframe);

player.setCurrentTime(localStorage.getItem(refs.key1));

player.on('timeupdate', throttle(onTimeUpdate, refs.time1));