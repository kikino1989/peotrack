webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">PeoTrack</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/main\">Clients</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/pending-orders\">Pending Payment</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'PeoTrack, the personal order tracking app that is a joy to use.';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__client_details_client_details_component__ = __webpack_require__("../../../../../src/app/client-details/client-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pending_orders_pending_orders_component__ = __webpack_require__("../../../../../src/app/pending-orders/pending-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_details_order_details_component__ = __webpack_require__("../../../../../src/app/order-details/order-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pagination_pagination_component__ = __webpack_require__("../../../../../src/app/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__list_box_list_box_component__ = __webpack_require__("../../../../../src/app/list-box/list-box.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_8__client_details_client_details_component__["a" /* ClientDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pending_orders_pending_orders_component__["a" /* PendingOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__order_details_order_details_component__["a" /* OrderDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pagination_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__list_box_list_box_component__["a" /* ListBoxComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__routes__["a" /* routes */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/client-details/client-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".client-details {\r\n    margin-bottom: 16px;\r\n    margin-top: 16px;\r\n    border-style: solid;\r\n    border-width: 0.5px;\r\n    border-color: rgb(243, 241, 241);\r\n\r\n    padding: 8px;\r\n}\r\n\r\n.client-card{\r\n    width: 100%;\r\n}\r\n\r\n.list-controls{\r\n    margin-top: 16px;\r\n    margin-left: 16px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.list-container{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 250px;\r\n    margin-bottom: 16px;\r\n    border-style: solid;\r\n    border-width: 0.5px;\r\n    border-color: rgb(243, 241, 241);\r\n    overflow-x: auto;\r\n}\r\n\r\n.pagination-controls{\r\n    padding-left: 15%;\r\n}\r\n\r\n.new-order{\r\n    margin-top: 16px;\r\n    margin-bottom: 8px;   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/client-details/client-details.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-link\" (click)=\"goBack()\">\n  <i class=\"fa fa-reply\" aria-hidden=\"true\"></i>\n  back\n</button>\n<br />\n\n<button class=\"btn btn-link\" (click)=\"toggle()\">\n  <i class=\"fa fa-{{ show? 'eye-slash': 'eye' }}\" aria-hidden=\"true\"></i>\n  {{ (!show)? 'Show': 'Hide' }}\n</button>\n\n<div *ngIf=\"show && showcard\" class=\"card client-card\">\n  <div class=\"card-body\">\n    <h6 class=\"card-title\">Client Details</h6>\n    <p class=\"card-text\">{{ client.fullname }}</p>\n    <p class=\"card-text\">{{ client.phone }}</p>\n    <p *ngIf=\"client.email\" class=\"card-text\">{{ client.email }}</p>\n    <p *ngIf=\"client.address\" class=\"card-text\">{{ client.address }}</p>\n    <button class=\"btn btn-link card-link\" (click)=\"showEdit()\" >\n      <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n      Edit\n    </button>\n  </div>\n</div>\n\n<form *ngIf=\"show && showform\" class=\"client-details\">\n  <legend>\n    <small> Client Details </small>\n  </legend>\n  <fieldset>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"fullname\" \n      aria-describedby=\"fullnameHelp\" placeholder=\"Client fullname\" \n      [(ngModel)]=\"client.fullname\" name=\"fullname\" required>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"tel\" class=\"form-control form-control-sm\" id=\"phone\" \n      aria-describedby=\"phoneHelp\" placeholder=\"Enter phone number\" \n      [(ngModel)]=\"client.phone\" name=\"phone\" required>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control form-control-sm\" id=\"email\" \n      aria-describedby=\"emailHelp\" placeholder=\"Enter email address (optional)\"\n      [(ngModel)]=\"client.email\" name=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"address\" \n    aria-describedby=\"addressHelp\" placeholder=\"Enter home address (optional)\"\n    [(ngModel)]=\"client.address\" name=\"address\">\n  </div>\n</fieldset>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveClient()\">\n    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n    Save\n  </button>\n</form>\n<br />\n \n<a class=\"new-order\" routerLink=\"/new-order/{{client.id}}\" >\n    <b><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> New Order</b>\n</a>\n\n<list-box path=\"/order-details\" [clientId]=\"client.id\" [entities]=\"clientOrders\" [(sort)]=\"sort\" \n[height]=\"listHeight\" [dMethod]=\"displayMethod\" [sMethod]=\"searchMethod\" (sortChange)=\"updateList()\" \n[statusHandler]=\"saveStatus\" listType=\"order\"></list-box>\n\n<pagination></pagination>"

/***/ }),

/***/ "../../../../../src/app/client-details/client-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientDetailsComponent = (function () {
    function ClientDetailsComponent(clientService, orderService, route, router) {
        this.clientService = clientService;
        this.orderService = orderService;
        this.route = route;
        this.router = router;
        this.listHeight = "250px";
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        this.show = true;
        this.showform = false;
        this.showcard = true;
        this.sort = false;
        this.client = this.clientService.find(parseInt(this.route.snapshot.paramMap.get('id')));
        this.clientOrders = this.orderService.getClientOrders(parseInt(this.route.snapshot.paramMap.get('id')), this.sort);
    };
    ClientDetailsComponent.prototype.updateList = function () {
        this.clientOrders = this.orderService.getClientOrders(parseInt(this.route.snapshot.paramMap.get('id')), this.sort);
    };
    /**
     * @desc shows or hide card or form
     */
    ClientDetailsComponent.prototype.toggle = function () {
        this.show = !this.show;
        // enlarge or shorten list container
        if (this.show) {
            this.listHeight = '250px';
        }
        else {
            this.listHeight = '500px';
        }
    };
    /**
     * @desc show the card and hide form
     */
    ClientDetailsComponent.prototype.showEdit = function () {
        this.showcard = false;
        this.showform = true;
    };
    /**
     * @desc hide the card and show form
     */
    ClientDetailsComponent.prototype.showClient = function () {
        this.showcard = true;
        this.showform = false;
    };
    ClientDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['/main']);
    };
    /**
     * @desc save client information
     */
    ClientDetailsComponent.prototype.saveClient = function () {
        this.showClient();
        // save client infor to database
    };
    ClientDetailsComponent.prototype.saveStatus = function (order) {
        // save order to the data base
    };
    ClientDetailsComponent.prototype.searchMethod = function (order, search) {
        return order.has(search);
    };
    ClientDetailsComponent.prototype.displayMethod = function (order) {
        return "date : " + order.created_at + " total " + order.getTotal() + " ";
    };
    return ClientDetailsComponent;
}());
ClientDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-client-details',
        template: __webpack_require__("../../../../../src/app/client-details/client-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/client-details/client-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ClientDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=client-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/list-box/list-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-controls{\r\n    margin-top: 16px;\r\n    margin-left: 16px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.list-container{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 250px;\r\n    margin-bottom: 16px;\r\n    border-style: solid;\r\n    border-width: 0.5px;\r\n    border-color: rgb(243, 241, 241);\r\n    overflow-x: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-box/list-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-controls row\" >\n    <input [(ngModel)]=\"search\" type=\"text\" class=\"form-control form-control-sm col-8\" \n      id=\"clientName\" placeholder=\"Enter text\" />\n    <button (click)=\"toggleSort()\" class=\"col-4 btn btn-link\">\n        Sort\n        <i class=\"fa fa-sort-{{ sort? 'desc': 'asc' }}\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <div class=\"list-container\" id=\"list-container\" [style.height]=\"height\">\n    <ol>\n      <ng-container *ngFor=\"let entity of entities\">\n          <li *ngIf=\"search =='' || (search != '' && searchMethod(entity, search))\">\n\n            <!-- if the list is of clients -->\n            <a *ngIf=\"listType && listType == 'client'\" routerLink=\"{{path}}/{{entity.id}}\" >\n              {{ displayMethod(entity) }}\n            </a>\n            \n            <!-- if the list is of orders -->\n            <a *ngIf=\"listType && listType=='order'\" routerLink=\"{{path}}/{{entity.id}}/{{back}}\" >\n              {{ displayMethod(entity) }}\n            </a>\n            <select *ngIf=\"listType && listType=='order'\" (change)=\"statusHandler(entity)\"\n              [disabled]=\"entity.status == 'Finished'\" [(ngModel)]=\"entity.status\">\n              <option ngValue=\"Pending\">Pending</option>\n              <option ngValue=\"Paid\">Paid</option>\n              <option ngValue=\"Cancelled\">Cancelled</option>\n              <option ngValue=\"Finished\">Finished</option>\n            </select>\n\n            <!-- if the list is of items -->\n            {{ (listType && listType == 'item')? displayMethod(entity): '' }}\n            <button *ngIf=\"listType && listType=='item'\" class=\"btn btn-link\" (click)=\"deleteHandler(entity, entities)\">\n              <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\n              Remove\n            </button>\n        </li>\n      </ng-container>\n    </ol>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/list-box/list-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListBoxComponent = (function () {
    function ListBoxComponent() {
        this.listType = 'client';
        this.back = 'client-details';
        this.height = "250px";
        this.sortChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ListBoxComponent.prototype.ngOnInit = function () {
        this.search = '';
    };
    ListBoxComponent.prototype.toggleSort = function () {
        this.sort = !this.sort;
        this.sortChange.emit(this.sort);
    };
    ListBoxComponent.prototype.searchMethod = function (entity, search) {
        return this.sMethod(entity, search);
    };
    ListBoxComponent.prototype.displayMethod = function (entity) {
        return this.dMethod(entity);
    };
    return ListBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ListBoxComponent.prototype, "listType", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ListBoxComponent.prototype, "back", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ListBoxComponent.prototype, "entities", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ListBoxComponent.prototype, "path", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], ListBoxComponent.prototype, "clientId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Function)
], ListBoxComponent.prototype, "sMethod", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Function)
], ListBoxComponent.prototype, "dMethod", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ListBoxComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ListBoxComponent.prototype, "sort", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ListBoxComponent.prototype, "sortChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Function)
], ListBoxComponent.prototype, "statusHandler", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Function)
], ListBoxComponent.prototype, "deleteHandler", void 0);
ListBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'list-box',
        template: __webpack_require__("../../../../../src/app/list-box/list-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list-box/list-box.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListBoxComponent);

var _a;
//# sourceMappingURL=list-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".client-information {\r\n    margin-bottom: 16px;\r\n    margin-top: 16px;\r\n    border-style: solid;\r\n    border-width: 0.5px;\r\n    border-color: rgb(243, 241, 241);\r\n\r\n    padding: 8px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-link\" (click)=\"toggleForm()\">\n    <i class=\"fa fa-{{ showform? 'eye-slash': 'plus' }}\" aria-hidden=\"true\"></i>\n    {{ (showform)? 'Hide': 'Add Client' }}\n  </button>\n\n<form *ngIf=\"showform\" class=\"client-information\">\n  <legend>\n    <small> Client Information </small>\n  </legend>\n  <fieldset>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"fullname\" \n      aria-describedby=\"fullnameHelp\" placeholder=\"Client fullname\" \n      [(ngModel)]=\"newClient.fullname\" name=\"fullname\" required>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"tel\" class=\"form-control form-control-sm\" id=\"phone\" \n      aria-describedby=\"phoneHelp\" placeholder=\"Enter phone number\" \n      [(ngModel)]=\"newClient.phone\" name=\"phone\" required>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control form-control-sm\" id=\"email\" \n      aria-describedby=\"emailHelp\" placeholder=\"Enter email address (optional)\"\n      [(ngModel)]=\"newClient.email\" name=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"address\" \n    aria-describedby=\"addressHelp\" placeholder=\"Enter home address (optional)\"\n    [(ngModel)]=\"newClient.address\" name=\"address\">\n  </div>\n</fieldset>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addClient()\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> \n    Add\n  </button>\n</form> \n\n<list-box path=\"/client-details\" listType=\"client\" [entities]=\"clients\" [(sort)]=\"sort\" \n  [height]=\"listHeight\" [dMethod]=\"displayMethod\" [sMethod]=\"searchMethod\" (sortChange)=\"updateList()\" >\n</list-box>\n\n<pagination></pagination>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_client__ = __webpack_require__("../../../../../src/app/models/client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(clientService) {
        this.clientService = clientService;
        this.listHeight = '250px';
    }
    /**
     * @desc init component properties
     */
    MainComponent.prototype.ngOnInit = function () {
        this.sort = false;
        this.newClient = new __WEBPACK_IMPORTED_MODULE_2__models_client__["a" /* default */]("", "");
        this.showform = true;
        this.clients = this.clientService.getClients(this.sort);
    };
    MainComponent.prototype.updateList = function () {
        this.clients = this.clientService.getClients(this.sort);
    };
    /**
     * @desc toggles the client form
     */
    MainComponent.prototype.toggleForm = function () {
        this.showform = !this.showform;
        // enlarge or shorten list container
        if (this.showform) {
            this.listHeight = '250px';
        }
        else {
            this.listHeight = '500px';
        }
    };
    /**
     * @desc add client to clients
     */
    MainComponent.prototype.addClient = function () {
        this.clients.push(this.newClient);
        this.newClient = new __WEBPACK_IMPORTED_MODULE_2__models_client__["a" /* default */]("", "");
    };
    MainComponent.prototype.searchMethod = function (client, search) {
        return client.fullname.includes(search);
    };
    MainComponent.prototype.displayMethod = function (client) {
        return client.fullname;
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/Item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Item = (function () {
    function Item(name, sellPrice, buyPrice, id) {
        if (id === void 0) { id = Item.count; }
        this.name = name;
        this.sellPrice = sellPrice;
        this.buyPrice = buyPrice;
        this.id = id;
        Item.count++;
    }
    return Item;
}());
/* harmony default export */ __webpack_exports__["a"] = (Item);
Item.count = 0;
//# sourceMappingURL=Item.js.map

/***/ }),

