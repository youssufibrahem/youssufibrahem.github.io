// Podcasts handle link clicks and change video URL and title
document.querySelectorAll('.podcast-scroll-content').forEach(item => {
    item.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url') || this.getAttribute('video-url');
        const videoTitle = this.getAttribute('data-video-title') || this.getAttribute('video-title');
        const videoLanguage = this.getAttribute('lang');
        const videoPlayer = document.getElementById('podcast-video-player');
        const videoTitleElement = document.getElementById('podcast-video-title');

        // Ensure the URL is in the correct format for embedding
        const embedUrl = videoUrl.replace("watch?v=", "embed/");

        // Update the video URL
        videoPlayer.setAttribute('src', embedUrl);

        // Update the video title
        videoTitleElement.textContent = videoTitle;

        if (videoLanguage === 'ar') {
            videoTitleElement.style.fontFamily = 'Noto Kufi Arabic';
        } else {
            videoTitleElement.style.fontFamily = 'Source Sans Pro';
        }

    });
});

// Documentaries handle link clicks and change video URL and title
document.querySelectorAll('.documentaries-scroll-content').forEach(item => {
    item.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url') || this.getAttribute('video-url');
        const videoTitle = this.getAttribute('data-video-title') || this.getAttribute('video-title');
        const videoPlayer = document.getElementById('documentaries-video-player');
        const videoTitleElement = document.getElementById('documentaries-video-title');

        // Ensure the URL is in the correct format for embedding
        const embedUrl = videoUrl.replace("watch?v=", "embed/");

        // Update the video URL
        videoPlayer.setAttribute('src', embedUrl);

        // Update the video title
        videoTitleElement.textContent = videoTitle;
    });
});

// Movies handle link clicks and change video URL and title
document.querySelectorAll('.movies-scroll-content').forEach(item => {
    item.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url') || this.getAttribute('video-url');
        const videoTitle = this.getAttribute('data-video-title') || this.getAttribute('video-title');
        const videoPlayer = document.getElementById('movies-video-player');
        const videoTitleElement = document.getElementById('movies-video-title');

        // Ensure the URL is in the correct format for embedding
        const embedUrl = videoUrl.replace("watch?v=", "embed/");

        // Update the video URL
        videoPlayer.setAttribute('src', embedUrl);

        // Update the video title
        videoTitleElement.textContent = videoTitle;
    });
});

// Movies handle link clicks and change video URL and title
document.querySelectorAll('.commercials-scroll-content').forEach(item => {
    item.addEventListener('click', function() {
        const videoUrl = this.getAttribute('data-video-url') || this.getAttribute('video-url');
        const videoTitle = this.getAttribute('data-video-title') || this.getAttribute('video-title');
        const videoPlayer = document.getElementById('commercials-video-player');
        const videoTitleElement = document.getElementById('commercials-video-title');

        // Ensure the URL is in the correct format for embedding
        const embedUrl = videoUrl.replace("watch?v=", "embed/");

        // Update the video URL
        videoPlayer.setAttribute('src', embedUrl);

        // Update the video title
        videoTitleElement.textContent = videoTitle;
    });
});