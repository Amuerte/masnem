var pkgjson = require('./package.json');
 
var config = {
    pkg: pkgjson,
    app: 'src/main/js',
    dist: 'dist',
    bdir: 'bower_components'
}
 
module.exports = function (grunt) {
 
    // Configuration
    grunt.initConfig({
        config: config,
        pkg: config.pkg,
       // bower: grunt.file.readJSON('./.bowerrc'),
        copy: {
            dist: {
                files: [{
                        expand: true,
                        cwd: '<%= config.app %>/_lib/font-awesome',
                        src: 'css/font-awesome.min.css',
                        dest: '<%= config.dist %>'
                    },
                    {
                        expand: true,
                        cwd: '<%= config.app %>/_lib/font-awesome',
                        src: 'fonts/*',
                        dest: '<%= config.dist %>'
                    }]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> lib - v<%= pkg.version %> -' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                files: {
                    '<%= config.dist %>/js/jquery.min.js': [
                    '<%= bdir %>/jquery/src/jquery.js'
                    ]
                }
            }
        }
    });
 
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
 
    grunt.registerTask('default', [
        //'copy',
        'uglify'
    ]);
};