if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('https://cdn.jsdelivr.net/gh/liveplugin/liveplugin_web@v1.0.4/flutter_service_worker.js');
    });
}