/***/ "../../../../../src/app/models/client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Client = (function () {
    function Client(fullname, phone, email, address, id) {
        if (id === void 0) { id = Client.count; }
        this.fullname = fullname;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.id = id;
        Client.count++;
    }
    return Client;
}());
/* harmony default export */ __webpack_exports__["a"] = (Client);
Client.count = 0;
//# sourceMappingURL=client.js.map

/***/ }),

/***/ "../../../../../src/app/models/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Item = (function () {
    function Item(name, sellPrice, buyPrice, id) {
        if (id === void 0) { id = Item.count; }
        this.name = name;
        this.sellPrice = sellPrice;
        this.buyPrice = buyPrice;
        this.id = id;
        Item.count++;
    }
    return Item;
}());
/* harmony default export */ __webpack_exports__["a"] = (Item);
Item.count = 0;
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "../../../../../src/app/models/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StatusEnum */
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["pending"] = 0] = "pending";
    StatusEnum[StatusEnum["paid"] = 1] = "paid";
    StatusEnum[StatusEnum["finished"] = 2] = "finished";
    StatusEnum[StatusEnum["cancelled"] = 3] = "cancelled";
})(StatusEnum || (StatusEnum = {}));
var Order = (function () {
    function Order(clientId, created_at, itemList, _status, id) {
        if (_status === void 0) { _status = StatusEnum.pending; }
        if (id === void 0) { id = Order.count; }
        this.clientId = clientId;
        this.created_at = created_at;
        this.itemList = itemList;
        this._status = _status;
        this.id = id;
        Order.count++;
    }
    Object.defineProperty(Order.prototype, "status", {
        get: function () {
            switch (this._status) {
                case StatusEnum.pending: return "Pending";
                case StatusEnum.paid: return "Paid";
                case StatusEnum.finished: return "Finished";
                case StatusEnum.cancelled: return "Cancelled";
            }
            return "Pending";
        },
        set: function (value) {
            switch (value) {
                case "Pending": this._status = StatusEnum.pending;
                case "Paid": this._status = StatusEnum.paid;
                case "finished": this._status = StatusEnum.finished;
                case "cancelled": this._status = StatusEnum.cancelled;
            }
        },
        enumerable: true,
        configurable: true
    });
    Order.prototype.has = function (itemName) {
        var _has = false;
        this.itemList.forEach(function (item) {
            if (item.name.includes(itemName)) {
                _has = true;
            }
        });
        return _has;
    };
    Order.prototype.getTotal = function () {
        var count = 0;
        this.itemList.forEach(function (item) {
            count += item.sellPrice;
        });
        return count;
    };
    Order.prototype.getItemCount = function () {
        return this.itemList.length;
    };
    return Order;
}());
/* harmony default export */ __webpack_exports__["a"] = (Order);
Order.count = 0;
//# sourceMappingURL=order.js.map

