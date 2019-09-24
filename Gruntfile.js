module.exports = function(grunt) {
  grunt.initConfig({
    postcss: {
      options: {
        map: false,
        processors: [
          require('precss')(), // allow you to use Sass-like CSS.
          // require('pixrem')(), // add fallbacks for rem units.
          // require('postcss-calc')(), // reduces calc() to values (when expressions involve the same units).
          require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
        ]
      },
      dist: {
        files: {
          'css/css.css': 'src/style.css'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          // 'css/css.min.css': ['css/css.css', 'css/scss.css']
          // 'css/css.min.css': 'css/css.css'

          'css/css': 'css/css.css'
          // this way when someone downloads this site it won't work correctly
        }
      }
    },
    watch: {
      css: {
        files: ['src/*.css'],
        tasks: ['postcss']
      },
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'index.html': 'index-source.html'        // 'destination': 'source'
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks.
  grunt.registerTask('default', ['htmlmin'], ['postcss'], ['cssmin']);
};
