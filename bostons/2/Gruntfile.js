module.exports = function(grunt) {
  grunt.initConfig({

    clean: {
      dist: ["dist"]
    },

    copy: {
      dist: {
        expand: true,
        cwd: 'src/',
        src: '**',
        dest: 'dist/',
        filter: 'isFile',
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
};