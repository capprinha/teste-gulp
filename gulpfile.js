const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')

function compilaSass(){     // usando uma funçao 
    return gulp.src("./src/styles/main.scss")
            .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('./build/styles'));
    };      // exporta numa função default -- npm run gulp


    gulp.task('styles', function(){     // usando uma tarefa do gulp
        return gulp.src('./src/styles/main.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./build/styles'))
    });     // npm run gulp styles


gulp.task('watch', function(){
    gulp.watch('./src/styles/main.scss', gulp.series('styles'));    
})      // npm run gulp watch -- monitora alterações

exports.default = compilaSass
