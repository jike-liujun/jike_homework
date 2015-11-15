module.exports = function(grunt) {
    grunt.initConfig({
        // 任务1：将less文件编译为css文件
        less: {
            development: {
                files: {
                    "./css/jkxy.css": "./css/jkxy.less"
                }
            },
        },
        // 任务2：实时跟踪less文件变化，自动执行任务1
        watch: {
            files: ['./css/jkxy.less'],
            tasks: ['less']
        }
    });

    // 加载包含各任务的插件。
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['less', 'watch']);

};