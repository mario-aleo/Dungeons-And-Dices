module.exports = {
    staticFileGlobs: [
        '/index.html',
        '/manifest.json',
        '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
        '/bower_components/linqjs/linq.min.js',
        '/images/*'
    ],
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/sheets\-n\-dices\.github\.io/,
            handler: 'fastest'
        }
    ]
};
