module.exports = function(grunt) {
  grunt.initConfig({

    clean: ["dist"],

    copy: {
      dist: {
        expand: true,
        cwd: 'src/',
        src: ['**', '!styles/**'],
        dest: 'dist/',
        filter: 'isFile',
      }
    },

    less: {
      src: {
        files: {
          "src/styles/main.css": "src/styles/main.less"
        }
      },
      dist: {
        files: {
          "dist/styles/main.css": "src/styles/main.less"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', [
    'clean',
    'less:dist',
    'copy'
  ]);

  grunt.registerTask('default', ['build']);
};