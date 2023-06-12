const {src,dest,watch,series} = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function buildStyles(){
    return src('./custom-lib/**/*.scss')
           .pipe(sass().on('error',sass.logError))
           .pipe(dest('./css'))
}

function watchStyles(){
    watch(['./custom-lib/**/*.scss'],buildStyles)
};

exports.default = series(buildStyles,watchStyles)