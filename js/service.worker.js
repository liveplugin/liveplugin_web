if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('https://cdn.jsdelivr.net/gh/liveplugin/liveplugin_web@v1.0.6/flutter_service_worker.js');
    });
}