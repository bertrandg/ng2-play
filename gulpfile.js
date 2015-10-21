var gulp = require('gulp');

var PATHS = {
    src: 'src/**/*.ts',
    typings1: 'node_modules/angular2/bundles/typings/angular2/angular2.d.ts', 
    typings2: 'node_modules/angular2/bundles/typings/angular2/router.d.ts',
    typings3: 'node_modules/angular2/bundles/typings/angular2/http.d.ts',
    typings4: 'typings/lodash/lodash.d.ts'
};

gulp.task('clean', function (done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('ts2js', function () {
    var typescript = require('gulp-typescript');
    var sourcemaps = require('gulp-sourcemaps');

    gulp.src([PATHS.src, PATHS.typings1, PATHS.typings2, PATHS.typings3, PATHS.typings4])
        .pipe(sourcemaps.init())
        .pipe(typescript({
            noImplicitAny: true,
            module: 'system',
            target: 'ES5',
            moduleResolution: 'node',
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('play', ['ts2js'], function () {
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9006, app;

    gulp.watch(PATHS.src, ['ts2js']);

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

