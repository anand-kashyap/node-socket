(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatroom/chatroom.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatroom/chatroom.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n  <h1>\r\n    Chat Box\r\n    <!-- <a class=\"btn btn-primary\" (click)=\"logout()\" >Logout</a> -->\r\n  </h1>\r\n  <div>\r\n    <!-- <span class=\"new-day\">Aug 13, 2019</span> -->\r\n    <div #scrollbox [scrollTop]=\"scrollbox.scrollHeight\" class=\"d-flex flex-column scrollable\">\r\n      <ng-container *ngFor=\"let message of messages\" >\r\n        <span *ngIf=\"message.datechange\" class=\"new-day\">{{message.datechange | date: 'mediumDate' | recentDate}}</span>\r\n        <p *ngIf=\"message.joined\" class=\"text-success\">{{message.joined}}</p>\r\n        <p *ngIf=\"message.left\" class=\"text-danger\">{{message.left}}</p>\r\n        <p *ngIf=\"message.username\" [ngClass]=\"message.username === user.username ? 'current-user' : 'other-user'\">\r\n          <strong class=\"d-block\" *ngIf=\"message.username !== user.username\">{{message.username | uppercase}}</strong>\r\n          <span [innerHTML]=\"message.msg\"></span>\r\n          <span class=\"message-date\">{{message.date | date: 'shortTime'}}</span>\r\n        </p>\r\n      </ng-container>\r\n    </div>\r\n    <form [formGroup]=\"messageForm\" class=\"align-self-end\" (ngSubmit)=\"sendMessage()\">\r\n      <div class=\"form-group\">\r\n        <input formControlName=\"message\" class=\"form-control\" type=\"text\" autofocus placeholder=\"Enter message\">\r\n        <button class=\"btn btn-primary\" [disabled]=\"loading || checkValid()\">Send</button>\r\n        <button class=\"btn btn-warning\" [disabled]=\"loading\" type=\"button\" (click)=\"sendLocation()\">Share Location</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-light\">\r\n    <a class=\"navbar-brand\">Navbar</a>\r\n    <button class=\"btn btn-primary\" *ngIf=\"isLoggedIn()\" (click)=\"logout()\">Logout</button>\r\n  </nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/joinchat/joinchat.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/joinchat/joinchat.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<alert type=\"danger\" [isOpen]=\"error\" [dismissOnTimeout]=\"errTimeout\">\r\n  <span [innerHtml]=\"errMsg\"></span>\r\n</alert>\r\n<div class=\"row\">\r\n  <form class=\"col-md-6 mx-auto mt-5 joinbox\" [formGroup]=\"joinFormGroup\" (ngSubmit)=\"joinRoom()\">\r\n    <h2>Join Chat</h2>\r\n    <p>Hi <strong>{{username}}</strong>!</p>\r\n    <div class=\"form-group\">\r\n      <label for=\"room\">Room</label>\r\n      <select id=\"room\" formControlName=\"room\"\r\n        [ngClass]=\"{'is-invalid': joinFormGroup.get('room').invalid && joinFormGroup.get('room').dirty}\">\r\n        <option value=\"one\">One</option>\r\n        <option value=\"two\">Two</option>\r\n        <option value=\"three\">Three</option>\r\n      </select>\r\n      <div class=\"invalid-feedback\" *ngIf=\"joinFormGroup.get('room').invalid && joinFormGroup.get('room').dirty\">\r\n        {{getErrors('room')}}\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<alert type=\"danger\" [isOpen]=\"error\" [dismissOnTimeout]=\"errTimeout\">\r\n  <span>{{errMsg}}</span>\r\n</alert>\r\n<div class=\"container-fluid view-area\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-md-6 m-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header bg-primary text-light\">\r\n          Login 22379\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n            <div class=\"form-group\">\r\n              <label>Email</label>\r\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('email')}\"\r\n                formControlName=\"email\" placeholder=\"Your Login Email\" autocomplete=\"email\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('email')\">\r\n                {{getErrors('email')}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Password</label>\r\n              <input type=\"password\" class=\"form-control\" autocomplete=\"password\"\r\n                [ngClass]=\"{'is-invalid': getInvalidCondition('password')}\" formControlName=\"password\"\r\n                placeholder=\"Password\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('password')\">\r\n                {{getErrors('password')}}\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <div class=\"btn-group\" role=\"login\" aria-label=\"Login Register\">\r\n                <button type=\"submit\" [disabled]=\"loader\" class=\"btn btn-primary d-inline-block\"> <span class=\"spinner-border spinner-border-sm\" *ngIf=\"loader\" role=\"status\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                  </span> Login</button>\r\n                <button type=\"button\" [disabled]=\"loader\" [routerLink]=\"['/register']\"\r\n                  class=\"btn btn-outline-primary d-inline-block ml-1\">Sign Up</button>\r\n              </div>\r\n              <a class=\"float-right\" [routerLink]=\"['/forgot-password']\">Forgot Password?</a>\r\n            </div>\r\n            <div class=\"invalid-feedback mt-3 d-block\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid view-area\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-md-6 m-auto\">\r\n        <div class=\"card\">\r\n        <div class=\"card-header bg-primary text-light\">\r\n          Update Profile\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateProfile()\">\r\n            <div class=\"form-group\">\r\n              <label>Username (<span class=\"text-danger\">*</span>)</label>\r\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('username'), 'is-valid': profileForm.get('username').valid}\" formControlName=\"username\" placeholder=\"Your Username\" autocomplete=\"off\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('username')\">\r\n                {{getErrors('username')}}\r\n              </div>\r\n              <div class=\"valid-feedback d-block\" *ngIf=\"profileForm.get('username').valid\">\r\n                Username Present\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>First Name (<span class=\"text-danger\">*</span>)</label>\r\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('firstName')}\" formControlName=\"firstName\" placeholder=\"Your First Name\" autocomplete=\"firstName\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('firstName')\">\r\n                {{getErrors('firstName')}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Last Name</label>\r\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('lastName')}\" formControlName=\"lastName\" placeholder=\"Your Last Name\" autocomplete=\"lastName\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('lastName')\">\r\n                {{getErrors('lastName')}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Email (<span class=\"text-danger\">*</span>)</label>\r\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('email')}\" formControlName=\"email\" placeholder=\"Your Email\" autocomplete=\"email\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('email')\">\r\n                {{getErrors('email')}}\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"form-group\">\r\n              <label>Password (<span class=\"text-danger\">*</span>)</label>\r\n              <input type=\"password\" class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('password')}\" formControlName=\"password\" placeholder=\"Password\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('password')\">\r\n                {{getErrors('password')}}\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Confirm Password (<span class=\"text-danger\">*</span>)</label>\r\n              <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('confirmPassword')}\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('confirmPassword')\">\r\n                {{getErrors('confirmPassword')}}\r\n              </div>\r\n            </div> -->\r\n            <div>\r\n              <button type=\"submit\" [disabled]=\"loader\" class=\"btn btn-primary d-inline-block\">\r\n                  <span class=\"spinner-border spinner-border-sm\" *ngIf=\"loader\" role=\"status\">\r\n                      <span class=\"sr-only\">Loading...</span>\r\n                    </span>Update Profile</button>\r\n            </div>\r\n            <div class=\"invalid-feedback mt-3 d-block\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid view-area\">\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-md-4 m-auto\">\r\n          <div class=\"card\">\r\n          <div class=\"card-header bg-primary text-light\">\r\n            Register\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n              <div class=\"form-group\">\r\n                <label>First Name (<span class=\"text-danger\">*</span>)</label>\r\n                <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('firstName')}\" formControlName=\"firstName\" placeholder=\"Your First Name\" autocomplete=\"firstName\">\r\n                <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('firstName')\">\r\n                  {{getErrors('firstName')}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Last Name</label>\r\n                <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('lastName')}\" formControlName=\"lastName\" placeholder=\"Your Last Name\" autocomplete=\"lastName\">\r\n                <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('lastName')\">\r\n                  {{getErrors('lastName')}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Email (<span class=\"text-danger\">*</span>)</label>\r\n                <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('email')}\" formControlName=\"email\" placeholder=\"Your Email\" autocomplete=\"email\">\r\n                <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('email')\">\r\n                  {{getErrors('email')}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Password (<span class=\"text-danger\">*</span>)</label>\r\n                <input type=\"password\" class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('password')}\" formControlName=\"password\" placeholder=\"Password\">\r\n                <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('password')\">\r\n                  {{getErrors('password')}}\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Confirm Password (<span class=\"text-danger\">*</span>)</label>\r\n                <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('confirmPassword')}\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\">\r\n                <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('confirmPassword')\">\r\n                  {{getErrors('confirmPassword')}}\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <button type=\"submit\" [disabled]=\"loader\" class=\"btn btn-primary d-inline-block\">\r\n                    <span class=\"spinner-border spinner-border-sm\" *ngIf=\"loader\" role=\"status\">\r\n                        <span class=\"sr-only\">Loading...</span>\r\n                      </span> Register</button>\r\n                <button type=\"button\" [disabled]=\"loader\" [routerLink]=\"['/']\" class=\"btn btn-outline-success d-inline-block ml-1\">Already a User ? Login</button>\r\n              </div>\r\n              <div class=\"invalid-feedback mt-3 d-block\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-account/verify-account.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-account/verify-account.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid view-area\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"m-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header bg-primary text-light\">\r\n          Verify Your Account\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"text-success d-block\" *ngIf=\"successMsg\">{{successMsg}}</div>\r\n          <form [formGroup]=\"verifyForm\" (ngSubmit)=\"verifyOtp()\">\r\n            <div class=\"form-group\">\r\n              <label>Enter OTP</label>\r\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('otp')}\"\r\n                formControlName=\"otp\" placeholder=\"e.g. 123456\" autocomplete=\"otp\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('otp')\">\r\n                {{getErrors('otp')}}\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <div class=\"spinner-border text-primary\" *ngIf=\"loader\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n              </div>\r\n              <button type=\"submit\" [disabled]=\"!otpSent\" class=\"btn btn-primary d-inline-block\">Verify</button>\r\n              <button type=\"button\" #resendButton class=\"btn btn-outline-success float-right\" [disabled]=\"!isResend\" (click)=\"sendOtp()\">Resend\r\n                <ng-container *ngIf=\"resendTime !== null\">\r\n                  in {{resendTime | date: 'mm:ss'}}\r\n                </ng-container>\r\n              </button>\r\n            </div>\r\n            <div class=\"invalid-feedback mt-3 d-block\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _joinchat_joinchat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joinchat/joinchat.component */ "./src/app/joinchat/joinchat.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _chatroom_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatroom.guard */ "./src/app/chatroom.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verify-account/verify-account.component */ "./src/app/verify-account/verify-account.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");











const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { checkloggedIn: true } },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { checkloggedIn: true } },
    { path: 'verify', component: _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_8__["VerifyAccountComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { checkVerified: true } },
    { path: 'update-profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'join', component: _joinchat_joinchat_component__WEBPACK_IMPORTED_MODULE_1__["JoinchatComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { checkjoin: true, checkUsername: true } },
    { path: 'chat', component: _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_4__["ChatroomComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _chatroom_guard__WEBPACK_IMPORTED_MODULE_5__["ChatroomGuard"]], data: { checkjoin: true, checkUsername: true } },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");



let AppComponent = class AppComponent {
    constructor() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["setTheme"])('bs4');
    }
    ngOnInit() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _joinchat_joinchat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./joinchat/joinchat.component */ "./src/app/joinchat/joinchat.component.ts");
/* harmony import */ var _recent_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recent-date.pipe */ "./src/app/recent-date.pipe.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./verify-account/verify-account.component */ "./src/app/verify-account/verify-account.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_10__["ChatroomComponent"],
            _joinchat_joinchat_component__WEBPACK_IMPORTED_MODULE_11__["JoinchatComponent"],
            _recent_date_pipe__WEBPACK_IMPORTED_MODULE_12__["RecentDatePipe"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _verify_account_verify_account_component__WEBPACK_IMPORTED_MODULE_16__["VerifyAccountComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot(),
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__["ButtonsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(chatService, router) {
        this.chatService = chatService;
        this.router = router;
    }
    canActivate(next, state) {
        const loggedIn = this.chatService.isLoggedIn();
        if (loggedIn) {
            if (next.data.checkVerified) {
                const isVerified = this.chatService.getUserInfo().isVerified;
                if (isVerified) {
                    return this.router.parseUrl('/join');
                }
            }
            if (next.data.checkjoin) {
                const isVerified = this.chatService.getUserInfo().isVerified;
                if (!isVerified) {
                    return this.router.parseUrl('/verify');
                }
            }
            if (next.data.checkUsername) {
                const username = this.chatService.getUserInfo().username;
                if (username === '') {
                    return this.router.parseUrl('/update-profile');
                }
            }
            if (next.data.checkloggedIn) {
                return this.router.parseUrl('/join');
            }
            return true;
        }
        else {
            if (next.data.checkloggedIn) {
                return true;
            }
            return this.router.parseUrl('/');
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ChatService = class ChatService {
    constructor() {
        this.errMsgSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    isLoggedIn() {
        return this.getUserInfo() ? this.getUserInfo() : false;
    }
    clearUser() {
        localStorage.removeItem('user');
    }
    setInLocal(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    }
    getFromLocal(key, json = true) {
        let item = localStorage.getItem(key);
        if (json && item) {
            item = JSON.parse(item);
        }
        return item;
    }
    getUserInfo(socketUser = false) {
        if (socketUser) {
            return this.getFromLocal('sUser');
        }
        return this.getFromLocal('user');
    }
    setUserInfo(val, socketUser = false) {
        if (socketUser) {
            return this.setInLocal('sUser', val);
        }
        return this.setInLocal('user', val);
    }
    setErrorMsg(val) {
        this.errMsgSub.next(val);
        // return this.setInLocal('error', val);
    }
    setRouteErrorMsg(val) {
        return this.setInLocal('error', val);
    }
    getErrorMsg() {
        return this.errMsgSub.asObservable();
        /* const error = this.getFromLocal('error', false);
        localStorage.removeItem('error');
        return error; */
    }
    getRouteErrorMsg() {
        const error = this.getFromLocal('error', false);
        localStorage.removeItem('error');
        return error;
    }
    getValidationErrors(formControl, formGroup, validations) {
        const errorField = validations[formControl];
        for (const i in errorField) {
            if (formGroup.get(formControl).hasError(errorField[i].type)) {
                return errorField[i].message;
            }
        }
    }
    markFieldsAsDirty(formGroup) {
        Object.keys(formGroup.controls).forEach(formControl => {
            const control = formGroup.get(formControl);
            control.markAsDirty({ onlySelf: true });
        });
    }
    showResponseError(error) {
        if (error.status === 422 && error.error.errors) {
            let msg = '';
            const errors = error.error.errors;
            for (let i = 0; i < errors.length; i++) {
                const element = errors[i];
                msg += element.msg;
                if (i !== errors.length - 1) {
                    msg += '. ';
                }
            }
            return msg;
        }
        else if (error.error.message === undefined) {
            return error.status + ' - ' + error.statusText;
        }
        else {
            return error.error.message;
        }
    }
};
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ "./src/app/chatapi.service.ts":
/*!************************************!*\
  !*** ./src/app/chatapi.service.ts ***!
  \************************************/
/*! exports provided: ChatapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatapiService", function() { return ChatapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






let ChatapiService = class ChatapiService {
    constructor(httpClient, router, chatService) {
        this.httpClient = httpClient;
        this.router = router;
        this.chatService = chatService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].socketUrl;
    }
    login(loginInput) {
        const loginUrl = this.apiUrl + '/user/authenticate';
        return this.httpClient.post(loginUrl, loginInput);
    }
    logout() {
        this.chatService.clearUser();
        this.router.navigate(['/']);
    }
    register(registerInput) {
        const registerUrl = this.apiUrl + '/user/register';
        return this.httpClient.post(registerUrl, registerInput);
    }
    addXToken() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'x-access-token': this.chatService.getFromLocal('token')
        });
    }
    sendOtp() {
        const verifyUrl = this.apiUrl + '/user/send-otp';
        const headers = this.addXToken();
        const email = this.chatService.getUserInfo().email;
        return this.httpClient.post(verifyUrl, { email }, { headers });
    }
    confirmOtp(otpInput) {
        const confirmOtpUrl = this.apiUrl + '/user/confirm-otp';
        const headers = this.addXToken();
        return this.httpClient.post(confirmOtpUrl, otpInput, { headers });
    }
    checkIfUserExists(userString) {
        const checkUserUrl = this.apiUrl + '/user/check-username';
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('userinput', userString).set('email', this.chatService.getUserInfo().email);
        const headers = this.addXToken();
        return this.httpClient.get(checkUserUrl, { headers, params });
    }
    getUserDetails() {
        const getUserDetailsUrl = this.apiUrl + '/user/user-details';
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('email', this.chatService.getUserInfo().email);
        const headers = this.addXToken();
        return this.httpClient.get(getUserDetailsUrl, { headers, params });
    }
    updateProfile(userInfo) {
        const updateProfileUrl = this.apiUrl + '/user/update-profile';
        userInfo.email = this.chatService.getUserInfo().email;
        const headers = this.addXToken();
        return this.httpClient.patch(updateProfileUrl, userInfo, { headers });
    }
};
ChatapiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }
];
ChatapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ChatapiService);



/***/ }),

/***/ "./src/app/chatroom.guard.ts":
/*!***********************************!*\
  !*** ./src/app/chatroom.guard.ts ***!
  \***********************************/
/*! exports provided: ChatroomGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomGuard", function() { return ChatroomGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ChatroomGuard = class ChatroomGuard {
    constructor(chatService, router, socketService) {
        this.chatService = chatService;
        this.router = router;
        this.socketService = socketService;
    }
    canActivate(next, state) {
        const hasUser = this.chatService.getUserInfo();
        const isLoggedIn = this.socketService.loggedIn();
        // console.log('hasUser');
        if (hasUser && isLoggedIn) {
            return true;
        }
        this.chatService.setRouteErrorMsg('You need to login First!');
        return this.router.parseUrl('/');
    }
};
ChatroomGuard.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }
];
ChatroomGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], ChatroomGuard);



/***/ }),

/***/ "./src/app/chatroom/chatroom.component.scss":
/*!**************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".other-user {\n  background: #4f85b5a6;\n}\n\n.current-user {\n  background: #80808085;\n  align-self: flex-end;\n}\n\n.current-user, .other-user {\n  padding: 20px 20px;\n  border-radius: 5px;\n  display: inline-block;\n  width: 25%;\n  position: relative;\n}\n\n.scrollable {\n  min-height: 470px;\n  max-height: 470px;\n  overflow: scroll;\n}\n\n.message-date {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  font-size: 0.7rem;\n}\n\n.new-day {\n  text-align: center;\n}\n\n.new-day::before, .new-day::after {\n  content: \"\";\n  height: 1px;\n  display: inline-block;\n  width: 40%;\n  background-color: rgba(0, 0, 0, 0.7);\n  margin: 0 1%;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHJvb20vZTpcXHByb2plY3RzXFxjaGF0YXBwXFxhbmd1bGFyLXNvY2tldC9zcmNcXGFwcFxcY2hhdHJvb21cXGNoYXRyb29tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGF0cm9vbS9jaGF0cm9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLHFCQUFBO0FDRVo7O0FEREE7RUFBYyxxQkFBQTtFQUF1QixvQkFBQTtBQ01yQzs7QURMQTtFQUEyQixrQkFBQTtFQUFvQixrQkFBQTtFQUFvQixxQkFBQTtFQUF1QixVQUFBO0VBQVksa0JBQUE7QUNhdEc7O0FEWkE7RUFBWSxpQkFBQTtFQUFrQixpQkFBQTtFQUFrQixnQkFBQTtBQ2tCaEQ7O0FEakJBO0VBQWMsa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFVBQUE7RUFBWSxpQkFBQTtBQ3dCM0Q7O0FEdkJBO0VBQVMsa0JBQUE7QUMyQlQ7O0FEMUJBO0VBQWtDLFdBQUE7RUFBYSxXQUFBO0VBQWEscUJBQUE7RUFBdUIsVUFBQTtFQUFZLG9DQUFBO0VBQXNDLFlBQUE7RUFBYyxzQkFBQTtBQ29DbkoiLCJmaWxlIjoic3JjL2FwcC9jaGF0cm9vbS9jaGF0cm9vbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdGhlci11c2Vye2JhY2tncm91bmQ6ICM0Zjg1YjVhNjt9XHJcbi5jdXJyZW50LXVzZXJ7YmFja2dyb3VuZDogIzgwODA4MDg1OyBhbGlnbi1zZWxmOiBmbGV4LWVuZH1cclxuLmN1cnJlbnQtdXNlciwgLm90aGVyLXVzZXJ7cGFkZGluZzogMjBweCAyMHB4OyBib3JkZXItcmFkaXVzOiA1cHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDI1JTsgcG9zaXRpb246IHJlbGF0aXZlfVxyXG4uc2Nyb2xsYWJsZXttaW4taGVpZ2h0OiA0NzBweDttYXgtaGVpZ2h0OiA0NzBweDtvdmVyZmxvdzogc2Nyb2xsfVxyXG4ubWVzc2FnZS1kYXRle3Bvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiA1cHg7IHJpZ2h0OiA1cHg7IGZvbnQtc2l6ZTogMC43cmVtO31cclxuLm5ldy1kYXl7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLm5ldy1kYXk6OmJlZm9yZSwgLm5ldy1kYXk6OmFmdGVye2NvbnRlbnQ6IFwiXCI7IGhlaWdodDogMXB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA0MCU7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgbWFyZ2luOiAwIDElOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO31cclxuIiwiLm90aGVyLXVzZXIge1xuICBiYWNrZ3JvdW5kOiAjNGY4NWI1YTY7XG59XG5cbi5jdXJyZW50LXVzZXIge1xuICBiYWNrZ3JvdW5kOiAjODA4MDgwODU7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4uY3VycmVudC11c2VyLCAub3RoZXItdXNlciB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNjcm9sbGFibGUge1xuICBtaW4taGVpZ2h0OiA0NzBweDtcbiAgbWF4LWhlaWdodDogNDcwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5tZXNzYWdlLWRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLm5ldy1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXctZGF5OjpiZWZvcmUsIC5uZXctZGF5OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgbWFyZ2luOiAwIDElO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.ts ***!
  \************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ChatroomComponent = class ChatroomComponent {
    constructor(chatService, router, socketService) {
        this.chatService = chatService;
        this.router = router;
        this.socketService = socketService;
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        });
        this.fullDates = [];
        this.loading = false;
        this.messages = [];
        this.chatContent = '';
        // this.socketService.connectSocket();
    }
    ngOnInit() {
        this.user = this.chatService.getUserInfo(true);
        /* this.messages = [
        {datechange: '2019-08-10T08:11:56.012Z'},
        {msg: 'kjhbkjh10', username: 'anand', date: '2019-08-10T08:04:28.527Z'},
        {msg: 'kjhbkjh10', username: 'anand', date: '2019-08-10T08:04:28.527Z'},
        {datechange: '2019-08-12T08:11:56.012Z'},
        {msg: 'kjhbkjh12', username: 'anand', date: '2019-08-12T08:04:28.527Z'}]; */
        console.log(this.user);
        this.subscribeSocketEvents();
    }
    sendMessage() {
        if (this.messageForm.valid) {
            this.loading = true;
            const message = this.messageForm.get('message').value;
            console.log(message);
            this.socketService.sendMessage('newMessage', message);
            this.loading = false;
        }
    }
    checkValid() {
        if (!this.messageForm.valid || this.messageForm.get('message').value.trim() === '') {
            return true;
        }
        return false;
    }
    sendLocation() {
        if (!navigator.geolocation) {
            return alert('You browser does not support geolocation');
        }
        this.loading = true;
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log(position);
            this.socketService.sendMessage('sendLocation', { lat, long });
            this.loading = false;
        });
    }
    subscribeSocketEvents() {
        this.socketService.onNewMessage().subscribe(message => {
            console.log(this.messages);
            const date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'mediumDate', 'en');
            const found = this.fullDates.indexOf(date);
            if (found === -1) {
                this.messages.push({ datechange: message.date });
                this.fullDates.push(date);
            }
            this.messages.push(message);
            this.messageForm.reset();
        });
        this.socketService.onNewClient().subscribe((mesg) => {
            const joined = mesg;
            this.messages.push({ joined });
        });
        this.socketService.onClientDisconnect().subscribe((mesg) => {
            const left = mesg;
            this.messages.push({ left });
        });
    }
    logout() {
        this.socketService.logout();
    }
};
ChatroomComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }
];
ChatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chatroom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatroom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatroom/chatroom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatroom.component.scss */ "./src/app/chatroom/chatroom.component.scss")).default]
    })
], ChatroomComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chatapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../chatapi.service */ "./src/app/chatapi.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let HeaderComponent = class HeaderComponent {
    constructor(chatService, chatapiService) {
        this.chatService = chatService;
        this.chatapiService = chatapiService;
    }
    ngOnInit() {
    }
    isLoggedIn() {
        return this.chatService.isLoggedIn();
    }
    logout() {
        this.chatapiService.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
    { type: _chatapi_service__WEBPACK_IMPORTED_MODULE_1__["ChatapiService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/joinchat/joinchat.component.scss":
/*!**************************************************!*\
  !*** ./src/app/joinchat/joinchat.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".joinbox {\n  box-shadow: 3px 4px 15px -2px rgba(0, 0, 0, 0.75);\n  padding: 30px 20px;\n  background: #85dbf5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbmNoYXQvZTpcXHByb2plY3RzXFxjaGF0YXBwXFxhbmd1bGFyLXNvY2tldC9zcmNcXGFwcFxcam9pbmNoYXRcXGpvaW5jaGF0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9qb2luY2hhdC9qb2luY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvam9pbmNoYXQvam9pbmNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9pbmJveCB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggNHB4IDE1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDRweCAxNXB4IC0ycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBib3gtc2hhZG93OiAzcHggNHB4IDE1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjODVkYmY1O1xyXG59XHJcbiIsIi5qb2luYm94IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggNHB4IDE1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCA0cHggMTVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDNweCA0cHggMTVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgYmFja2dyb3VuZDogIzg1ZGJmNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/joinchat/joinchat.component.ts":
/*!************************************************!*\
  !*** ./src/app/joinchat/joinchat.component.ts ***!
  \************************************************/
/*! exports provided: JoinchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinchatComponent", function() { return JoinchatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let JoinchatComponent = class JoinchatComponent {
    constructor(router, chatService, socketService) {
        this.router = router;
        this.chatService = chatService;
        this.socketService = socketService;
        this.error = false;
        this.errMsg = '';
        this.errTimeout = 4000;
        this.username = '';
        this.joinFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            room: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('one', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.joinValidations = {
            room: [
                {
                    type: 'required',
                    message: 'Room Selection is required'
                }
            ]
        };
        // this.socketService.connectSocket();
    }
    ngOnInit() {
        // this.chatService.clearUser();
        this.username = this.chatService.getUserInfo().username;
        console.log(this.username);
        this.errMsg = this.chatService.getRouteErrorMsg();
        if (this.errMsg) {
            this.error = true;
        }
        this.errSubscription = this.chatService.getErrorMsg().subscribe(msg => {
            console.log('msg', msg);
            this.errMsg = msg;
            // if (this.errMsg) {
            this.error = true;
            setTimeout(() => {
                this.error = false;
            }, this.errTimeout);
            // }
        });
    }
    ngOnDestroy() {
        this.errSubscription.unsubscribe();
    }
    joinRoom() {
        if (this.joinFormGroup.valid) {
            const user = this.joinFormGroup.value;
            user.username = this.username;
            this.chatService.setUserInfo(user, true);
            this.socketService.connectNewClient(user);
        }
        else {
            this.chatService.markFieldsAsDirty(this.joinFormGroup);
        }
    }
    getErrors(formcontrol) {
        return this.chatService.getValidationErrors(formcontrol, this.joinFormGroup, this.joinValidations);
    }
};
JoinchatComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }
];
JoinchatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-joinchat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./joinchat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/joinchat/joinchat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./joinchat.component.scss */ "./src/app/joinchat/joinchat.component.scss")).default]
    })
], JoinchatComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chatapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../chatapi.service */ "./src/app/chatapi.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../chat.service */ "./src/app/chat.service.ts");







