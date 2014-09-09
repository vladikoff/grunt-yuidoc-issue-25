yuidoc :
		{
			Controller :
			{
				name: '<%= pkg.name %>',
				description: '<%= pkg.description %>',
				version: '<%= pkg.version %>',
				url: '<%= pkg.homepage %>',
				options:
				{
					paths: 'app/Controller/',
					outdir: 'doc/Controller/'

				}
			}
		}
                });

		grunt.loadNpmTasks('grunt-contrib-yuidoc');

		grunt.registerTask('doc', ['yuidoc']);