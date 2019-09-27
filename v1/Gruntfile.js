module.exports = function(grunt) {
  grunt.initConfig({
    postcss: {
      options: {
        map: false,
        processors: [
          require('precss')(), // allow you to use Sass-like CSS.
          require('pixrem')(), // add fallbacks for rem units.
          require('postcss-calc')(), // reduces calc() to values (when expressions involve the same units).
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
        roundingPrecision: -1,
        shorthandCompacting: false
      },
      target: {
        files: {
          'css/css.min.css': 'css/css.css'
        }
      }
    },
    watch: {
      css: {
        files: ['src/*.css'],
        tasks: ['postcss']
      },
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks.
  grunt.registerTask('default', ['postcss']);
};
