// Simple Video Player Implementation

class VideoPlayer {
    constructor(videoElement) {
        this.videoElement = videoElement;
        this.initializeControls();
        this.addKeyboardShortcuts();
    }

    initializeControls() {
        // Create controls (Play, Pause, Seek, Fullscreen)
        this.videoElement.controls = true;
    }

    addKeyboardShortcuts() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case ' ':
                    // Space: Play/Pause
                    if (this.videoElement.paused) {
                        this.videoElement.play();
                    } else {
                        this.videoElement.pause();
                    }
                    event.preventDefault();
                    break;
                case 'ArrowRight':
                    // Right Arrow: Seek forward 10 seconds
                    this.videoElement.currentTime += 10;
                    break;
                case 'ArrowLeft':
                    // Left Arrow: Seek backward 10 seconds
                    this.videoElement.currentTime -= 10;
                    break;
                case 'f':
                    // 'f': Toggle fullscreen
                    if (this.videoElement.requestFullscreen) {
                        this.videoElement.requestFullscreen();
                    } else if (this.videoElement.webkitRequestFullscreen) {
                        this.videoElement.webkitRequestFullscreen();
                    } else if (this.videoElement.msRequestFullscreen) {
                        this.videoElement.msRequestFullscreen();
                    }
                    break;
            }
        });
    }
}

// Usage
const videoElement = document.querySelector('video');
const player = new VideoPlayer(videoElement);