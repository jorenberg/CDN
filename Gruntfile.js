#!/usr/bin/env node


/*!
 * CDN® [v1.0.0]
 * ______________________________________________________________
 * Grunt, http://gruntjs.com/
 * The JavaScript Task Runner.
 * ______________________________________________________________
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/]
 * @copyright : Sequømics Corporation [http://sequomics.com/]
 * ______________________________________________________________
 * @date      : 01-Dec-2015
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * ______________________________________________________________
 *
 * --/The Heart of Build System/-- of "CDN®".
 * ______________________________________________________________
 */

// # Usage: $ node -v
// # Usage: $ npm -v

// =========================
// Grunt Module(s) Required.
// =========================
// main module.
// @require   : grunt
// @require   : grunt-cli

// BUILD MODULE
// ============
// @require   : assemble

// Note: To import project metadata into the Grunt config.
// @require   : bower.json
// @require   : package.json
// @require   : _config.yml

// ====================================
// Grunt Task Registration through API.
// ====================================
// @method    : grunt.loadNpmTasks(pluginName)
// @method    : grunt.registerTask(task-name)

// Grunt Task(s):------------------------------------------------------
// 1. Task for "Linter" - HTML, SCSS, CSS, CoffeeScript and JavaScript,
// 2. Task for "Minifier" - HTML and CSS,
// 3. Task for "clean files and folders",
// 4. Task for "Assemble": Default, and
// 5. Task for "Travis CI", using ".travis.yml" from root.
// 6. Task for "Releases", using "grunt-bump" from master branch.

/* Invoking strict mode. */
"use strict";

/* ______________________________________________
 * Settings for Build System.                   |
 * _____________________________________________|
 */
var SERVER_PORT     = 9001;
var LIVERELOAD_PORT = 35729;
