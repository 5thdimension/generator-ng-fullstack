import gulp from "gulp"
import imageMin from "gulp-imagemin"
import {base, tasks} from "./const"

const IMAGES = [
	base.DIST + "**/*.{png,jpg,jpeg,gif}"
]

gulp.task(tasks.CLIENT_IMAGE_DIST, (done) => {
  return gulp.src(IMAGES, {base: base.DIST})
			       .pipe(imageMin())
             .pipe(gulp.dest(base.DIST))
             .on('end', () => done())
})
