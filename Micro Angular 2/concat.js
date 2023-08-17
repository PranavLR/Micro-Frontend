const concat = require("concat");

(async function build() {
    const files = [
        "./dist/micro-angular2/main.js",
        "./dist/micro-angular2/polyfills.js",
        "./dist/micro-angular2/runtime.js",
    ];

    await concat(files, "./dist/micro-angular2/micro-angular2.js");
})();