/***/ }),

/***/ "../../../../../src/app/order-details/order-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order-details/order-details.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-link\" (click)=\"goBack()\">\n  <i class=\"fa fa-reply\" aria-hidden=\"true\"></i>\n  back\n</button>\n<br />\n\n<label>\n  <a routerLink=\"/client-details/{{client.id}}\">{{ client.name }}</a>\n</label>\n\n<form class=\"order-items\">\n  <legend>\n    <small> Order Details </small>\n  </legend>\n  <fieldset>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control form-control-sm\" id=\"name\" aria-describedby=\"nameHelp\" placeholder=\"Enter Product name\"\n        [(ngModel)]=\"defaultItem.name\" name=\"name\" required>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"number\" class=\"form-control form-control-sm\" id=\"sellPrice\" aria-describedby=\"sellPriceHelp\" placeholder=\"Enter sell price\"\n        [(ngModel)]=\"defaultItem.sellPrice\" name=\"sellPrice\" required>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"number\" class=\"form-control form-control-sm\" id=\"buyPrice\" aria-describedby=\"buyPriceHelp\" placeholder=\"Enter buying price (optional)\"\n        [(ngModel)]=\"defaultItem.buyPrice\" name=\"buyPrice\">\n    </div>\n  </fieldset>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"add()\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n    Add\n  </button>\n</form>\n\n<form class=\"save-order\">\n\n  <list-box listType=\"item\" [entities]=\"order.itemList\" [(sort)]=\"sort\" [deleteHandler]=\"delete\"\n    [dMethod]=\"displayMethod\" [sMethod]=\"searchMethod\" (sortChange)=\"updateList()\" >\n  </list-box>\n  \n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"save()\">\n    <i class=\"fa fa-save\" aria-hidden=\"true\"></i>\n    Save\n  </button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/order-details/order-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Item__ = __webpack_require__("../../../../../src/app/models/Item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_order__ = __webpack_require__("../../../../../src/app/models/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderDetailsComponent = (function () {
    function OrderDetailsComponent(clientService, orderService, route, router) {
        this.clientService = clientService;
        this.orderService = orderService;
        this.route = route;
        this.router = router;
        this.sort = false;
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        this.defaultItem = new __WEBPACK_IMPORTED_MODULE_2__models_Item__["a" /* default */]("your product", 0);
        if (this.route.snapshot.paramMap.get('orderId')) {
            this.order = this.orderService.find(parseInt(this.route.snapshot.paramMap.get('orderId')));
        }
        else {
            this.order = new __WEBPACK_IMPORTED_MODULE_3__models_order__["a" /* default */](parseInt(this.route.snapshot.paramMap.get('clientId')), new Date().toUTCString(), []);
        }
        this.client = this.clientService.find(this.order.clientId);
    };
    OrderDetailsComponent.prototype.add = function () {
        this.order.itemList.push(this.defaultItem);
        this.defaultItem = new __WEBPACK_IMPORTED_MODULE_2__models_Item__["a" /* default */]("your product", 0);
    };
    OrderDetailsComponent.prototype.delete = function (item, items) {
        items.splice(items.indexOf(item));
    };
    OrderDetailsComponent.prototype.goBack = function () {
        // get default back route if src not defined
        var src = !this.route.snapshot.paramMap.get('src') ? 'client-details' : this.route.snapshot.paramMap.get('src');
        // get proper back route
        var path =  true ? src + '/' + this.order.clientId : src;
        // redirate
        this.router.navigate([path]);
    };
    OrderDetailsComponent.prototype.save = function () {
        // save order to the server
        this.orderService.orders.push(this.order);
        this.goBack();
    };
    OrderDetailsComponent.prototype.displayMethod = function (item) {
        return "product : " + item.name + ", sold at " + item.sellPrice + " " + (item.buyPrice ? 'bought at' + item.buyPrice : '');
    };
    OrderDetailsComponent.prototype.searchMethod = function (item, search) {
        return item.name.includes(search);
    };
    OrderDetailsComponent.prototype.updateList = function () {
        if (this.sort) {
            return this.order.itemList.sort(function (a, b) {
                if (a.name > b.name)
                    return 1;
                else if (a.name < b.name)
                    return -1;
                else
                    return 0;
            });
        }
        else
            return this.order.itemList.sort(function (a, b) {
                if (a.name < b.name)
                    return 1;
                else if (a.name > b.name)
                    return -1;
                else
                    return 0;
            });
    };
    return OrderDetailsComponent;
}());
OrderDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-order-details',
        template: __webpack_require__("../../../../../src/app/order-details/order-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order-details/order-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], OrderDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=order-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination-controls\">\n  <nav aria-label=\"Page navigation example\">\n    <ul class=\"pagination justify-content-center\">\n      <li class=\"page-item\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&laquo;</span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n      </li>\n      <li class=\"page-item\">\n        <a class=\"page-link\" href=\"#\">1</a>\n      </li>\n      <li class=\"page-item\">\n        <a class=\"page-link\" href=\"#\">2</a>\n      </li>\n      <li class=\"page-item\">\n        <a class=\"page-link\" href=\"#\">3</a>\n      </li>\n      <li class=\"page-item\">\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'pagination',
        template: __webpack_require__("../../../../../src/app/pagination/pagination.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pagination/pagination.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaginationComponent);

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/pending-orders/pending-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pending-orders/pending-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-link\" (click)=\"goBack()\">\n  <i class=\"fa fa-reply\" aria-hidden=\"true\"></i>\n  back\n</button>\n<br />\n\n<list-box path=\"/order-details\" back=\"pending-orders\" listType=\"order\" [entities]=\"orders\" \n  [(sort)]=\"sort\" [statusHandler]=\"saveStatus\" [dMethod]=\"displayMethod\" [sMethod]=\"searchMethod\" \n  (sortChange)=\"updateList()\" [height]=\"listHeight\">\n</list-box>\n\n<pagination></pagination>"

/***/ }),

