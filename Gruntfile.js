'use strict';

module.exports = function(grunt) {

  var _coffeeSrc = 'app/**/*.coffee';
  var _coffeeTest = 'test/**/*.coffee';
  var _coffeeAll = [_coffeeSrc, _coffeeTest];

  function _toJs(fileName) {
    return fileName.replace(/\.coffee$/, '.js');
  }

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    clean: {
      files: ['dist']
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['bower_components/requirejs/require.js', '<%= concat.dist.dest %>'],
        dest: 'dist/require.js'
      },
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/require.min.js'
      },
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        runnerPort: 9999,
        singleRun: true
      }
    },
    coffee: {
      compile: {
        files: grunt.file.expandMapping([_coffeeAll], './', {
          rename: function(destBase, destPath) {
            return _toJs(destBase + destPath);
          }
        })
      }
    },
    coffeelint: {
      options: {
        'no_trailing_whitespace': {
          'level': 'error'
        },
        'max_line_length': {
          level: 'ignore'
        }
      },
      app: ['app/**/*.coffee', 'test/**/*.coffee']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      app: {
        files: '<%= jshint.app.src %>',
        tasks: ['jshint:app', 'karma']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'karma']
      },
    },
    requirejs: {
      compile: {
        options: {
          name: 'app/main',
          mainConfigFile: 'app/main.js',
          out: '<%= concat.dist.dest %>',
          optimize: 'none'
        }
      }
    },
    connect: {
      development: {
        options: {
          keepalive: true,
        }
      },
      production: {
        options: {
          keepalive: true,
          port: 8000,
          middleware: function(connect, options) {
            return [
              // rewrite requirejs to the compiled version
              function(req, res, next) {
                if (req.url === '/bower_components/requirejs/require.js') {
                  req.url = '/dist/require.min.js';
                }
                next();
              },
              connect.static(options.base),

            ];
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task.
  grunt.registerTask('default', ['coffee', 'coffeelint', 'karma', 'clean', 'requirejs', 'concat', 'uglify']);
  grunt.registerTask('preview', ['connect:development']);
  grunt.registerTask('preview-live', ['default', 'connect:production']);

};