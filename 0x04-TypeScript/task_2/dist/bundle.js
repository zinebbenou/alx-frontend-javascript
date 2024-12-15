/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\nconsole.log('Script is running');\n// Director class implementation\nvar Director = /** @class */ (function () {\n    function Director() {\n    }\n    Director.prototype.workFromHome = function () {\n        return \"Working from home\";\n    };\n    Director.prototype.getCoffeeBreak = function () {\n        return \"Getting a coffee break\";\n    };\n    Director.prototype.workDirectorTasks = function () {\n        return \"Getting to director tasks\";\n    };\n    return Director;\n}());\n// Teacher class implementation\nvar Teacher = /** @class */ (function () {\n    function Teacher() {\n    }\n    Teacher.prototype.workFromHome = function () {\n        return \"Cannot work from home\";\n    };\n    Teacher.prototype.getCoffeeBreak = function () {\n        return \"Cannot have a break\";\n    };\n    Teacher.prototype.workTeacherTasks = function () {\n        return \"Getting to work\";\n    };\n    return Teacher;\n}());\nfunction createEmployee(salary) {\n    if (typeof salary === 'string' && salary.includes('$')) {\n        salary = parseFloat(salary.replace('$', ''));\n    }\n    if (typeof salary === 'number' && salary < 500) {\n        return new Teacher();\n    }\n    else {\n        return new Director();\n    }\n}\nvar employee1 = createEmployee(200); // Teacher\nvar employee2 = createEmployee(1000); // Director\nvar employee3 = createEmployee('$500'); // Director\n// Get the output div element\nvar outputDiv = document.getElementById('output');\n// Add results to the output div\nif (outputDiv) {\n    outputDiv.innerHTML += \"<h2>Employee 1: \".concat(employee1 instanceof Teacher ? \"Teacher\" : \"Director\", \"</h2>\");\n    outputDiv.innerHTML += \"<p>workFromHome: \".concat(employee1.workFromHome(), \"</p>\");\n    outputDiv.innerHTML += \"<p>getCoffeeBreak: \".concat(employee1.getCoffeeBreak(), \"</p>\");\n    outputDiv.innerHTML += \"<p>workTasks: \".concat(employee1 instanceof Teacher ? employee1.workTeacherTasks() : employee1.workDirectorTasks(), \"</p>\");\n    outputDiv.innerHTML += \"<h2>Employee 2: \".concat(employee2 instanceof Teacher ? \"Teacher\" : \"Director\", \"</h2>\");\n    outputDiv.innerHTML += \"<p>workFromHome: \".concat(employee2.workFromHome(), \"</p>\");\n    outputDiv.innerHTML += \"<p>getCoffeeBreak: \".concat(employee2.getCoffeeBreak(), \"</p>\");\n    outputDiv.innerHTML += \"<p>workTasks: \".concat(employee2 instanceof Teacher ? employee2.workTeacherTasks() : employee2.workDirectorTasks(), \"</p>\");\n    outputDiv.innerHTML += \"<h2>Employee 3: \".concat(employee3 instanceof Teacher ? \"Teacher\" : \"Director\", \"</h2>\");\n    outputDiv.innerHTML += \"<p>workFromHome: \".concat(employee3.workFromHome(), \"</p>\");\n    outputDiv.innerHTML += \"<p>getCoffeeBreak: \".concat(employee3.getCoffeeBreak(), \"</p>\");\n    outputDiv.innerHTML += \"<p>workTasks: \".concat(employee3 instanceof Teacher ? employee3.workTeacherTasks() : employee3.workDirectorTasks(), \"</p>\");\n}\n\n\n//# sourceURL=webpack://task_2/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;