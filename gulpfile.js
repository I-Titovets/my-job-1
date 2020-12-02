const {src, dest, watch} = require('gulp');
const browserSynk = require('browser-sync').create();
const sass = require('gulp-sass');


// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSynk.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./js/*.js").on('change', browserSynk.reload);
};

function serveSass() {
  return src("./sass/*.sass")
      .pipe(sass())
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;