/***/ "../../../../../src/app/pending-orders/pending-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_service__ = __webpack_require__("../../../../../src/app/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PendingOrdersComponent = (function () {
    function PendingOrdersComponent(clientService, orderService, route, router) {
        this.clientService = clientService;
        this.orderService = orderService;
        this.route = route;
        this.router = router;
        this.listHeight = "500px";
    }
    PendingOrdersComponent.prototype.ngOnInit = function () {
        this.show = true;
        this.sort = false;
        this.orders = this.orderService.getPendingOrders(this.sort);
    };
    PendingOrdersComponent.prototype.goBack = function () {
        this.router.navigate(['/main']);
    };
    PendingOrdersComponent.prototype.saveStatus = function (order) {
        // save order to the data base
    };
    PendingOrdersComponent.prototype.searchMethod = function (order, search) {
        return order.has(search);
    };
    PendingOrdersComponent.prototype.displayMethod = function (order) {
        return "date : " + order.created_at + " total " + order.getTotal() + " ";
    };
    PendingOrdersComponent.prototype.updateList = function () {
        this.orderService.getPendingOrders(this.sort);
    };
    return PendingOrdersComponent;
}());
PendingOrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pending-orders',
        template: __webpack_require__("../../../../../src/app/pending-orders/pending-orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pending-orders/pending-orders.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PendingOrdersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=pending-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_details_client_details_component__ = __webpack_require__("../../../../../src/app/client-details/client-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pending_orders_pending_orders_component__ = __webpack_require__("../../../../../src/app/pending-orders/pending-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_details_order_details_component__ = __webpack_require__("../../../../../src/app/order-details/order-details.component.ts");




var routes = [
    {
        path: 'main',
        component: __WEBPACK_IMPORTED_MODULE_0__main_main_component__["a" /* MainComponent */]
    },
    {
        path: 'client-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__client_details_client_details_component__["a" /* ClientDetailsComponent */]
    },
    {
        path: 'pending-orders',
        component: __WEBPACK_IMPORTED_MODULE_2__pending_orders_pending_orders_component__["a" /* PendingOrdersComponent */]
    },
    {
        path: 'new-order/:clientId',
        component: __WEBPACK_IMPORTED_MODULE_3__order_details_order_details_component__["a" /* OrderDetailsComponent */]
    },
    {
        path: 'order-details/:orderId/:src',
        component: __WEBPACK_IMPORTED_MODULE_3__order_details_order_details_component__["a" /* OrderDetailsComponent */]
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_client__ = __webpack_require__("../../../../../src/app/models/client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = (function () {
    function ClientService() {
        this.clients = [
            new __WEBPACK_IMPORTED_MODULE_1__models_client__["a" /* default */]("enrique gonzalez", "7867097661", "kikino1989@yahoo.com", "14421 sw 88th street apt m301"),
            new __WEBPACK_IMPORTED_MODULE_1__models_client__["a" /* default */]('kexelis gonzalez', '7863706223')
        ];
    }
    /**
     * @desc get client list
     */
    ClientService.prototype.getClients = function (sort) {
        if (sort === void 0) { sort = false; }
        if (sort) {
            return this.clients.sort(function (a, b) {
                if (a.fullname > b.fullname)
                    return 1;
                else if (a.fullname < b.fullname)
                    return -1;
                else
                    return 0;
            });
        }
        else
            return this.clients.sort(function (a, b) {
                if (a.fullname > b.fullname)
                    return -1;
                else if (a.fullname < b.fullname)
                    return 1;
                else
                    return 0;
            });
    };
    /**
     * @desc returns client with the given id
     * @param id: number
     */
    ClientService.prototype.find = function (id) {
        var selectedClient;
        this.clients.forEach(function (client) {
            if (client.id == id) {
                selectedClient = client;
                return;
            }
        });
        return selectedClient;
    };
    return ClientService;
}());
ClientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ClientService);

//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_order__ = __webpack_require__("../../../../../src/app/models/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_item__ = __webpack_require__("../../../../../src/app/models/item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService() {
        this.orders = [
            new __WEBPACK_IMPORTED_MODULE_1__models_order__["a" /* default */](0, new Date().toUTCString(), [
                new __WEBPACK_IMPORTED_MODULE_2__models_item__["a" /* default */]('shampopo', 30)
            ]),
            new __WEBPACK_IMPORTED_MODULE_1__models_order__["a" /* default */](0, new Date().toUTCString(), [
                new __WEBPACK_IMPORTED_MODULE_2__models_item__["a" /* default */]('cleanser', 30),
                new __WEBPACK_IMPORTED_MODULE_2__models_item__["a" /* default */]('soap', 30)
            ]),
        ];
    }
    OrderService.prototype.find = function (id) {
        var selectedOrder;
        this.orders.forEach(function (order) {
            if (order.id == id) {
                selectedOrder = order;
                return;
            }
        });
        return selectedOrder;
    };
    // return orders
    OrderService.prototype.getOrders = function () {
        return this.orders;
    };
    OrderService.prototype.getPendingOrders = function (sort) {
        if (sort === void 0) { sort = false; }
        var pendingOrders = [];
        this.orders.forEach(function (order) {
            if (order.status == 'Pending') {
                pendingOrders.push(order);
            }
        });
        return pendingOrders;
    };
    OrderService.prototype.getClientOrders = function (clientId, sort) {
        if (sort === void 0) { sort = false; }
        var selectedOrders = [];
        this.orders.forEach(function (order) {
            if (order.clientId == clientId) {
                selectedOrders.push(order);
            }
        });
        return (sort) ?
            selectedOrders.sort(function (a, b) {
                if (a.created_at > b.created_at)
                    return -1;
                else if (a.created_at < b.created_at)
                    return 1;
                else
                    return 0;
            }) :
            selectedOrders.sort(function (a, b) {
                if (a.created_at < b.created_at)
                    return -1;
                else if (a.created_at > b.created_at)
                    return 1;
                else
                    return 0;
            });
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], OrderService);

//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map