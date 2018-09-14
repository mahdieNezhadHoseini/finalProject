"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(el) {
        this.el = el;
        this.itemsPerPage = 10;
        this.numberOfVisiblePaginators = 10;
        this.paginators = [];
        this.activePage = 1;
        this.firstVisibleIndex = 1;
        this.lastVisibleIndex = this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
        this.tableData = [];
    }
    PaginationComponent.prototype.changePage = function (event) {
        if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
            this.activePage = +event.target.text;
            this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
            this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        }
    };
    PaginationComponent.prototype.nextPage = function (event) {
        if (this.pages.last.nativeElement.classList.contains('active')) {
            if ((this.numberOfPaginators - this.numberOfVisiblePaginators) >= this.lastVisiblePaginator) {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator += this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator = this.numberOfPaginators;
            }
        }
        this.activePage += 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    };
    PaginationComponent.prototype.previousPage = function (event) {
        if (this.pages.first.nativeElement.classList.contains('active')) {
            if ((this.lastVisiblePaginator - this.firstVisiblePaginator) === this.numberOfVisiblePaginators) {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= (this.numberOfPaginators % this.numberOfVisiblePaginators);
            }
        }
        this.activePage -= 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    };
    PaginationComponent.prototype.firstPage = function () {
        this.activePage = 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    };
    PaginationComponent.prototype.lastPage = function () {
        this.activePage = this.numberOfPaginators;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        if (this.numberOfPaginators % this.numberOfVisiblePaginators === 0) {
            this.firstVisiblePaginator = this.numberOfPaginators - this.numberOfVisiblePaginators;
            this.lastVisiblePaginator = this.numberOfPaginators;
        }
        else {
            this.lastVisiblePaginator = this.numberOfPaginators;
            this.firstVisiblePaginator = this.lastVisiblePaginator - (this.numberOfPaginators % this.numberOfVisiblePaginators);
        }
    };
    PaginationComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= 100; i++) {
            this.tableData.push({ id: i, title: 'Post ' + i });
        }
        if (this.tableData.length % this.itemsPerPage === 0) {
            this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage);
        }
        else {
            this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage + 1);
        }
        for (var i = 1; i <= this.numberOfPaginators; i++) {
            this.paginators.push(i);
        }
    };
    __decorate([
        core_1.ViewChildren('pages'),
        __metadata("design:type", core_1.QueryList)
    ], PaginationComponent.prototype, "pages", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map