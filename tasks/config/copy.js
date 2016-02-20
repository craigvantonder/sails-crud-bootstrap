/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-copy
 */

module.exports = function(grunt) {
  grunt.file.mkdir('./assets/fonts', 0755);
};

module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './node_modules',
        src: [
        'jquery/dist/jquery.js',
        'bootstrap/dist/js/bootstrap.js'
        ],
        flatten: true,
        dest: 'assets/js/dependencies'
      },{
        expand: true,
        cwd: './node_modules',
        src: [
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap/dist/css/bootstrap.css.map'
        ],
        flatten: true,
        dest: 'assets/styles'
      },{
        expand: true,
        cwd: './node_modules',
        src: [
        'bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
        'bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
        'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
        'bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
        'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'
        ],
        flatten: true,
        dest: 'assets/fonts'
      },{
        expand: true,
        cwd: './assets',
        src: ['**/*.!(coffee|less)'],
        dest: '.tmp/public'
      }]
    },
    build: {
     files: [{
      expand: true,
      cwd: './node_modules',
      src: [
      'jquery/dist/jquery.js',
      'bootstrap/dist/js/bootstrap.js'
      ],
      flatten: true,
      dest: 'assets/js/dependencies'
    },{
      expand: true,
      cwd: './node_modules',
      src: [
      'bootstrap/dist/css/bootstrap.css',
      'bootstrap/dist/css/bootstrap.css.map'
      ],
      flatten: true,
      dest: 'assets/styles'
    },{
      expand: true,
      cwd: './node_modules',
      src: [
      'bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
      'bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
      'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
      'bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
      'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'
      ],
      flatten: true,
      dest: 'assets/fonts'
    },{
      expand: true,
      cwd: '.tmp/public',
      src: ['**/*'],
      dest: 'www'
    }]
  }
});

grunt.loadNpmTasks('grunt-contrib-copy');
};
