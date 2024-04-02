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

/***/ "./src/FinancialControl.ts":
/*!*********************************!*\
  !*** ./src/FinancialControl.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FinancialControl = void 0;\nvar FinancialControl = /** @class */ (function () {\n    function FinancialControl() {\n        this.incomes = [];\n        this.expenses = [];\n    }\n    FinancialControl.prototype.addIncome = function (transaction) {\n        this.incomes.push(transaction);\n    };\n    FinancialControl.prototype.addExpense = function (transaction) {\n        this.expenses.push(transaction);\n    };\n    FinancialControl.prototype.getTotalIncome = function () {\n        return this.incomes.reduce(function (total, transaction) { return total + transaction.amount; }, 0);\n    };\n    FinancialControl.prototype.getTotalExpense = function () {\n        return this.expenses.reduce(function (total, transaction) { return total + transaction.amount; }, 0);\n    };\n    return FinancialControl;\n}());\nexports.FinancialControl = FinancialControl;\n\n\n//# sourceURL=webpack://financas-type-script/./src/FinancialControl.ts?");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// Import necessary classes\nvar FinancialControl_1 = __webpack_require__(/*! ./FinancialControl */ \"./src/FinancialControl.ts\");\nvar Transaction_1 = __webpack_require__(/*! ./Transaction */ \"./src/Transaction.ts\");\n// Create instance of FinancialControl class\nvar financialControl = new FinancialControl_1.FinancialControl();\n// Function to add transaction\nfunction addTransaction(description, amount, type) {\n    var transaction = new Transaction_1.Transaction(description, parseFloat(amount));\n    if (type === 'income') {\n        financialControl.addIncome(transaction);\n    }\n    else {\n        financialControl.addExpense(transaction);\n    }\n    updateTransactions();\n    updateBalance();\n}\n// Function to update transaction list\nfunction updateTransactions() {\n    var transactionsList = document.getElementById('transactions');\n    if (transactionsList) {\n        transactionsList.innerHTML = '';\n        financialControl.incomes.forEach(function (transaction) {\n            var listItem = document.createElement('li');\n            listItem.textContent = \"\".concat(transaction.description, \": $\").concat(transaction.amount.toFixed(2));\n            transactionsList.appendChild(listItem);\n        });\n        financialControl.expenses.forEach(function (transaction) {\n            var listItem = document.createElement('li');\n            listItem.textContent = \"\".concat(transaction.description, \": $\").concat(transaction.amount.toFixed(2));\n            transactionsList.appendChild(listItem);\n        });\n    }\n    else {\n        console.error('Failed to update transactions: Transactions list element not found.');\n    }\n}\n// Function to update balance\nfunction updateBalance() {\n    var totalIncome = financialControl.getTotalIncome();\n    var totalExpense = financialControl.getTotalExpense();\n    var balance = totalIncome - totalExpense;\n    var totalIncomeElement = document.getElementById('total-income');\n    var totalExpenseElement = document.getElementById('total-expense');\n    var balanceAmountElement = document.getElementById('balance-amount');\n    if (totalIncomeElement && totalExpenseElement && balanceAmountElement) {\n        totalIncomeElement.textContent = \"Total Income: $\".concat(totalIncome.toFixed(2));\n        totalExpenseElement.textContent = \"Total Expense: $\".concat(totalExpense.toFixed(2));\n        balanceAmountElement.textContent = \"Balance: $\".concat(balance.toFixed(2));\n    }\n    else {\n        console.error('Failed to update balance: One or more elements not found.');\n    }\n}\n// Event listener for form submission\n(_a = document.getElementById('transaction-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var description = document.getElementById('description').value;\n    var amount = document.getElementById('amount').value;\n    var type = document.getElementById('type').value;\n    addTransaction(description, amount, type);\n    document.getElementById('description').value = '';\n    document.getElementById('amount').value = '';\n});\n\n\n//# sourceURL=webpack://financas-type-script/./src/Main.ts?");

/***/ }),

/***/ "./src/Transaction.ts":
/*!****************************!*\
  !*** ./src/Transaction.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Transaction = void 0;\n// Transacao.ts\nvar Transaction = /** @class */ (function () {\n    function Transaction(description, amount) {\n        this.description = description;\n        this.amount = amount;\n    }\n    return Transaction;\n}());\nexports.Transaction = Transaction;\n\n\n//# sourceURL=webpack://financas-type-script/./src/Transaction.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Main.ts");
/******/ 	
/******/ })()
;