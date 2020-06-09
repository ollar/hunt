const { src, dest, series, parallel, watch } = require('gulp');
const changed = require('gulp-changed');
const del = require('del');
const path = require('path');
const mainNpmFiles = require('gulp-main-npm-files');
const prepareLibs = require('gulp-prepare-libs');

const PUBLIC_DIR = 'public';
const HTML_SRC = 'src/index.html';
const JS_SRC = 'src/**/*.js';

function clean(cb) {
    return del([path.join(PUBLIC_DIR, '*')], cb);
}

function htmlCopy() {
    return src(HTML_SRC).pipe(dest(PUBLIC_DIR));
}

function libs() {
    return src(mainNpmFiles())
        .pipe(prepareLibs())
        .pipe(dest(path.join(PUBLIC_DIR, 'scripts', 'libs')));
}

function js() {
    return src(JS_SRC)
        .pipe(changed(path.join(PUBLIC_DIR, 'scripts')))
        .pipe(dest(path.join(PUBLIC_DIR, 'scripts')));
}

function defaultTask(cb) {
    return series(
        clean,
        parallel(htmlCopy, js, libs)
    )(function () {
        watch(HTML_SRC, htmlCopy)
        watch(JS_SRC, js)
    })
}

exports.clean = clean;
exports.htmlCopy = htmlCopy;
exports.libs = libs;
exports.js = js;
exports.default = defaultTask;
