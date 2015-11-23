module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'bundle/', src:['bundle.js','bundle.css'], dest: 'dist/assets/'},
                    {expand: true, cwd: 'src/', src:['index.html'], dest: 'dist/'},
                    {expand: true, cwd: 'src/assets/libs/', src:['**'], dest: 'dist/assets/libs'},
                    {expand: true, cwd: 'src/assets/img/', src:['**'], dest: 'dist/assets/img'}
                ]
            }
        }
    });

    // Load the plugin that provides the "copy" task
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('compile', ['copy']);

};