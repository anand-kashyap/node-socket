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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chatroom/chatroom.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chatroom/chatroom.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n  <h1>\n    Chat Box\n    <!-- <a class=\"btn btn-primary\" (click)=\"logout()\" >Logout</a> -->\n  </h1>\n  <div>\n    <!-- <span class=\"new-day\">Aug 13, 2019</span> -->\n    <div #scrollbox [scrollTop]=\"scrollbox.scrollHeight\" class=\"d-flex flex-column scrollable\">\n      <ng-container *ngFor=\"let message of messages\" >\n        <span *ngIf=\"message.datechange\" class=\"new-day\">{{message.datechange | date: 'mediumDate' | recentDate}}</span>\n        <p *ngIf=\"message.joined\" class=\"text-success\">{{message.joined}}</p>\n        <p *ngIf=\"message.left\" class=\"text-danger\">{{message.left}}</p>\n        <p *ngIf=\"message.username\" [ngClass]=\"message.username === user.username ? 'current-user' : 'other-user'\">\n          <strong class=\"d-block\" *ngIf=\"message.username !== user.username\">{{message.username | uppercase}}</strong>\n          <span [innerHTML]=\"message.msg\"></span>\n          <span class=\"message-date\">{{message.date | date: 'shortTime'}}</span>\n        </p>\n      </ng-container>\n    </div>\n    <form [formGroup]=\"messageForm\" class=\"align-self-end\" (ngSubmit)=\"sendMessage()\">\n      <div class=\"form-group\">\n        <input formControlName=\"message\" class=\"form-control\" type=\"text\" autofocus placeholder=\"Enter message\">\n        <button class=\"btn btn-primary\" [disabled]=\"loading || checkValid()\">Send</button>\n        <button class=\"btn btn-warning\" [disabled]=\"loading\" type=\"button\" (click)=\"sendLocation()\">Share Location</button>\n      </div>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid view-area\">\n  <div class=\"row mt-4\">\n    <div class=\"col-md-6 m-auto\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-light\">\n          Forgot Password\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"forgotForm\" (ngSubmit)=\"sendMail()\">\n            <div class=\"form-group\">\n              <label>Email</label>\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': isInvalid('email')}\"\n                formControlName=\"email\" placeholder=\"Your Login Email\" autocomplete=\"email\">\n              <div class=\"invalid-feedback\" *ngIf=\"isInvalid('email')\">\n                {{getErrors('email')}}\n              </div>\n            </div>\n            <div>\n              <button type=\"submit\" [disabled]=\"loader\" class=\"btn btn-primary d-inline-block\"> <span\n                  class=\"spinner-border spinner-border-sm\" *ngIf=\"loader\" role=\"status\">\n                  <span class=\"sr-only\">Loading...</span>\n                </span> Submit</button>\n            </div>\n            <div class=\"invalid-feedback mt-3 d-block\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n    <a class=\"navbar-brand\">Navbar</a>\n    <button class=\"btn btn-primary\" *ngIf=\"isLoggedIn()\" (click)=\"logout()\">Logout</button>\n  </nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/joinchat/joinchat.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/joinchat/joinchat.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<alert type=\"danger\" [isOpen]=\"error\" [dismissOnTimeout]=\"errTimeout\">\n  <span [innerHtml]=\"errMsg\"></span>\n</alert>\n<div class=\"row\">\n  <form class=\"col-md-6 mx-auto mt-5 joinbox\" [formGroup]=\"joinFormGroup\" (ngSubmit)=\"joinRoom()\">\n    <h2>Join Chat</h2>\n    <p>Hi <strong>{{username}}</strong>!</p>\n    <div class=\"form-group\">\n      <label for=\"room\">Room</label>\n      <select id=\"room\" formControlName=\"room\"\n        [ngClass]=\"{'is-invalid': joinFormGroup.get('room').invalid && joinFormGroup.get('room').dirty}\">\n        <option value=\"one\">One</option>\n        <option value=\"two\">Two</option>\n        <option value=\"three\">Three</option>\n      </select>\n      <div class=\"invalid-feedback\" *ngIf=\"joinFormGroup.get('room').invalid && joinFormGroup.get('room').dirty\">\n        {{getErrors('room')}}\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<alert type=\"danger\" [isOpen]=\"error\" [dismissOnTimeout]=\"errTimeout\">\n  <span>{{errMsg}}</span>\n</alert>\n<div class=\"container-fluid view-area\">\n  <div class=\"row mt-4\">\n    <div class=\"col-md-6 m-auto\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-light\">\n          Login\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n            <div class=\"form-group\">\n              <label>Email</label>\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('email')}\"\n                formControlName=\"email\" placeholder=\"Your Login Email\" autocomplete=\"email\">\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('email')\">\n                {{getErrors('email')}}\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" class=\"form-control\" autocomplete=\"password\"\n                [ngClass]=\"{'is-invalid': getInvalidCondition('password')}\" formControlName=\"password\"\n                placeholder=\"Password\">\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('password')\">\n                {{getErrors('password')}}\n              </div>\n            </div>\n            <div>\n              <div class=\"btn-group\" role=\"login\" aria-label=\"Login Register\">\n                <button type=\"submit\" [disabled]=\"loader\" class=\"btn btn-primary d-inline-block\"> <span class=\"spinner-border spinner-border-sm\" *ngIf=\"loader\" role=\"status\">\n                    <span class=\"sr-only\">Loading...</span>\n                  </span> Login</button>\n                <button type=\"button\" [disabled]=\"loader\" [routerLink]=\"['/register']\"\n                  class=\"btn btn-outline-primary d-inline-block ml-1\">Sign Up</button>\n              </div>\n              <a class=\"float-right\" [routerLink]=\"['/forgot-password']\">Forgot Password?</a>\n            </div>\n            <div class=\"invalid-feedback mt-3 d-block\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid view-area\">\n  <div class=\"row mt-4\">\n    <div class=\"col-md-6 m-auto\">\n        <div class=\"card\">\n        <div class=\"card-header bg-primary text-light\">\n          Update Profile\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateProfile()\">\n            <div class=\"form-group\">\n              <label>Username (<span class=\"text-danger\">*</span>)</label>\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('username'), 'is-valid': profileForm.get('username').valid}\" formControlName=\"username\" placeholder=\"Your Username\" autocomplete=\"off\">\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('username')\">\n                {{getErrors('username')}}\n              </div>\n              <div class=\"valid-feedback d-block\" *ngIf=\"profileForm.get('username').valid\">\n                Username Present\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>First Name (<span class=\"text-danger\">*</span>)</label>\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('firstName')}\" formControlName=\"firstName\" placeholder=\"Your First Name\" autocomplete=\"firstName\">\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('firstName')\">\n                {{getErrors('firstName')}}\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Last Name</label>\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('lastName')}\" formControlName=\"lastName\" placeholder=\"Your Last Name\" autocomplete=\"lastName\">\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('lastName')\">\n                {{getErrors('lastName')}}\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Email (<span class=\"text-danger\">*</span>)</label>\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('email')}\" formControlName=\"email\" placeholder=\"Your Email\" autocomplete=\"email\">\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('email')\">\n                {{getErrors('email')}}\n              </div>\n            </div>\n            <!-- <div class=\"form-group\">\n              <label>Password (<span class=\"text-danger\">*</span>)</label>\n              <input type=\"password\" class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('password')}\" formControlName=\"password\" placeholder=\"Password\">\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('password')\">\n                {{getErrors('password')}}\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label>Confirm Password (<span class=\"text-danger\">*</span>)</label>\n              <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('confirmPassword')}\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\">\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('confirmPassword')\">\n                {{getErrors('confirmPassword')}}\n              </div>\n            </div> -->\n            <div>\n              <button type=\"submit\" [disabled]=\"loader\" class=\"btn btn-primary d-inline-block\">\n                  <span class=\"spinner-border spinner-border-sm\" *ngIf=\"loader\" role=\"status\">\n                      <span class=\"sr-only\">Loading...</span>\n                    </span>Update Profile</button>\n            </div>\n            <div class=\"invalid-feedback mt-3 d-block\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid view-area\">\n    <div class=\"row mt-4\">\n      <div class=\"col-md-4 m-auto\">\n          <div class=\"card\">\n          <div class=\"card-header bg-primary text-light\">\n            Register\n          </div>\n          <div class=\"card-body\">\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n              <div class=\"form-group\">\n                <label>First Name (<span class=\"text-danger\">*</span>)</label>\n                <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('firstName')}\" formControlName=\"firstName\" placeholder=\"Your First Name\" autocomplete=\"firstName\">\n                <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('firstName')\">\n                  {{getErrors('firstName')}}\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Last Name</label>\n                <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('lastName')}\" formControlName=\"lastName\" placeholder=\"Your Last Name\" autocomplete=\"lastName\">\n                <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('lastName')\">\n                  {{getErrors('lastName')}}\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Email (<span class=\"text-danger\">*</span>)</label>\n                <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('email')}\" formControlName=\"email\" placeholder=\"Your Email\" autocomplete=\"email\">\n                <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('email')\">\n                  {{getErrors('email')}}\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Password (<span class=\"text-danger\">*</span>)</label>\n                <input type=\"password\" class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('password')}\" formControlName=\"password\" placeholder=\"Password\">\n                <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('password')\">\n                  {{getErrors('password')}}\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Confirm Password (<span class=\"text-danger\">*</span>)</label>\n                <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('confirmPassword')}\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\">\n                <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('confirmPassword')\">\n                  {{getErrors('confirmPassword')}}\n                </div>\n              </div>\n              <div>\n                <button type=\"submit\" [disabled]=\"loader\" class=\"btn btn-primary d-inline-block\">\n                    <span class=\"spinner-border spinner-border-sm\" *ngIf=\"loader\" role=\"status\">\n                        <span class=\"sr-only\">Loading...</span>\n                      </span> Register</button>\n                <button type=\"button\" [disabled]=\"loader\" [routerLink]=\"['/']\" class=\"btn btn-outline-success d-inline-block ml-1\">Already a User ? Login</button>\n              </div>\n              <div class=\"invalid-feedback mt-3 d-block\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reset-password/reset-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-md-6 offset-md-3 col-sm-10 offset-sm-1\">\n    <div class=\"card mx-auto w-75\">\n      <div class=\"card-header bg-primary text-light\">Reset Password\n      </div>\n      <div class=\"card-body\">\n        <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPassword()\">\n          <div class=\"form-group\">\n            <label>Password<span class=\"text-danger\">*</span></label>\n            <input type=\"password\" class=\"form-control\" autocomplete=\"off\"\n              [ngClass]=\"{'is-invalid': isInvalid('password')}\" formControlName=\"password\"\n              placeholder=\"Enter Password\">\n            <div class=\"invalid-feedback\" *ngIf=\"isInvalid('password')\">{{getErrors('password')}}\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Confirm Password<span class=\"text-danger\">*</span></label>\n            <input type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid': isInvalid('confirmPassword')}\"\n              formControlName=\"confirmPassword\" placeholder=\"Enter Confirm Password\">\n            <div class=\"invalid-feedback\" *ngIf=\"isInvalid('confirmPassword')\"\n              >{{getErrors('confirmPassword')}}\n            </div>\n          </div>\n          <div class=\"spinner-border text-primary\" *ngIf=\"loader\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n          <button type=\"submit\" *ngIf=\"!loader\" class=\"btn btn-outline-primary d-inline-block\">Submit</button>\n          <div class=\"invalid-feedback mt-3 d-block\" *ngIf=\"errorMessage\" [ngClass]=\"{'text-success': success}\">{{errorMessage}}</div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/verify-account/verify-account.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/verify-account/verify-account.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid view-area\">\n  <div class=\"row mt-4\">\n    <div class=\"m-auto\">\n      <div class=\"card\">\n        <div class=\"card-header bg-primary text-light\">\n          Verify Your Account\n        </div>\n        <div class=\"card-body\">\n          <div class=\"text-success d-block\" *ngIf=\"successMsg\">{{successMsg}}</div>\n          <form [formGroup]=\"verifyForm\" (ngSubmit)=\"verifyOtp()\">\n            <div class=\"form-group\">\n              <label>Enter OTP</label>\n              <input class=\"form-control\" [ngClass]=\"{'is-invalid': getInvalidCondition('otp')}\"\n                formControlName=\"otp\" placeholder=\"e.g. 123456\" autocomplete=\"otp\">\n              <div class=\"invalid-feedback\" *ngIf=\"getInvalidCondition('otp')\">\n                {{getErrors('otp')}}\n              </div>\n            </div>\n            <div>\n              <div class=\"spinner-border text-primary\" *ngIf=\"loader\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n              </div>\n              <button type=\"submit\" [disabled]=\"!otpSent\" class=\"btn btn-primary d-inline-block\">Verify</button>\n              <button type=\"button\" #resendButton class=\"btn btn-outline-success float-right\" [disabled]=\"!isResend\" (click)=\"sendOtp()\">Resend\n                <ng-container *ngIf=\"resendTime !== null\">\n                  in {{resendTime | date: 'mm:ss'}}\n                </ng-container>\n              </button>\n            </div>\n            <div class=\"invalid-feedback mt-3 d-block\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






