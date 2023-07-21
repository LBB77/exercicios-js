const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/paginas/inicio.html', () => gulp.series('appHTML')())
    watch('src/paginas/cursos.html', () => gulp.series('appHTML')())
    watch('src/paginas/sobre.html', () => gulp.series('appHTML')())
    watch('src/paginas/suporte.html', () => gulp.series('appHTML')())
    watch('src/assets/sass/*.scss', () => gulp.series('appCSS')())
    watch('src/assets/js/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}