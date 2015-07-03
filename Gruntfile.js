'use strict';

module.exports = function (grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var yeomanConfig = {
		root: '',
		app: 'app',
		dist: 'dist'
	};

	grunt.initConfig({
		config: yeomanConfig,
		compass: {
			target: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'assets/css',
					imagesDir: 'assets/images',
					importPath: [
						'<%= config.app %>/views',
						'<%= config.app %>/borrowers',
						'<%= config.app %>/borrowers/borrower',
						'<%= config.app %>/borrowers/borrowers-list',
						'<%= config.app %>/borrowers/borrowers-pipeline',
						'<%= config.app %>/shared/header'
					],
					relativeAssets: true,
					noLineComments : false,
					outputStyle : "compact"
				}
			}
		},

		watch: {
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					// '<%= config.app %>/{,*/}*.html',
					// '.tmp/styles/{,*/}*.css',
					// '<%= config.app %>/images/{,*/}*'
				]
			}
		},

		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
					base: [
					'.tmp',
					'.'
					]
				}
			}
		}
});

	grunt.registerTask('build', 'Indifi webapp build task', function(){
		grunt.task.run([
			'compass'
		]);
	});
	grunt.registerTask('default', ['build']);

	grunt.registerTask('serve', function (target) {
		grunt.task.run([
			'connect:livereload',
			'watch'
		]);
	});

};

