// specify build variables
const SRC = "./src/";
const DIST = "./dist/";
const PACKAGE_NAME = "starry-night";

// require modules
const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const less = require("gulp-less");
const concat = require("gulp-concat");
// const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify-es").default;
// const LessAutoPrefix = require("less-plugin-autoprefix");
// const autoprefix = new LessAutoPrefix({
//     browsers: ["last 2 versions"]
// });

// specify tasks
function build(cb) {
    // move html
    gulp
        .src(SRC + "index.html")
        .pipe(gulp.dest(DIST));
    // combine/compile and move less files
    gulp
        .src(SRC + "less/index.less")
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat(PACKAGE_NAME + ".css"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST));
    // combine and move js files
    gulp // demo/sample file
        .src(SRC + "js/demo/" + PACKAGE_NAME + "-sample.js")
        .pipe(gulp.dest(DIST));
    gulp // source files
        .src(SRC + "js/*.js")
        .pipe(sourcemaps.init())
        .pipe(concat(PACKAGE_NAME + ".min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST));
    cb();
}

function watch(cb) {
    gulp
        .watch(SRC + "**/*", build);
    cb();
}

// export tasks
const launch = gulp.series(build, watch);
exports.build = build;
exports.watch = watch;
exports.launch = launch;
exports.default = launch;
