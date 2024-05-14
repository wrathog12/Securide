document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('videoElement');

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error('Error accessing camera:', error);
        });
});
