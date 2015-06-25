'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        sass: {
            dist: {
                options: {
                    outputStyle: 'extended'
                },
                files: {
                    'css/materialize.css': 'sass/materialize.scss'
                }
            }
        },

        watch: {
            sass: {
                files: 'sass/**/*.scss',
                tasks: ['sass']
            },
            livereload: {
                files: ['*.html', 'js/**/*.js', 'css/**/*.css', 'img/**/*.{jpg,gif,svg,jpeg,png}'],
                options: {
                    livereload: true
                }
            }
        },

        connect: {
            app: {
                options: {
                    port: 9000,
                    base: '.',
                    open: true,
                    livereload: true,
                    hostname: '0.0.0.0'
                }
            }
        },

        shell: {
            deploy: {
                command: './deploy.sh'
            }
        }


    });

    grunt.registerTask('default', ['sass', 'connect:app', 'watch']);
    grunt.registerTask('publish', ['shell:deploy']);
    
};
