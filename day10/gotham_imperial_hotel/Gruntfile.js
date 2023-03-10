module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    eslint: {
      options: {
        ignore: "public/js/jquery.min.js",
        ignorePath: "public/js/jquery.min.js"
      },
      all: [
        "public/*.js",
        "public/js/*.js",
        "server/*.js",
        "Gruntfile.js",
      ]
    },
    watch: {
      files: ["public/**/*", "server/**/*", "!server/db.json", "!**/node_modules/**"],
      tasks: ["default", "express"],
      options: {
        spawn: false
      },
      ignorePattern: [ "public/js/jquery.min.js" ]
    },
    express: {
      web: {
        options: {
          script: "server/index.js",
          port: 8443
        }
      }
    }
  });

  // Load NPM Tasks
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-express-server");

  // Register task(s).
  grunt.registerTask("default", ["eslint"]);
  grunt.registerTask("serve", ["default", "express", "watch"]);
};
