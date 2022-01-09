const gulp = require('gulp');
const gulpIf = require('gulp-if');
const yaml = require('gulp-yaml');
const htmlMinifier = require('gulp-html-minifier-terser');
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const webp = require('imagemin-webp');
const del = require('delete');

const { mozjpeg, svgo } = imagemin;

const configs = {
    htmlMinifier: {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
    },
    imageResize: {
        width: 128,
        crop: false,
        imageMagick: true,
    },
    mozjpeg: {},
    pngquant: {
        strip: true,
        verbose: true,
    },
    webp: {},
    svgo: {
        plugins: ['preset-default'],
    },
};

gulp.task('clean-dist', () => del('dist'));

gulp.task('build-json', () =>
    gulp.src('./src/*.yml').pipe(yaml()).pipe(gulp.dest('dist'))
);

gulp.task('minify-html', () =>
    gulp
        .src('src/**/*.html')
        .pipe(htmlMinifier(configs.htmlMinifier))
        .pipe(gulp.dest('dist'))
);

gulp.task('minify-image', () =>
    gulp
        .src('src/img/**/*.{png,jpg,gif,svg,webp}')
        .pipe(
            gulpIf(
                (file) => !/\.svg$/i.test(file.path),
                imageResize(configs.imageResize)
            )
        )
        .pipe(
            imagemin(
                [
                    mozjpeg(configs.mozjpeg),
                    pngquant(configs.pngquant),
                    webp(configs.webp),
                    svgo(configs.svgo),
                ],
                {
                    verbose: true,
                }
            )
        )
        .pipe(gulp.dest('dist/img'))
);

gulp.task('copy-files', () => gulp.src('public/**').pipe(gulp.dest('dist')));

gulp.task('build', gulp.parallel('build-json', 'minify-html', 'minify-image'));

gulp.task(
    'default',
    gulp.series('clean-dist', gulp.parallel('build'), 'copy-files')
);