let LoginComponent = class LoginComponent {
    constructor(chatService, chatapiService, router) {
        this.chatService = chatService;
        this.chatapiService = chatapiService;
        this.router = router;
        this.error = false;
        this.errMsg = '';
        this.loader = false;
        this.errTimeout = 4000;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.loginValidations = {
            email: [
                {
                    type: 'required',
                    message: 'Email is required'
                },
                {
                    type: 'email',
                    message: 'Invalid Email'
                }
            ],
            password: [
                {
                    type: 'required',
                    message: 'Password is required'
                }
            ]
        };
    }
    ngOnInit() {
        this.errMsg = this.chatService.getRouteErrorMsg();
        if (this.errMsg) {
            this.error = true;
        }
        const l = this.chatService.isLoggedIn();
        console.log(l);
        // this.errorMessage = this.authService.getErrorMessage();
    }
    getErrors(formcontrol) {
        return this.chatService.getValidationErrors(formcontrol, this.loginForm, this.loginValidations);
    }
    getInvalidCondition(formControl) {
        return (this.loginForm.get(formControl).invalid &&
            this.loginForm.get(formControl).dirty);
    }
    login() {
        if (this.loginForm.valid) {
            // return;
            this.loader = true;
            this.loginForm.disable();
            this.chatapiService.login(this.loginForm.value).subscribe(response => {
                this.loader = false;
                this.loginForm.enable();
                const token = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(response.token);
                if (!token.active) {
                    this.errorMessage =
                        'Your account is not active. Please contact admin.';
                    return;
                }
                this.chatService.setUserInfo(token);
                this.chatService.setInLocal('token', response.token);
                console.log(token);
                this.router.navigate(['/join']);
                /* if (token.isAdmin) {
                  if (!token.isVerified) {
                    this.router.navigate(['admin/update-password']);
                  } else {
                    this.router.navigate(['/admin']);
                  }
                } else {
                  if (!token.isVerified) {
                    this.router.navigate(['user/update-password']);
                  } else {
                  }
                } */
            }, error => {
                this.loader = false;
                this.loginForm.enable();
                this.errorMessage = this.chatService.showResponseError(error);
            });
        }
        else {
            this.chatService.markFieldsAsDirty(this.loginForm);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"] },
    { type: _chatapi_service__WEBPACK_IMPORTED_MODULE_1__["ChatapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chatapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../chatapi.service */ "./src/app/chatapi.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ProfileComponent = class ProfileComponent {
    constructor(chatService, chatapiService, router) {
        this.chatService = chatService;
        this.chatapiService = chatapiService;
        this.router = router;
        this.loader = false;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
        }, {
            validators: [/* this.mustMatch('password', 'confirmPassword'), */ this.uniqueUser('username')]
        });
        this.profileValidations = {
            username: [
                {
                    type: 'required',
                    message: 'Username is required'
                },
                {
                    type: 'unique',
                    message: 'Username already taken'
                },
                {
                    type: 'minlength',
                    message: 'Username must be atleast 5 characters long'
                }
            ],
            email: [
                {
                    type: 'required',
                    message: 'Email is required'
                },
                {
                    type: 'email',
                    message: 'Invalid Email'
                }
            ],
            firstName: [
                {
                    type: 'required',
                    message: 'First Name is required'
                },
                {
                    type: 'minlength',
                    message: 'First Name must be atleast 3 characters long'
                }
            ],
            password: [
                {
                    type: 'required',
                    message: 'Password is required'
                },
                {
                    type: 'minlength',
                    message: 'Password must be atleast 8 characters long'
                }
            ],
            confirmPassword: [
                {
                    type: 'required',
                    message: 'Confirm Password is required'
                },
                {
                    type: 'mustMatch',
                    message: 'Password and Confirm Password must match'
                }
            ]
        };
    }
    ngOnInit() {
        this.setUserValues();
    }
    setUserValues() {
        this.chatapiService.getUserDetails().subscribe(res => {
            const controlkeys = { username: 'username', email: 'email', firstName: 'firstName', lastName: 'lastName' };
            if (res.data.username !== '') {
                this.profileForm.controls[controlkeys.username].setValue(res.data.username);
            }
            this.profileForm.controls[controlkeys.email].setValue(res.data.email);
            this.profileForm.controls[controlkeys.firstName].setValue(res.data.firstName);
            this.profileForm.controls[controlkeys.lastName].setValue(res.data.lastName);
        }, err => {
            console.log(err);
            this.errorMessage = this.chatService.showResponseError(err);
        });
    }
    uniqueUser(userInput) {
        return (formGroup) => {
            const usernameControl = formGroup.controls[userInput];
            if (usernameControl.errors && !usernameControl.errors.unique) {
                // return if another validator has already found an error on the usernameControl
                return;
            }
            this.chatapiService.checkIfUserExists(usernameControl.value).subscribe(res => {
                // set error on usernameControl if user exists
                if (res.exists) {
                    usernameControl.setErrors({ unique: true });
                }
                else {
                    usernameControl.setErrors(null);
                }
            }, err => console.log(err));
        };
    }
    mustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    getErrors(formcontrol) {
        return this.chatService.getValidationErrors(formcontrol, this.profileForm, this.profileValidations);
    }
    getInvalidCondition(formControl) {
        return (this.profileForm.get(formControl).invalid &&
            this.profileForm.get(formControl).dirty);
    }
    updateProfile() {
        if (this.profileForm.valid) {
            console.log(this.profileForm.value);
            this.loader = true;
            this.profileForm.disable();
            this.chatapiService.updateProfile(this.profileForm.value).subscribe(res => {
                this.loader = false;
                this.profileForm.enable();
                const user = this.chatService.getUserInfo();
                user.username = res.data.username;
                this.chatService.setUserInfo(user);
                this.router.navigate(['/join']);
            }, error => {
                this.loader = false;
                this.profileForm.enable();
                this.errorMessage = this.chatService.showResponseError(error);
            });
        }
        else {
            this.chatService.markFieldsAsDirty(this.profileForm);
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] },
    { type: _chatapi_service__WEBPACK_IMPORTED_MODULE_1__["ChatapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/recent-date.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/recent-date.pipe.ts ***!
  \*************************************/
/*! exports provided: RecentDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentDatePipe", function() { return RecentDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecentDatePipe = class RecentDatePipe {
    transform(value) {
        const msgDate = new Date(value).getTime();
        const currentDate = new Date().getTime();
        const bal = (currentDate - msgDate) / (1000 * 60 * 60 * 24); // get diff in days
        if (bal < 1) {
            return 'Today';
        }
        else if (bal < 2) {
            return 'Yesterday';
        }
        else {
            return value;
        }
    }
};
RecentDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'recentDate'
    })
], RecentDatePipe);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chatapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../chatapi.service */ "./src/app/chatapi.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../chat.service */ "./src/app/chat.service.ts");







let RegisterComponent = class RegisterComponent {
    constructor(chatService, router, chatapiService) {
        this.chatService = chatService;
        this.router = router;
        this.chatapiService = chatapiService;
        this.loader = false;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
            ]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        }, {
            validators: this.mustMatch('password', 'confirmPassword')
        });
        this.registerValidations = {
            email: [
                {
                    type: 'required',
                    message: 'Email is required'
                },
                {
                    type: 'email',
                    message: 'Invalid Email'
                }
            ],
            firstName: [
                {
                    type: 'required',
                    message: 'First Name is required'
                },
                {
                    type: 'minlength',
                    message: 'First Name must be atleast 3 characters long'
                }
            ],
            password: [
                {
                    type: 'required',
                    message: 'Password is required'
                },
                {
                    type: 'minlength',
                    message: 'Password must be atleast 8 characters long'
                }
            ],
            confirmPassword: [
                {
                    type: 'required',
                    message: 'Confirm Password is required'
                },
                {
                    type: 'mustMatch',
                    message: 'Password and Confirm Password must match'
                }
            ]
        };
    }
    ngOnInit() {
    }
    mustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    getErrors(formcontrol) {
        return this.chatService.getValidationErrors(formcontrol, this.registerForm, this.registerValidations);
    }
    getInvalidCondition(formControl) {
        return (this.registerForm.get(formControl).invalid &&
            this.registerForm.get(formControl).dirty);
    }
    register() {
        if (this.registerForm.valid) {
            // return;
            this.loader = true;
            this.registerForm.disable();
            this.chatapiService.register(this.registerForm.value).subscribe(response => {
                this.loader = false;
                this.registerForm.enable();
                const token = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(response.token);
                if (!token.active) {
                    this.errorMessage =
                        'Your account is not active. Please contact admin.';
                    return;
                }
                this.chatService.setUserInfo(token);
                this.chatService.setInLocal('token', response.token);
                this.router.navigate(['/verify']);
            }, error => {
                this.loader = false;
                this.registerForm.enable();
                this.errorMessage = this.chatService.showResponseError(error);
            });
        }
        else {
            this.chatService.markFieldsAsDirty(this.registerForm);
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _chatapi_service__WEBPACK_IMPORTED_MODULE_1__["ChatapiService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let SocketService = class SocketService {
    constructor(chatService, router) {
        this.chatService = chatService;
        this.router = router;
        this.socketUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].socketUrl;
        this.isLoggedIn = false;
        // this.socket = io.connect(this.socketUrl);
        this.connectSocket();
    }
    connectSocket() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__["connect"](this.socketUrl);
    }
    loggedIn() {
        return this.isLoggedIn;
    }
    connectNewClient(user) {
        console.log('here', this.socket);
        if (this.socket.disconnected) {
            this.socket.open();
        }
        this.socket.emit('join', user, (error) => {
            console.log('called');
            if (error) {
                console.log(error);
                this.chatService.setErrorMsg(error);
                this.isLoggedIn = false;
                this.router.navigate(['/']);
                return;
            }
            this.router.navigate(['/chat']);
            this.isLoggedIn = true;
        });
    }
    sendMessage(key, message = '') {
        if (this.socket.disconnected) {
            this.socket.open();
        }
        this.socket.emit(key, message);
    }
    onNewMessage() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]((observer) => {
            this.socket.on('newMessage', (msg, username, date) => {
                observer.next({ msg, username, date });
            });
        });
    }
    onNewClient() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]((observer) => {
            this.socket.on('newClient', (msg) => {
                observer.next(msg);
            });
        });
    }
    onClientDisconnect() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]((observer) => {
            this.socket.on('clientLeft', (msg) => {
                observer.next(msg);
            });
        });
    }
    logout() {
        this.sendMessage('logout');
        this.socket.disconnect();
        this.chatService.clearUser();
        this.router.navigate(['/']);
    }
};
SocketService.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], SocketService);



