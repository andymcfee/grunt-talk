module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['*.html']
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};