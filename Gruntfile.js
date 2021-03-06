var pkgjson = require('./package.json');
 
var config = {
    pkg: pkgjson,
    html: 'www/sam',
    js: 'src/main/js',
    resources: 'src/main/resources',
    dist: 'dist',
    lib: 'bower_components'
}
 
module.exports = function (grunt) {
 
    // Configuration
    grunt.initConfig({
        config: config,
        pkg: config.pkg,
       // bower: grunt.file.readJSON('./.bowerrc'),
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        src: '<%= config.html %>/*',
                        flatten: true,
                        dest: '<%= config.dist %>'
                    },
                    //bootstrap
                    {
                        expand: true,
                        src: '<%= config.lib %>/bootstrap/dist/css/*min.css',
                        flatten: true,
                        dest: '<%= config.dist %>/css'
                    },
                    {
                        expand: true,
                        src: '<%= config.lib %>/bootstrap/dist/js/bootstrap.min.js',
                        flatten: true,
                        dest: '<%= config.dist %>/js/lib'
                    },
                    {
                        expand: true,
                        cwd: '<%= config.lib %>/bootstrap/fonts',
                        src: '*',
                        dest: '<%= config.dist %>/fonts'
                    },
                    //jQuery 
                    {
                        expand: true,
                        src: '<%= config.lib %>/jquery/dist/jquery.min.js',
                        flatten: true,
                        dest: '<%= config.dist %>/js/lib'
                    },
                    //holderjs
                    {
                        expand: true,
                        src: '<%= config.lib %>/holderjs/holder.js',
                        flatten: true,
                        dest: '<%= config.dist %>'
                    },
                    //mustache.js
                    {
                        expand: true,
                        src: '<%= config.lib %>/mustache.js/mustache.js',
                        flatten: true,
                        dest: '<%= config.dist %>/js/lib'
                    },
                    //resources
                    {
                        expand: true,
                        cwd: '<%= config.resources %>/images',
                        src: '**/*',
                        flatten: false,
                        dest: '<%= config.dist %>/images'
                    },
                    {
                        expand: true,
                        cwd: '<%= config.resources %>/json',
                        src: '**/*',
                        flatten: false,
                        dest: '<%= config.dist %>/json'
                    },
                    //js
                    {
                        expand: true,
                        cwd: '<%= config.js %>',
                        src: '**/*',
                        flatten: false,
                        dest: '<%= config.dist %>/js'
                    }
                    ]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> lib - v<%= pkg.version %> -' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                files: {
                    '<%= config.dist %>/js/sam.min.js': [
                    '<%= config.js %>/sam.js'
                    ]
                }
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
 
    grunt.registerTask('default', [
        'copy',
        'uglify'
    ]);
};