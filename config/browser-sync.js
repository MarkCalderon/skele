var browserSync = require("browser-sync");

browserSync.init({
    watch: true,
    port: 3001,
    notify: false,
    server: "./htdocs/build/",
    browser: "chrome",
    logLevel: "silent",
    logSnippet: false,
    logFileChanges: false,
    ui: {
        port: 3002,
    }
});