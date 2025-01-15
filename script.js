// Функция для загрузки видео
function uploadVideo() {
    const videoFile = document.getElementById('video-file').files[0];
    if (videoFile) {
        const videoUrl = URL.createObjectURL(videoFile);

        // Создание элемента для видео
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-item');

        const videoElement = document.createElement('video');
        videoElement.setAttribute('controls', 'true');
        videoElement.setAttribute('src', videoUrl);

        // Добавляем видео в контейнер
        videoContainer.appendChild(videoElement);

        // Добавляем видео в поток
        document.getElementById('video-feed').appendChild(videoContainer);

        // Воспроизведение видео
        videoElement.play();
    } else {
        alert('Выберите файл для загрузки!');
    }
}

// Функция для автоматической загрузки популярных видео (для демонстрации)
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 5; i++) {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-item');

        const videoElement = document.createElement('video');
        videoElement.setAttribute('controls', 'true');
        videoElement.setAttribute('src', `assets/videos/sample-video-${i}.mp4`);

        videoContainer.appendChild(videoElement);
        document.getElementById('video-feed').appendChild(videoContainer);
    }
});
