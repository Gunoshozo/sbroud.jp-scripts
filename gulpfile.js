const gulp = require('gulp')
const jsonMinify = require('gulp-json-minify')
const htmlmin = require('gulp-htmlmin')
const gzip = require('gulp-gzip')
const clean = require('gulp-clean')

const projectname = 'sbroud.jp-scripts'
const serveOut = './dist/replace-assets/games'

const clear = () =>
    gulp.src('./dist', { read: false }, { allowEmpty: true }).pipe(clean());

const uglifyJson = () =>
    gulp.src('./src/assets/games/**/!(tips|chapters\.config).json')
        .pipe(jsonMinify())
        .pipe(gulp.dest(serveOut));

const compressJsons = () =>
    gulp.src(['./src/assets/games/**/tips.json', './src/assets/games/**/chapters.config.json'])
        .pipe(jsonMinify())
        .pipe(gzip({ append: true }))
        .pipe(gulp.dest(serveOut));

const uglifyHtml = () =>
    gulp.src('./src/assets/games/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(serveOut));

const compressTxt = () =>
    gulp.src('./src/assets/games/**/*.txt')
        .pipe(gzip({ append: true }))
        .pipe(gulp.dest(serveOut));




gulp.task("minify:build", (done) => {
    return gulp.series(uglifyJson, compressJsons, uglifyHtml, compressTxt)(done)
}
)

gulp.task("minify:serve", (done) => {
    return gulp.series(clear, uglifyJson, compressJsons, uglifyHtml, compressTxt)(done)
}
)

process.on("uncaughtException", (err) => {
    console.error(err.message, err.stack, err.errors);
    process.exit(255)
})