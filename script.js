// Arka plan parçacıkları
function createParticles() {
    const body = document.querySelector('body');
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 5 + 2 + 'px';
        p.style.width = size; p.style.height = size;
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDuration = Math.random() * 5 + 5 + 's';
        body.appendChild(p);
    }
}
createParticles();

// YouTube IFrame API Yükleme
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var isPlaying = true;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-audio', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Burayı şarkı bilgileriyle güncelle
    document.getElementById('sarki-adi').innerText = "Another Love";
    document.getElementById('sanatci').innerText = "Tom Odell";
}

function togglePlay() {
    const playIcon = document.getElementById('play-icon');
    if (isPlaying) {
        player.pauseVideo();
        playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
    } else {
        player.playVideo();
        playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    }
    isPlaying = !isPlaying;
}

function baslat() {
    document.getElementById('giris-ekrani').style.display = 'none';
    document.getElementById('ana-icerik').style.display = 'block';
    if (player && player.playVideo) {
        player.playVideo();
    }
}