let ApiService = class ApiService {
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
    forgotPass(email) {
        const forgotUrl = this.apiUrl + '/user/forgot-password';
        return this.httpClient.post(forgotUrl, { email, baseUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl });
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
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



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
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");













const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { checkloggedIn: true } },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { checkloggedIn: true } },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { checkloggedIn: true } },
    { path: 'reset-password', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { checkloggedIn: true } },
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");





















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
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPasswordComponent"],
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__["ResetPasswordComponent"]
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
    getErrors(formControl, formGroup, validations) {
        const errorField = validations[formControl];
        for (const i in errorField) {
            if (formGroup.get(formControl).hasError(errorField[i].type)) {
                return errorField[i].message;
            }
        }
    }
    isInvalid(formgroup, formControl) {
        return (formgroup.get(formControl).invalid &&
            formgroup.get(formControl).dirty);
    }
    markFieldsAsDirty(formGroup) {
        Object.keys(formGroup.controls).forEach(formControl => {
            const control = formGroup.get(formControl);
            control.markAsDirty({ onlySelf: true });
        });
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".other-user {\n  background: #4f85b5a6;\n}\n\n.current-user {\n  background: #80808085;\n  align-self: flex-end;\n}\n\n.current-user, .other-user {\n  padding: 20px 20px;\n  border-radius: 5px;\n  display: inline-block;\n  width: 25%;\n  position: relative;\n}\n\n.scrollable {\n  min-height: 470px;\n  max-height: 470px;\n  overflow: scroll;\n}\n\n.message-date {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  font-size: 0.7rem;\n}\n\n.new-day {\n  text-align: center;\n}\n\n.new-day::before, .new-day::after {\n  content: \"\";\n  height: 1px;\n  display: inline-block;\n  width: 40%;\n  background-color: rgba(0, 0, 0, 0.7);\n  margin: 0 1%;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91bWVzaGNoYXVoYW4vRG9jdW1lbnRzL25vZGVzYW5kYm94L2FuZ3VsYXItc29ja2V0L3NyYy9hcHAvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXRyb29tL2NoYXRyb29tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVkscUJBQUE7QUNFWjs7QUREQTtFQUFjLHFCQUFBO0VBQXVCLG9CQUFBO0FDTXJDOztBRExBO0VBQTJCLGtCQUFBO0VBQW9CLGtCQUFBO0VBQW9CLHFCQUFBO0VBQXVCLFVBQUE7RUFBWSxrQkFBQTtBQ2F0Rzs7QURaQTtFQUFZLGlCQUFBO0VBQWtCLGlCQUFBO0VBQWtCLGdCQUFBO0FDa0JoRDs7QURqQkE7RUFBYyxrQkFBQTtFQUFvQixXQUFBO0VBQWEsVUFBQTtFQUFZLGlCQUFBO0FDd0IzRDs7QUR2QkE7RUFBUyxrQkFBQTtBQzJCVDs7QUQxQkE7RUFBa0MsV0FBQTtFQUFhLFdBQUE7RUFBYSxxQkFBQTtFQUF1QixVQUFBO0VBQVksb0NBQUE7RUFBc0MsWUFBQTtFQUFjLHNCQUFBO0FDb0NuSiIsImZpbGUiOiJzcmMvYXBwL2NoYXRyb29tL2NoYXRyb29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90aGVyLXVzZXJ7YmFja2dyb3VuZDogIzRmODViNWE2O31cbi5jdXJyZW50LXVzZXJ7YmFja2dyb3VuZDogIzgwODA4MDg1OyBhbGlnbi1zZWxmOiBmbGV4LWVuZH1cbi5jdXJyZW50LXVzZXIsIC5vdGhlci11c2Vye3BhZGRpbmc6IDIwcHggMjBweDsgYm9yZGVyLXJhZGl1czogNXB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAyNSU7IHBvc2l0aW9uOiByZWxhdGl2ZX1cbi5zY3JvbGxhYmxle21pbi1oZWlnaHQ6IDQ3MHB4O21heC1oZWlnaHQ6IDQ3MHB4O292ZXJmbG93OiBzY3JvbGx9XG4ubWVzc2FnZS1kYXRle3Bvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiA1cHg7IHJpZ2h0OiA1cHg7IGZvbnQtc2l6ZTogMC43cmVtO31cbi5uZXctZGF5e3RleHQtYWxpZ246IGNlbnRlcjt9XG4ubmV3LWRheTo6YmVmb3JlLCAubmV3LWRheTo6YWZ0ZXJ7Y29udGVudDogXCJcIjsgaGVpZ2h0OiAxcHg7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDQwJTsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpOyBtYXJnaW46IDAgMSU7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxuIiwiLm90aGVyLXVzZXIge1xuICBiYWNrZ3JvdW5kOiAjNGY4NWI1YTY7XG59XG5cbi5jdXJyZW50LXVzZXIge1xuICBiYWNrZ3JvdW5kOiAjODA4MDgwODU7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4uY3VycmVudC11c2VyLCAub3RoZXItdXNlciB7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNjcm9sbGFibGUge1xuICBtaW4taGVpZ2h0OiA0NzBweDtcbiAgbWF4LWhlaWdodDogNDcwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5tZXNzYWdlLWRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxuLm5ldy1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXctZGF5OjpiZWZvcmUsIC5uZXctZGF5OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgbWFyZ2luOiAwIDElO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */"

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
        template: __webpack_require__(/*! raw-loader!./chatroom.component.html */ "./node_modules/raw-loader/index.js!./src/app/chatroom/chatroom.component.html"),
        styles: [__webpack_require__(/*! ./chatroom.component.scss */ "./src/app/chatroom/chatroom.component.scss")]
    })
], ChatroomComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(chatService, apiService) {
        this.chatService = chatService;
        this.apiService = apiService;
        this.loader = false;
        this.forgotForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.forgotValidations = {
            email: [{
                    type: 'required',
                    message: 'Email is required'
                }]
        };
    }
    ngOnInit() {
    }
    isInvalid(control) {
        return this.chatService.isInvalid(this.forgotForm, control);
    }
    getErrors(formcontrol) {
        return this.chatService.getErrors(formcontrol, this.forgotForm, this.forgotValidations);
    }
    sendMail() {
        if (this.forgotForm.valid) {
            const email = this.forgotForm.value.email;
            this.forgotForm.disable();
            this.apiService.forgotPass(email).subscribe(res => {
                this.errorMessage = res.message;
            }, err => this.errorMessage = this.chatService.showResponseError(err)).add(() => {
                this.forgotForm.enable();
            });
        }
        else {
            this.chatService.markFieldsAsDirty(this.forgotForm);
        }
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/forgot-password/forgot-password.component.scss")]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

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
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let HeaderComponent = class HeaderComponent {
    constructor(chatService, apiService) {
        this.chatService = chatService;
        this.apiService = apiService;
    }
    ngOnInit() {
    }
    isLoggedIn() {
        return this.chatService.isLoggedIn();
    }
    logout() {
        this.apiService.logout();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/joinchat/joinchat.component.scss":
/*!**************************************************!*\
  !*** ./src/app/joinchat/joinchat.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".joinbox {\n  box-shadow: 3px 4px 15px -2px rgba(0, 0, 0, 0.75);\n  padding: 30px 20px;\n  background: #85dbf5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91bWVzaGNoYXVoYW4vRG9jdW1lbnRzL25vZGVzYW5kYm94L2FuZ3VsYXItc29ja2V0L3NyYy9hcHAvam9pbmNoYXQvam9pbmNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2pvaW5jaGF0L2pvaW5jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsaURBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9qb2luY2hhdC9qb2luY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qb2luYm94IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggNHB4IDE1cHggLTJweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCA0cHggMTVweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIGJveC1zaGFkb3c6IDNweCA0cHggMTVweCAtMnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgYmFja2dyb3VuZDogIzg1ZGJmNTtcbn1cbiIsIi5qb2luYm94IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggNHB4IDE1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDNweCA0cHggMTVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDNweCA0cHggMTVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgYmFja2dyb3VuZDogIzg1ZGJmNTtcbn0iXX0= */"

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
        return this.chatService.getErrors(formcontrol, this.joinFormGroup, this.joinValidations);
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
        template: __webpack_require__(/*! raw-loader!./joinchat.component.html */ "./node_modules/raw-loader/index.js!./src/app/joinchat/joinchat.component.html"),
        styles: [__webpack_require__(/*! ./joinchat.component.scss */ "./src/app/joinchat/joinchat.component.scss")]
    })
], JoinchatComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../chat.service */ "./src/app/chat.service.ts");







