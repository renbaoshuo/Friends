const gulp = require('gulp');
const yaml = require('gulp-yaml');
const inlineAutoprefixer = require('gulp-inline-autoprefixer');
const htmlMinifier = require('gulp-html-minifier-terser');
const minifyInline = require('gulp-minify-inline');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const webp = require('imagemin-webp');
const del = require('delete');

const browserslist = [
    'since 2000',
    '> 1%',
];

const configs = {
    autoprefixer: {
        overrideBrowserslist: browserslist,
    },
    htmlMinifier: {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
    },
};

gulp.task('clean-dist', () => del('dist'));

gulp.task('build-json', () => gulp.src('./src/*.yml')
    .pipe(yaml())
    .pipe(gulp.dest('dist')));

gulp.task('minify-html', () => gulp.src('src/**/*.html')
    .pipe(inlineAutoprefixer(configs.autoprefixer))
    .pipe(minifyInline())
    .pipe(htmlMinifier(configs.htmlMinifier))
    .pipe(gulp.dest('dist')));

gulp.task('minify-image', () => gulp.src('src/img/**/*.{png,jpg,gif,svg}')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{
            removeViewBox: false
        }],
        use: [
            mozjpeg(),
            pngquant(),
            webp(),
        ],
    }))
    .pipe(gulp.dest('dist/img')));

gulp.task('copy-files', () => gulp.src('public/**')
    .pipe(gulp.dest('dist')));

gulp.task('build', gulp.parallel('build-json', 'minify-html', 'minify-image'));

gulp.task('default', gulp.series('clean-dist', gulp.parallel('build'), 'copy-files'));
