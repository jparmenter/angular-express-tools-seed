'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      server: {
        options: {
          jshintrc: 'lib/.jshintrc'
        },
      src: ['lib/**/*.js', 'server.js']
      },
      app: {
        src: ['app/scripts/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
      src: ['test/**/*.js']
      }
    },
    watch: {
      files: ['<%= jshint.server.src %>', '<%= jshint.test.src %>'],
      tasks: ['jshint']
    }
  });

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['test']);
};