let LoginComponent = class LoginComponent {
    constructor(chatService, apiService, router) {
        this.chatService = chatService;
        this.apiService = apiService;
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
        return this.chatService.getErrors(formcontrol, this.loginForm, this.loginValidations);
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
            this.apiService.login(this.loginForm.value).subscribe(response => {
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
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ProfileComponent = class ProfileComponent {
    constructor(chatService, apiService, router) {
        this.chatService = chatService;
        this.apiService = apiService;
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
        this.apiService.getUserDetails().subscribe(res => {
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
            this.apiService.checkIfUserExists(usernameControl.value).subscribe(res => {
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
        return this.chatService.getErrors(formcontrol, this.profileForm, this.profileValidations);
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
            this.apiService.updateProfile(this.profileForm.value).subscribe(res => {
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
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../chat.service */ "./src/app/chat.service.ts");







let RegisterComponent = class RegisterComponent {
    constructor(chatService, router, apiService) {
        this.chatService = chatService;
        this.router = router;
        this.apiService = apiService;
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
        return this.chatService.getErrors(formcontrol, this.registerForm, this.registerValidations);
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
            this.apiService.register(this.registerForm.value).subscribe(response => {
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
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");





let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(fb, validateService, activatedRoute, router) {
        this.fb = fb;
        this.validateService = validateService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loader = false;
        this.success = false;
        this.resetPasswordForm = this.fb.group({
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
                ]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            token: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validators: this.validateService.mustMatch('password', 'confirmPassword')
        });
        this.resetPasswordValidations = {
            password: [
                {
                    type: 'required',
                    message: 'Password is required'
                },
                {
                    type: 'minlength',
                    message: 'Password must have a minimum length of 8 characters'
                }
            ],
            confirmPassword: [
                {
                    type: 'required',
                    message: 'Confirm Password is required'
                },
                {
                    type: 'mustMatch',
                    message: 'Confirm Password must match Password'
                }
            ]
        };
    }
    ngOnInit() {
        const token = this.activatedRoute.snapshot.queryParams.token;
        if (token === undefined || token === '') {
            this.router.navigate(['/forgot-password']);
        }
        else {
            this.resetPasswordForm.controls.token.setValue(token);
        }
    }
    getErrors(controlName) {
        return this.validateService.getErrors(controlName, this.resetPasswordForm, this.resetPasswordValidations);
    }
    isInvalid(controlName) {
        return this.validateService.isInvalid(this.resetPasswordForm, controlName);
    }
    resetPassword() {
        if (this.resetPasswordForm.valid) {
            const body = this.resetPasswordForm.value;
            delete body.confirmPassword;
            console.log(body);
            this.resetPasswordForm.disable();
            /* this.apiService.resetPassword(body).subscribe(res => {
              this.successMessage = res.message;
              console.log(res);
              setTimeout(() => {
                this.router.navigateByUrl('/');
              }, 3000);
            }, err => {
              console.log(err);
              this.errorMessage = this.apiService.showResponseError(err);
              if (this.errorMessage === 'jwt expired') {
                setTimeout(() => {
                  this.router.navigateByUrl('/forgot-password');
                }, 3000);
              }
            }).add(() => this.resetPasswordForm.enable()); */
        }
        else {
            this.validateService.markFieldsAsDirty(this.resetPasswordForm);
        }
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html"),
        styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/reset-password/reset-password.component.scss")]
    })
], ResetPasswordComponent);



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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1hY2NvdW50L3ZlcmlmeS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");






let VerifyAccountComponent = class VerifyAccountComponent {
    constructor(chatService, apiService, /* private renderer: Renderer2, */ router) {
        this.chatService = chatService;
        this.apiService = apiService;
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
        this.apiService.sendOtp().subscribe(res => {
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
        return this.chatService.getErrors(formcontrol, this.verifyForm, this.verifyValidations);
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
            this.apiService.confirmOtp(otpInput).subscribe(res => {
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
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VerifyAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify-account',
        template: __webpack_require__(/*! raw-loader!./verify-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/verify-account/verify-account.component.html"),
        styles: [__webpack_require__(/*! ./verify-account.component.scss */ "./src/app/verify-account/verify-account.component.scss")]
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    socketUrl: 'http://localhost:3000',
    baseUrl: 'http://localhost:3000'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/umeshchauhan/Documents/nodesandbox/angular-socket/src/main.ts */"./src/main.ts");


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