// DEFINE: Package(s).
var gulp = require("gulp");
var typescript = require("gulp-typescript");
var tsProject = typescript.createProject("tsconfig.json");

// TASK: TypeScript
gulp.task("typescript", function() {
    return(tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist")));
});
