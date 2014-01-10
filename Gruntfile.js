module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '// yip.js - <%= pkg.description %> <%= grunt.template.today("m/d/yyyy") %> \n',
        sourceMap: 'build/yip.min.map',
        sourceMappingURL: 'yip.min.map'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }, 
    jshint: {
      all: ['src/*.js']
    },
    jasmine: {
      pivotal: {
        src: 'src/*.js',
        options: {
          specs: 'spec/*spec.js'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'jasmine', 'uglify']);

};