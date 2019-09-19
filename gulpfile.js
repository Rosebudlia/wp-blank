const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const mainCss = './scss/main.scss';

function css() {
	return src(mainCss)
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(autoprefixer({ grid: true }))
		.pipe(dest('./resources/styles'))
}

exports.css = css;

exports.comp = parallel(css);

exports.default = function(){
	watch(['./scss/*.scss'], css);
    watch(['./scss/*/*.scss'], css);
};


