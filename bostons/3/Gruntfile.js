module.exports = function(grunt) {
  grunt.initConfig({

    less: {
      src: {
        files: {
          "src/styles/main.css": "src/styles/main.less"
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-less');
};