/***/ }),

/***/ "./src/app/verify-account/verify-account.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/verify-account/verify-account.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1hY2NvdW50L3ZlcmlmeS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/verify-account/verify-account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/verify-account/verify-account.component.ts ***!
  \************************************************************/
/*! exports provided: VerifyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyAccountComponent", function() { return VerifyAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chatapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../chatapi.service */ "./src/app/chatapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");






let VerifyAccountComponent = class VerifyAccountComponent {
    constructor(chatService, chatapiService, /* private renderer: Renderer2, */ router) {
        this.chatService = chatService;
        this.chatapiService = chatapiService;
        this.router = router;
        this.otpSent = false;
        this.loader = false;
        this.isResend = false;
        this.resendTime = null;
        this.verifyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)])
        });
        this.verifyValidations = {
            otp: [
                {
                    type: 'required',
                    message: 'OTP is required'
                },
                {
                    type: 'minlength',
                    message: 'OTP must be atleast 4 digits'
                }
            ]
        };
    }
    ngOnInit() {
        this.sendOtp();
    }
    setTimer() {
        this.resendTime = new Date().setMinutes(2, 0, 0);
        const timer = setInterval(() => {
            const d = new Date(this.resendTime);
            if (d.getMinutes() === 0 && d.getSeconds() === 1) {
                this.isResend = true;
                // this.resendButton.nativeElement.innerText = 'Resend'; <- never use this
                this.resendTime = null;
                // this.renderer.setProperty(this.resendButton.nativeElement, 'innerText', 'Resend');
                clearInterval(timer);
            }
            else {
                this.resendTime = d.setSeconds(d.getSeconds() - 1);
            }
        }, 1000);
    }
    sendOtp() {
        this.isResend = false;
        this.chatapiService.sendOtp().subscribe(res => {
            this.successMsg = res.message;
            this.otpSent = true;
            if (res.attempt < 3) {
                this.setTimer();
            }
        }, err => {
            this.otpSent = true;
            if (err.status === 400) {
                this.resendTime = null;
            }
            else {
                this.isResend = true;
            }
            this.errorMessage = this.chatService.showResponseError(err);
        });
    }
    getErrors(formcontrol) {
        return this.chatService.getValidationErrors(formcontrol, this.verifyForm, this.verifyValidations);
    }
    getInvalidCondition(formControl) {
        return (this.verifyForm.get(formControl).invalid &&
            this.verifyForm.get(formControl).dirty);
    }
    verifyOtp() {
        if (this.verifyForm.valid) {
            const otpInput = {
                email: this.chatService.getUserInfo().email,
                otp: this.verifyForm.value.otp
            };
            this.chatapiService.confirmOtp(otpInput).subscribe(res => {
                this.successMsg = 'otp confirmed';
                this.otpSent = false;
                const user = this.chatService.getUserInfo();
                user.isVerified = true;
                this.chatService.setUserInfo(user);
                this.router.navigateByUrl('/join');
            }, err => {
                this.otpSent = true;
                this.errorMessage = this.chatService.showResponseError(err);
            });
        }
        else {
            this.chatService.markFieldsAsDirty(this.verifyForm);
        }
    }
};
VerifyAccountComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
    { type: _chatapi_service__WEBPACK_IMPORTED_MODULE_1__["ChatapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VerifyAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-account/verify-account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify-account.component.scss */ "./src/app/verify-account/verify-account.component.scss")).default]
    })
], VerifyAccountComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    socketUrl: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\projects\chatapp\angular-socket\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map