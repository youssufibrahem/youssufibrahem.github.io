// JavaScript to handle link clicks and change video URL and title
document.querySelectorAll('.horitzontalScrollContent').forEach(item => {
    item.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url') || this.getAttribute('video-url');
        const videoTitle = this.getAttribute('data-video-title') || this.getAttribute('video-title');
        const videoPlayer = document.getElementById('video-player');
        const videoTitleElement = document.getElementById('video-title');

        // Ensure the URL is in the correct format for embedding
        const embedUrl = videoUrl.replace("watch?v=", "embed/");

        // Update the video URL
        videoPlayer.setAttribute('src', embedUrl);

        // Update the video title
        videoTitleElement.textContent = videoTitle;
    });
});
