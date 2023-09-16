import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerContainer = document.getElementById('vimeo-player');
const player = new Player(playerContainer);

player.ready().then(() => {
    player.getDuration().then(duration => {

        player.on('timeupdate', throttle(function (event) {
            const currentTime = event.seconds;

            if (currentTime < duration) {
                localStorage.setItem('videoplayer-current-time', currentTime);
            }
        }, 1000));

        window.addEventListener('load', function () {
            const currentTime = localStorage.getItem('videoplayer-current-time');
            if (currentTime) {
                player.setCurrentTime(parseFloat(currentTime));
            }
        });
    });
});