var gulp = require('gulp');

var PATHS = {
    src: 'src/**/*.ts'
};

gulp.task('clean', function (done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('ts2js', function () {
    var typescript = require('gulp-typescript');
    var sourcemaps = require('gulp-sourcemaps');
    var tscConfig = require('./tsconfig.json');

    var tsResult = gulp
        .src(PATHS.src)
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions));

    return tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest('dist'));
});

gulp.task('play', ['ts2js'], function () {
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9009, app;

    gulp.watch(PATHS.src, ['ts2js']);

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('tslint', function(){
    var tslint = require('gulp-tslint');
    var fs = require('fs');

    const reportOptions = {
        emitError: false,
        reportLimit: 20,
        summarizeFailureOutput: false
    };

    var report = gulp.src(PATHS.src)
                    .pipe(tslint())
                    .pipe(tslint.report('json', reportOptions))
                    .pipe(gulp.dest('log'));
                    //.pipe(fs.writeFileSync('log.json'));
});

gulp.task('tslint-output', function(){
    var tslint = require('gulp-tslint');
    var map = require('map-stream');
    var concat = require('gulp-concat');

    return gulp.src(PATHS.src)
        .pipe(tslint())
        .pipe(map(function(file, done) {
            // Add the tslint errors in prose format
            if (file.tslint.output) {
                file.contents = new Buffer(
                    JSON.parse(file.tslint.output)
                        .map(tslint.proseErrorFormat).join('\n')
                );
            } else {
                file.contents = new Buffer("");
            }

            done(null, file);
        }))
        // Concat and save the errors
        .pipe(concat('tslint-report.txt'))
        .pipe(gulp.dest('./'));
});