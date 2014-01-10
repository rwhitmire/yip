module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

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
    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: '**',
        dest: 'build/',
        flatten: true,
        filter: 'isFile',
      },
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

  grunt.registerTask('default', ['jshint', 'jasmine', 'copy', 'uglify']);
};